---
title: Boletín U02 — Intermedio
description: Ejercicios intermedios de sintaxis Java, Scanner, conversiones y operadores
---

# 📝 Boletín U02 — Intermedio

> Sin soluciones. Aquí ya toca escribir programas completos y compilarlos de verdad en IntelliJ.

---

## Ejercicio 1: preséntate

Escribe un programa llamado `Presentacion` que, usando `Scanner`, pida el nombre (`String`) y la edad (`int`) del usuario y muestre: `"Hola, [nombre]. El año que viene tendrás [edad+1] años."`.

---

## Ejercicio 2: implícita o explícita

Para cada línea, indica si la conversión de tipo es implícita, explícita, o si directamente no compila:

```java
int a = 10;
double b = a;
int c = (int) 7.9;
long d = a;
int e = 7.9;
byte f = (byte) 300;
```

---

## Ejercicio 3: la trampa de `++`

¿Qué valores tienen `x`, `y` y `z` al final? Razona línea a línea antes de comprobarlo.

```java
int x = 5;
int y = x++ + ++x;
int z = x;
```

---

## Ejercicio 4: caza el overflow

Este programa pretende sumar dos números grandes usando `byte`, pero el resultado no tiene sentido. Explica qué pasa y corrígelo cambiando el tipo adecuado.

```java
byte a = 100;
byte b = 50;
byte suma = (byte) (a + b);
System.out.println(suma);
```

---

## Ejercicio 5: rectángulo por Scanner

Escribe un programa que lea la base y la altura de un rectángulo (como `double`) y muestre su área y su perímetro, cada uno con dos decimales de precisión (pista: `System.out.printf("%.2f", valor);`).

---

## Ejercicio 6: números y texto no son lo mismo

¿Qué imprime cada línea? Razónalo antes de comprobarlo.

```java
System.out.println(1 + 2 + "3");
System.out.println("1" + 2 + 3);
System.out.println("Total: " + 1 + 2);
System.out.println("Total: " + (1 + 2));
```

---

## Ejercicio 7: documenta tu clase

Escribe un comentario Javadoc encima de esta clase que explique qué hace el programa, en dos o tres líneas.

```java
public class ConversorTemperatura {
    public static void main(String[] args) {
        double celsius = 25.0;
        double fahrenheit = (celsius * 9 / 5) + 32;
        System.out.println(fahrenheit);
    }
}
```

---

## Ejercicio 8: tu ficha de socio

Crea en IntelliJ una clase `FichaSocio` que declare variables para nombre (`String`), número de socio (`int`), cuota mensual (`double`) y si está al corriente de pago (`boolean`), pida esos cuatro datos por `Scanner` y los muestre todos con un formato ordenado, uno por línea.
