---
title: Boletín U01 — Intermedio (Resuelto)
description: Los mismos ejercicios que el boletín intermedio, con soluciones
---

# 📝 Boletín U01 — Intermedio (Resuelto)

> Las soluciones están ocultas en cada ejercicio. No hagas trampa: primero inténtalo de verdad.

---

## Ejercicio 1: el mayor de tres

<details>
<summary>🔄 Solución</summary>

```
INICIO
  LEER n1
  LEER n2
  LEER n3
  mayor ← n1
  SI n2 > mayor ENTONCES
    mayor ← n2
  FINSI
  SI n3 > mayor ENTONCES
    mayor ← n3
  FINSI
  ESCRIBIR mayor
FIN
```

La estrategia es "ir guardando el mayor visto hasta ahora" y comparar cada nuevo número contra él: solo dos comparaciones, sin importar el orden de entrada. Comparar los tres a la vez con condiciones anidadas (`SI n1>n2 Y n1>n3...`) se complica mucho más rápido a medida que crece la cantidad de números.

</details>

---

## Ejercicio 2: traza con acumulador y condición anidada

<details>
<summary>🔄 Solución</summary>

| Línea | `tope` | `total` | `k` | `k <= tope` | `k MOD 2 = 0` | Salida |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 | 4 | — | — | — | — | (lee 4) |
| 3–4 | 4 | 0 | 1 | — | — | — |
| 5 | 4 | 0 | 1 | Verdadero | — | entra al bucle |
| 6 | 4 | 0 | 1 | — | Falso (impar) | va a `SINO` |
| 9 | 4 | 1 | 1 | — | — | — |
| 11 | 4 | 1 | 2 | — | — | — |
| 5 | 4 | 1 | 2 | Verdadero | — | continúa |
| 6 | 4 | 1 | 2 | — | Verdadero (par) | va a `ENTONCES` |
| 7 | 4 | 5 | 2 | — | — | — |
| 11 | 4 | 5 | 3 | — | — | — |
| 5 | 4 | 5 | 3 | Verdadero | — | continúa |
| 6 | 4 | 5 | 3 | — | Falso (impar) | va a `SINO` |
| 9 | 4 | 8 | 3 | — | — | — |
| 11 | 4 | 8 | 4 | — | — | — |
| 5 | 4 | 8 | 4 | Verdadero | — | continúa |
| 6 | 4 | 8 | 4 | — | Verdadero (par) | va a `ENTONCES` |
| 7 | 4 | 16 | 4 | — | — | — |
| 11 | 4 | 16 | 5 | — | — | — |
| 5 | 4 | 16 | 5 | **Falso** | — | sale del bucle |
| 13 | 4 | 16 | 5 | — | — | `"Total acumulado: 16"` |

</details>

---

## Ejercicio 3: caza dos bugs

<details>
<summary>🔄 Solución</summary>

**Bug 1 (bucle infinito):** dentro del `MIENTRAS` nunca se incrementa `contador`. Como siempre vale 0 y `0 <= 5` es eternamente verdadero, el bucle no termina jamás.

**Bug 2 (aunque el bucle terminara):** empezando `contador` en 0 y con la condición `contador <= 5`, el bucle iteraría para 0,1,2,3,4,5 — **6 veces**, no 5 — y luego divide entre 5 igualmente: la media sale mal.

```
INICIO
  sumaNotas ← 0
  contador ← 1
  MIENTRAS contador <= 5 HACER
    LEER nota
    sumaNotas ← sumaNotas + nota
    contador ← contador + 1
  FINMIENTRAS
  media ← sumaNotas / 5
  ESCRIBIR "La nota media es: " + media
FIN
```

Empezar en 1 y comparar con `<= 5` da exactamente 5 iteraciones, coherente con dividir entre 5.

</details>

---

## Ejercicio 4: del diagrama al pseudocódigo

<details>
<summary>🔄 Solución</summary>

```
INICIO
  LEER precio
  LEER esSocio
  SI esSocio = VERDADERO ENTONCES
    descuento ← precio * 0.15
  SINO
    descuento ← 0
  FINSI
  total ← precio - descuento
  SI total > 100 ENTONCES
    total ← total - 10
  FINSI
  ESCRIBIR "Cobrar: " + total
FIN
```

Dos decisiones independientes en secuencia: primero se resuelve el descuento por socio, y con ese resultado ya calculado se evalúa la segunda condición sobre el total.

</details>

---

## Ejercicio 5: validar con REPETIR...HASTA QUE

<details>
<summary>🔄 Solución</summary>

```
INICIO
  REPETIR
    ESCRIBIR "Introduce una calificación (0.0 a 10.0):"
    LEER nota
    SI (nota < 0.0) O (nota > 10.0) ENTONCES
      ESCRIBIR "Error: fuera de rango. Inténtalo de nuevo."
    FINSI
  HASTA QUE (nota >= 0.0) Y (nota <= 10.0)
  ESCRIBIR "Nota válida registrada: " + nota
FIN
```

`REPETIR...HASTA QUE` es la elección correcta porque necesitas pedir el dato **al menos una vez** antes de poder comprobar si es válido — con un `MIENTRAS` tendrías que inventarte un valor inicial falso solo para entrar al bucle.

</details>

---

## Ejercicio 6: conteo con PARA

<details>
<summary>🔄 Solución</summary>

```
INICIO
  positivos ← 0
  negativos ← 0
  ceros ← 0
  PARA i ← 1 HASTA 8 HACER
    ESCRIBIR "Número " + i + " de 8:"
    LEER num
    SI num > 0 ENTONCES
      positivos ← positivos + 1
    SINO
      SI num < 0 ENTONCES
        negativos ← negativos + 1
      SINO
        ceros ← ceros + 1
      FINSI
    FINSI
  FINPARA
  ESCRIBIR "Positivos: " + positivos
  ESCRIBIR "Negativos: " + negativos
  ESCRIBIR "Ceros: " + ceros
FIN
```

</details>

---

## Ejercicio 7: factorial con PARA

<details>
<summary>🔄 Solución</summary>

```
INICIO
  LEER N
  SI N < 0 ENTONCES
    ESCRIBIR "Error: el factorial no existe para negativos"
  SINO
    factorial ← 1
    PARA i ← 1 HASTA N HACER
      factorial ← factorial * i
    FINPARA
    ESCRIBIR "El factorial de " + N + " es: " + factorial
  FINSI
FIN
```

`factorial` se inicializa en 1 (el elemento neutro del producto), no en 0. Fíjate además en que si `N = 0`, el bucle `PARA i ← 1 HASTA 0` no llega a ejecutarse ni una vez, y el algoritmo devuelve `factorial = 1` — justo el resultado correcto de `0!`, sin necesitar ningún caso especial.

</details>

---

## Ejercicio 8: tu proyecto en IntelliJ

<details>
<summary>🔄 Solución</summary>

1. **`.idea/`** guarda la configuración interna del proyecto para IntelliJ (JDK asignado, estilos de código, configuraciones de ejecución) — no se toca a mano. **`.iml`** es el fichero de metadatos del módulo: qué carpetas son código fuente, qué librerías usa, etc.
2. **`src/`** es donde vive tu código Java y solo tu código Java — es lo único que editas y lo único que hace falta versionar en Git. **`out/`** (o `target/`) la genera el propio compilador con los `.class` resultantes; nunca se edita a mano ni se sube al repositorio.
3. Comentar una línea: `Ctrl + /`. Reformatear todo el fichero: `Ctrl + Alt + L`.

</details>
