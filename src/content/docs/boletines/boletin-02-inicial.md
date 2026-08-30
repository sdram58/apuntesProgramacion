---
title: Boletín U02 — Inicial
description: Ejercicios básicos de sintaxis Java, tipos de datos y operadores
---

# 📝 Boletín U02 — Inicial

> Sin soluciones. Abre IntelliJ y compila de verdad cada cosa que no tengas clara — no te fíes solo de "a mí me parece que...".

---

## Ejercicio 1: declara cada tipo

Declara una variable de cada uno de estos tipos, con un valor de ejemplo razonable: `int`, `double`, `char`, `boolean`, `long`, `String`.

---

## Ejercicio 2: ¿qué imprime?

Sin ejecutarlo, escribe la salida exacta:

```java
public class Division {
    public static void main(String[] args) {
        int a = 9;
        int b = 2;
        System.out.println(a / b);
        System.out.println(a / 2.0);
        System.out.println(a % b);
    }
}
```

---

## Ejercicio 3: cazador de errores

Este código tiene **3 errores**. Encuéntralos y corrígelos.

```java
public class ErrorFinder {
    public static void main(String[] args) {
        int edad = 17
        Double altura = 1.75;
        char inicial = "M";
        System.out.println(edad + altura);
    }
}
```

---

## Ejercicio 4: completa la conversión

Este código no compila porque falta un *casting*. Añádelo donde corresponda para que asigne la parte entera de `precio` a `precioEntero`.

```java
double precio = 45.99;
int precioEntero = precio;
```

---

## Ejercicio 5: empareja tipo y tamaño

| Tipo | Tamaño |
|---|---|
| 1. `byte` | A. 64 bits |
| 2. `int` | B. 8 bits |
| 3. `long` | C. 16 bits (o un carácter) |
| 4. `char` | D. 32 bits |

Escribe las respuestas como "1→B, 2→D, ...".

---

## Ejercicio 6: identifica el comentario

¿Cuál de estos tres bloques es un comentario de línea, cuál de bloque y cuál Javadoc?

```java
// A
/* B */
/** C */
```

---

## Ejercicio 7: literales válidos

¿Cuáles de estas asignaciones compilan y cuáles no? Para las que no compilen, explica por qué.

```java
int a = 3.5;
double b = 3;
char c = 'AB';
long d = 100L;
boolean e = 1;
```

---

## Ejercicio 8: precedencia de operadores

Calcula a mano el resultado exacto de esta expresión, sin usar el compilador:

```java
int resultado = 2 + 3 * 4 - 6 / 2;
```
