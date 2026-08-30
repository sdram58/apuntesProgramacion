<#
.SYNOPSIS
  Genera el PDF completo del curso con starlight-to-pdf.

.PARAMETER Target
  "local"  -> construye el sitio, levanta `astro preview` y genera el PDF desde ahi.
  "prod"   -> genera el PDF directamente desde la URL publica de GitHub Pages.

.EXAMPLE
  ./scripts/generate-pdf.ps1 -Target local
  ./scripts/generate-pdf.ps1 -Target prod
#>
param(
  [ValidateSet("local", "prod")]
  [string]$Target = "local"
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$outDir = Join-Path $root "public\pdf"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$commonArgs = @(
  "--preceding-html", "scripts/pdf-cover.html",
  "--header", "scripts/pdf-header.html",
  "--footer", "scripts/pdf-footer.html",
  "--filename", "ApuntesProgramacion-es",
  "--path", "public/pdf",
  "--print-bg",
  "--pdf-outline",
  "--contents-name", "Indice"
)

if ($Target -eq "local") {
  Write-Host "Construyendo el sitio..." -ForegroundColor Cyan
  npm run build
  if ($LASTEXITCODE -ne 0) { throw "El build de Astro fallo." }

  Write-Host "Levantando servidor de preview..." -ForegroundColor Cyan
  $preview = Start-Process -FilePath "npm" -ArgumentList "run", "preview" -PassThru -WindowStyle Hidden

  $url = "http://localhost:4321"
  $ready = $false
  for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 1
    try {
      $resp = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2
      if ($resp.StatusCode -eq 200) { $ready = $true; break }
    } catch { }
  }

  if (-not $ready) {
    Stop-Process -Id $preview.Id -Force -ErrorAction SilentlyContinue
    throw "El servidor de preview no respondio a tiempo en $url."
  }

  try {
    Write-Host "Generando PDF desde $url ..." -ForegroundColor Cyan
    npx starlight-to-pdf $url @commonArgs
  } finally {
    Stop-Process -Id $preview.Id -Force -ErrorAction SilentlyContinue
  }
} else {
  $url = "https://sdram58.github.io/apuntesProgramacion/"
  Write-Host "Generando PDF desde $url ..." -ForegroundColor Cyan
  npx starlight-to-pdf $url @commonArgs
}

Write-Host "PDF generado en public/pdf/ApuntesProgramacion-es.pdf" -ForegroundColor Green
