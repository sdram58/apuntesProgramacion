---
title: Boletín U02 — Extras
description: Retos de tipos, operadores y aritmética con trampa, sin control de flujo todavía
---

# 📝 Boletín U02 — Extras

> ⭐ Los retos de CodeWars y AceptaElReto cogen ritmo de verdad a partir de la U03, cuando tengas `if` y bucles reales. Mientras tanto, estos cuatro retos exprimen lo que ya sabes — variables, tipos y operadores — sin necesitar ni una sola estructura de control.

---

## Desafío 1: intercambia sin variable auxiliar

Dadas dos variables `int a = 5;` y `int b = 8;`, intercambia sus valores (que `a` acabe valiendo 8 y `b` valiendo 5) **sin declarar una tercera variable**. Solo puedes usar operadores aritméticos.

:::tip[Pista]
Si sumas `a + b` y lo guardas en `a`, ese nuevo `a` "recuerda" ambos valores a la vez. A partir de ahí, con una resta puedes recuperar el valor original de `b` para dárselo a `a`, y viceversa.
:::

<details>
<summary>💡 Solución</summary>

```java
int a = 5;
int b = 8;

a = a + b; // a vale 13 (5+8)
b = a - b; // b vale 5 (13-8, el "a" original)
a = a - b; // a vale 8 (13-5, el "b" original)

System.out.println("a = " + a + ", b = " + b);
```

</details>

---

## Desafío 2: descompón un número de tres cifras

Dado `int numero = 736;` (o cualquier otro valor de tres cifras), obtén por separado la centena, la decena y la unidad **usando solo `/` y `%`**, sin tratar el número como texto.

:::tip[Pista]
`numero % 10` te da siempre la última cifra. `numero / 10` te "quita" esa cifra. Repite la idea sobre lo que queda.
:::

<details>
<summary>💡 Solución</summary>

```java
int numero = 736;

int unidad = numero % 10;         // 6
int decena = (numero / 10) % 10;  // 3
int centena = numero / 100;       // 7

System.out.println("Centena: " + centena);
System.out.println("Decena: " + decena);
System.out.println("Unidad: " + unidad);
```

</details>

---

## Desafío 3: par o impar sin `%`

Escribe una expresión que determine si un `int n` es par, usando el operador **`&`** (Y a nivel de bits) en vez de `n % 2 == 0`.

:::tip[Pista]
El último bit de un número en binario es 1 si es impar y 0 si es par — exactamente el mismo patrón que la última cifra decimal decide si un número es múltiplo de 10. `n & 1` aísla ese último bit.
:::

<details>
<summary>💡 Solución</summary>

```java
int n = 42;
boolean esPar = (n & 1) == 0;
System.out.println(esPar); // true
```

`n & 1` deja únicamente el bit menos significativo de `n`: vale `1` si `n` es impar y `0` si es par. Es el mismo truco que usan por debajo muchas librerías cuando necesitan comprobar paridad muy rápido, sin pasar por una división.

</details>

---

## Desafío 4: ida y vuelta de temperatura

Convierte `25.0` grados Celsius a Fahrenheit, y el resultado de vuelta a Celsius, encadenando las dos fórmulas (`F = C*9/5+32` y `C = (F-32)*5/9`). ¿Te da exactamente `25.0` o hay algo raro? Repite el experimento con `float` en vez de `double` para las dos conversiones y compara.

:::tip[Pista]
No es un error tuyo si no coincide del todo — piensa en qué tipo estás usando y cuánta precisión real tiene.
:::

<details>
<summary>💡 Solución</summary>

```java
double celsius = 25.0;
double fahrenheit = (celsius * 9 / 5) + 32;
double vuelta = (fahrenheit - 32) * 5 / 9;
System.out.println(vuelta); // 25.0, con double no hay sorpresas

float celsiusF = 25.0f;
float fahrenheitF = (celsiusF * 9 / 5) + 32;
float vueltaF = (fahrenheitF - 32) * 5 / 9;
System.out.println(vueltaF); // puede no dar exactamente 25.0
```

Con `double` (64 bits de precisión) el redondeo interno suele bastar para que la ida y vuelta cuadre. Con `float` (32 bits, mucha menos precisión) es más fácil que aparezcan pequeños errores de redondeo acumulados — una demostración práctica de por qué se recomendó usar `double` como tipo decimal por defecto en la teoría de esta unidad.

</details>
