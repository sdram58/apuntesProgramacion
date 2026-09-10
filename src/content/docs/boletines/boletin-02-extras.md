---
title: Boletín U02 — Extras
description: Retos de lectura y predicción de código Java, sin necesitar bucles ni arrays todavía
---

# 🔥 Boletín U02 — Extras

> Los retos de CodeWars y AceptaElReto necesitan bucles, arrays y excepciones, así que arrancan de verdad en la U03. Mientras tanto, estos retos ponen a prueba tu capacidad de **leer código Java y predecir qué hace**, sin ejecutarlo.

## Reto 1: ¿Qué imprime esto?

```java
int a = 5;
int b = a++;
int c = ++a;
System.out.println(a + " " + b + " " + c);
```

<details>
<summary>💡 Solución</summary>

Imprime `7 5 7`. `b = a++` usa el valor de `a` (5) **antes** de incrementarlo, así que `b` vale 5 y `a` pasa a valer 6. `c = ++a` incrementa `a` **primero** (pasa a 7) y luego usa ese nuevo valor, así que `c` vale 7. Al final, `a` también vale 7.
</details>

## Reto 2: El casting escondido

```java
int resultado = (int) (7 / 2.0) + 7 / 2;
System.out.println(resultado);
```

<details>
<summary>💡 Solución</summary>

Imprime `6`. `7 / 2.0` es una división real (uno de los operandos es `double`), da `3.5`; el casting `(int)` lo trunca a `3`. `7 / 2` es una división entera, da `3` directamente. `3 + 3` = `6`.
</details>

## Reto 3: switch sin break

```java
int mes = 4;
switch (mes) {
    case 3:
    case 4:
    case 5:
        System.out.println("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        System.out.println("Verano");
        break;
    default:
        System.out.println("Otra estación");
}
```

**Reto:** explica por qué este código imprime "Primavera" para `mes = 3`, `mes = 4` **y** `mes = 5`, aunque solo hay un `System.out.println("Primavera")`.

<details>
<summary>💡 Solución</summary>

Cuando un `case` no tiene instrucciones propias (como `case 3:` y `case 4:`, vacíos), la ejecución simplemente "cae" al siguiente `case` hasta encontrar un `break` — es lo que se llama *fall-through*. Así que `case 3`, `case 4` y `case 5` comparten el mismo bloque de código, el de `case 5`, y el `break` final corta la ejecución antes de llegar a `case 6`. Es una técnica deliberada muy usada para agrupar varios valores que deben hacer lo mismo, pero también la causa del bug más típico del `switch` clásico cuando alguien se olvida un `break` por error.
</details>
