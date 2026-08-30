<#
.SYNOPSIS
  Genera el EPUB del curso a partir de los .md de src/content/docs,
  usando Pandoc. Requiere Pandoc instalado (https://pandoc.org).

.EXAMPLE
  ./scripts/generate-epub.ps1
#>
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

if (-not (Get-Command pandoc -ErrorAction SilentlyContinue)) {
  # PATH del proceso puede no reflejar instalaciones recientes (p.ej. via winget)
  # hasta reiniciar la sesion. Se intenta primero la ruta habitual de usuario.
  $fallback = Join-Path $env:LOCALAPPDATA "Pandoc\pandoc.exe"
  if (Test-Path $fallback) {
    $env:PATH = "$(Split-Path $fallback);$env:PATH"
  } else {
    throw "Pandoc no esta instalado o no esta en el PATH. Instalalo desde https://pandoc.org/installing.html"
  }
}

$docsDir = Join-Path $root "src\content\docs"
$outDir = Join-Path $root "public\epub"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# Orden de lectura del curso. Se amplia a medida que se añaden unidades.
$files = @(
  "01-introduccion-algoritmica-pseudocodigo.md",
  "boletines\boletin-01-inicial.md",
  "boletines\boletin-01-inicial-resuelto.md",
  "boletines\boletin-01-intermedio.md",
  "boletines\boletin-01-intermedio-resuelto.md",
  "boletines\boletin-01-extras.md"
)

function Convert-ToPandocMarkdown {
  param([string]$Content)

  # 1) Extrae el title del frontmatter y lo convierte en un H1.
  $title = ""
  if ($Content -match '(?ms)^---\s*\n(.*?)\n---\s*\n') {
    $frontmatter = $Matches[1]
    if ($frontmatter -match '(?m)^title:\s*"?(.*?)"?\s*$') {
      $title = $Matches[1]
    }
    $Content = $Content.Substring($Matches[0].Length)
  }

  # 2) Convierte los asides de Starlight (:::tipo[Titulo] ... :::) en blockquotes.
  $lines = $Content -split "`r?`n"
  $out = New-Object System.Collections.Generic.List[string]
  $inAside = $false
  foreach ($line in $lines) {
    if (-not $inAside -and $line -match '^:::(\w+)(\[(.*?)\])?\s*$') {
      $asideTitle = if ($Matches[3]) { $Matches[3] } else { $Matches[1].ToUpper() }
      $out.Add("> **$asideTitle**")
      $out.Add(">")
      $inAside = $true
      continue
    }
    if ($inAside -and $line -match '^:::\s*$') {
      $inAside = $false
      continue
    }
    if ($inAside) {
      if ($line.Trim() -eq "") { $out.Add(">") } else { $out.Add("> $line") }
    } else {
      $out.Add($line)
    }
  }
  $Content = ($out -join "`n")

  # 3) Elimina los bloques de enlaces HTML (botones de boletines), irrelevantes en un libro.
  $Content = [System.Text.RegularExpressions.Regex]::Replace(
    $Content, '(?ms)<div class="ejercicio-links">.*?</div>', ''
  )

  if ($title) {
    $Content = "# $title`n`n$Content"
  }

  return $Content
}

Write-Host "Preparando contenido..." -ForegroundColor Cyan
$tmpFile = Join-Path $env:TEMP "apuntes-epub-source.md"
$combined = New-Object System.Collections.Generic.List[string]

foreach ($f in $files) {
  $path = Join-Path $docsDir $f
  if (-not (Test-Path $path)) {
    Write-Host "  (omitido, no existe todavia: $f)" -ForegroundColor DarkYellow
    continue
  }
  $raw = Get-Content -Raw -Path $path -Encoding UTF8
  $combined.Add((Convert-ToPandocMarkdown -Content $raw))
  $combined.Add("`n\newpage`n")
}

Set-Content -Path $tmpFile -Value ($combined -join "`n") -Encoding UTF8

$outFile = Join-Path $outDir "ApuntesProgramacion-es.epub"
$coverImage = Join-Path $root "public\portada-cover.png"
$cssFile = Join-Path $PSScriptRoot "epub.css"

Write-Host "Generando EPUB con Pandoc..." -ForegroundColor Cyan
pandoc $tmpFile `
  -o $outFile `
  --metadata title="Apuntes Programación Java" `
  --metadata author="Curso 1º DAM - Módulo 0485" `
  --metadata lang=es `
  --css $cssFile `
  --epub-cover-image $coverImage `
  --toc `
  --toc-depth=2

if ($LASTEXITCODE -ne 0) { throw "Pandoc fallo generando el EPUB." }

Remove-Item $tmpFile -ErrorAction SilentlyContinue
Write-Host "EPUB generado en public/epub/ApuntesProgramacion-es.epub" -ForegroundColor Green
