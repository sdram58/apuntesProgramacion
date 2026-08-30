---
title: Boletín U02 — Intermedio (Resuelto)
description: Los mismos ejercicios que el boletín intermedio, con soluciones
---

# 📝 Boletín U02 — Intermedio (Resuelto)

> Las soluciones están ocultas en cada ejercicio. No hagas trampa: primero inténtalo de verdad, y compílalo en IntelliJ.

---

## Ejercicio 1: preséntate

<details>
<summary>🔄 Solución</summary>

```java
import java.util.Scanner;

public class Presentacion {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("¿Cómo te llamas? ");
        String nombre = sc.nextLine();
        System.out.print("¿Cuántos años tienes? ");
        int edad = sc.nextInt();
        System.out.println("Hola, " + nombre + ". El año que viene tendrás " + (edad + 1) + " años.");
    }
}
```

</details>

---

## Ejercicio 2: implícita o explícita

<details>
<summary>🔄 Solución</summary>

- `double b = a;` → **implícita**. Un `int` siempre cabe en un `double`.
- `int c = (int) 7.9;` → **explícita**. `(int)` fuerza el *casting*; resultado `7`.
- `long d = a;` → **implícita**. Un `int` siempre cabe en un `long`.
- `int e = 7.9;` → **no compila**. Falta el *casting*: asignar un `double` a un `int` requiere `(int)` explícito.
- `byte f = (byte) 300;` → **compila**, pero con overflow: `300` no cabe en un `byte` (rango −128 a 127), así que el valor resultante no es 300 — es un caso de pérdida de información real, no solo teórica.

</details>

---

## Ejercicio 3: la trampa de `++`

<details>
<summary>🔄 Solución</summary>

`x = 7`, `y = 12`, `z = 7`.

Paso a paso: `x++` usa el valor actual de `x` (5) en la suma y **después** incrementa `x` a 6. Acto seguido, `++x` incrementa `x` a 7 **antes** de usarlo, así que aporta 7 a la suma. `y = 5 + 7 = 12`. Al final, `x` vale 7, y `z = x` copia ese 7.

</details>

---

## Ejercicio 4: caza el overflow

<details>
<summary>🔄 Solución</summary>

`a + b` se calcula como `int` (150), pero el *casting* `(byte)` fuerza ese 150 a encajar en 8 bits con signo (rango −128 a 127). Como 150 no cabe, el valor "da la vuelta": el resultado impreso es **−106**, no 150.

Corrección: usar `int` (o al menos `short`) en vez de `byte` para cualquier cantidad que pueda superar 127:

```java
int a = 100;
int b = 50;
int suma = a + b; // 150, sin sorpresas
System.out.println(suma);
```

</details>

---

## Ejercicio 5: rectángulo por Scanner

<details>
<summary>🔄 Solución</summary>

```java
import java.util.Scanner;

public class Rectangulo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Base: ");
        double base = sc.nextDouble();
        System.out.print("Altura: ");
        double altura = sc.nextDouble();

        double area = base * altura;
        double perimetro = 2 * (base + altura);

        System.out.printf("Área: %.2f%n", area);
        System.out.printf("Perímetro: %.2f%n", perimetro);
    }
}
```

</details>

---

## Ejercicio 6: números y texto no son lo mismo

<details>
<summary>🔄 Solución</summary>

```
33
123
Total: 12
Total: 3
```

Java evalúa `+` de izquierda a derecha. En cuanto aparece un `String` en la cadena de sumas, todo lo que viene **después** se concatena como texto — pero lo que ya se había sumado **antes** de llegar al `String`, se suma numéricamente:

- `1 + 2 + "3"` → primero `1 + 2 = 3` (los dos son números), luego `3 + "3" = "33"`.
- `"1" + 2 + 3"` → en cuanto aparece el `String` al principio, todo lo siguiente se concatena: `"1"+2="12"`, `"12"+3="123"`.
- `"Total: " + 1 + 2` → igual: `"Total: "+1="Total: 1"`, `"Total: 1"+2="Total: 12"`.
- `"Total: " + (1 + 2)` → los paréntesis fuerzan a sumar primero: `1+2=3`, y luego `"Total: "+3="Total: 3"`.

</details>

---

## Ejercicio 7: documenta tu clase

<details>
<summary>🔄 Solución</summary>

```java
/**
 * Convierte una temperatura fija de grados Celsius a grados Fahrenheit
 * usando la fórmula estándar F = C * 9/5 + 32, y muestra el resultado
 * por consola.
 */
public class ConversorTemperatura {
    public static void main(String[] args) {
        double celsius = 25.0;
        double fahrenheit = (celsius * 9 / 5) + 32;
        System.out.println(fahrenheit);
    }
}
```

</details>

---

## Ejercicio 8: tu ficha de socio

<details>
<summary>🔄 Solución</summary>

```java
import java.util.Scanner;

public class FichaSocio {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nombre: ");
        String nombre = sc.nextLine();
        System.out.print("Número de socio: ");
        int numeroSocio = sc.nextInt();
        System.out.print("Cuota mensual: ");
        double cuota = sc.nextDouble();
        System.out.print("¿Al corriente de pago? (true/false): ");
        boolean alCorriente = sc.nextBoolean();

        System.out.println("--- Ficha de socio ---");
        System.out.println("Nombre: " + nombre);
        System.out.println("Número: " + numeroSocio);
        System.out.printf("Cuota: %.2f€%n", cuota);
        System.out.println("Al corriente: " + alCorriente);
    }
}
```

</details>
