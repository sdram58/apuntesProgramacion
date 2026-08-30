---
title: Boletín U02 — Inicial (Resuelto)
description: Los mismos ejercicios que el boletín inicial, con soluciones
---

# 📝 Boletín U02 — Inicial (Resuelto)

> Las soluciones están ocultas en cada ejercicio. No hagas trampa: primero inténtalo de verdad, y compílalo en IntelliJ.

---

## Ejercicio 1: declara cada tipo

<details>
<summary>🔄 Solución</summary>

```java
int edad = 17;
double precio = 19.99;
char inicial = 'J';
boolean activo = true;
long poblacion = 8000000000L;
String nombre = "Ada";
```

</details>

---

## Ejercicio 2: ¿qué imprime?

<details>
<summary>🔄 Solución</summary>

```
4
4.5
1
```

`a / b` es una división entre dos `int` (división entera): `9 / 2 = 4`, se descarta el resto. `a / 2.0` tiene un operando `double`, así que `a` se promociona antes de dividir: `9 / 2.0 = 4.5`. `a % b` es el resto de la división entera: `9 % 2 = 1`.

</details>

---

## Ejercicio 3: cazador de errores

<details>
<summary>🔄 Solución</summary>

1. Falta el `;` al final de `int edad = 17`.
2. `Double` (mayúscula) no es el tipo primitivo `double` — es una clase distinta. Debe ser `double altura = 1.75;`.
3. `'M'` con comillas simples es un `char`; `"M"` con comillas dobles es un `String` de un carácter. Para un `char` hace falta comillas simples: `char inicial = 'M';`.

Además, aunque compile tras corregir esos tres puntos, `edad + altura` suma un `int` y un `double` (promoción automática), no concatena texto — no es un error, pero fíjate en que el resultado es numérico, no un texto con las dos cosas pegadas.

</details>

---

## Ejercicio 4: completa la conversión

<details>
<summary>🔄 Solución</summary>

```java
double precio = 45.99;
int precioEntero = (int) precio; // 45 — se trunca, no se redondea
```

</details>

---

## Ejercicio 5: empareja tipo y tamaño

<details>
<summary>🔄 Solución</summary>

**1→B, 2→D, 3→A, 4→C**

</details>

---

## Ejercicio 6: identifica el comentario

<details>
<summary>🔄 Solución</summary>

- `// A` — comentario de línea.
- `/* B */` — comentario de bloque.
- `/** C */` — comentario Javadoc.

</details>

---

## Ejercicio 7: literales válidos

<details>
<summary>🔄 Solución</summary>

- `int a = 3.5;` → **no compila**. `3.5` es un literal `double`; asignarlo a un `int` necesitaría un *casting* explícito.
- `double b = 3;` → **compila**. `3` es un `int`, y un `int` se promociona a `double` sin pérdida — conversión implícita.
- `char c = 'AB';` → **no compila**. Un `char` guarda exactamente un carácter, no dos.
- `long d = 100L;` → **compila** sin problema.
- `boolean e = 1;` → **no compila**. En Java, a diferencia de otros lenguajes, un `boolean` no admite valores numéricos — solo `true` o `false`.

</details>

---

## Ejercicio 8: precedencia de operadores

<details>
<summary>🔄 Solución</summary>

`resultado = 11`

Multiplicación y división tienen prioridad sobre suma y resta, y entre operadores del mismo nivel se evalúa de izquierda a derecha:
`2 + (3 * 4) - (6 / 2)` = `2 + 12 - 3` = `11`.

</details>
