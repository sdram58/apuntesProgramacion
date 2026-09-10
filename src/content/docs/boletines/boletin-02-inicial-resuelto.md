---
title: Boletín U02 — Inicial (resuelto)
description: Soluciones del boletín inicial sobre sintaxis y tipos de datos en Java
---

# ✅ Boletín U02 — Inicial (resuelto)

1. **Nombre y edad**
   <details>
   <summary>💡 Solución</summary>

   ```java
   public class Presentacion {
       public static void main(String[] args) {
           String nombre = "Ada";
           int edad = 16;
           System.out.println("Me llamo " + nombre + " y tengo " + edad + " años");
       }
   }
   ```
   </details>

2. **Tipo de dato más adecuado**
   <details>
   <summary>💡 Solución</summary>

   - Habitantes de España (~48 millones): **`int`** es suficiente (cabe hasta ~2.147 millones), pero si el dato pudiera crecer mucho más, `long` sería más seguro.
   - Precio con decimales: **`double`** (el tipo decimal por defecto en Java).
   - Si un usuario está registrado: **`boolean`**.
   - Letra inicial de un DNI: **`char`** (un único carácter).
   </details>

3. **IVA con constante**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.util.Scanner;

   public class PrecioConIva {
       public static void main(String[] args) {
           final double IVA = 0.21;
           Scanner sc = new Scanner(System.in);
           System.out.print("Precio sin IVA: ");
           double precio = sc.nextDouble();
           double precioFinal = precio + (precio * IVA);
           System.out.printf("Precio final: %.2f%n", precioFinal);
       }
   }
   ```
   </details>

4. **División entera vs. real**
   <details>
   <summary>💡 Solución</summary>

   Imprime `3` y luego `3.5`. `7 / 2` divide dos enteros, así que Java trunca el resultado a entero (descarta la parte decimal, sin redondear). `7.0 / 2` tiene un operando `double`, así que Java hace la división real.
   </details>

5. **Operaciones básicas**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.util.Scanner;

   public class Operaciones {
       public static void main(String[] args) {
           Scanner sc = new Scanner(System.in);
           System.out.print("a: ");
           int a = sc.nextInt();
           System.out.print("b: ");
           int b = sc.nextInt();
           System.out.println("Suma: " + (a + b));
           System.out.println("Resta: " + (a - b));
           System.out.println("Producto: " + (a * b));
           System.out.println("División entera: " + (a / b));
           System.out.println("Resto: " + (a % b));
       }
   }
   ```
   </details>

6. **Hipotenusa con Math**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.util.Scanner;

   public class Hipotenusa {
       public static void main(String[] args) {
           Scanner sc = new Scanner(System.in);
           System.out.print("Cateto: ");
           double cateto = sc.nextDouble();
           double hipotenusa = Math.sqrt(Math.pow(cateto, 2) + Math.pow(cateto, 2));
           System.out.printf("Hipotenusa: %.2f%n", hipotenusa);
       }
   }
   ```
   </details>

7. **Métodos de String**
   <details>
   <summary>💡 Solución</summary>

   ```java
   public class MetodosString {
       public static void main(String[] args) {
           String nombre = "Ada Lovelace";
           System.out.println("Longitud: " + nombre.length());
           System.out.println("Mayúsculas: " + nombre.toUpperCase());
           System.out.println("3 primeros: " + nombre.substring(0, 3));
       }
   }
   ```
   </details>

8. **Conversión implícita vs. casting**
   <details>
   <summary>💡 Solución</summary>

   La **conversión implícita** (o *widening*) la hace Java automáticamente cuando pasas de un tipo "más pequeño" a uno "más grande" sin riesgo de perder información — por ejemplo, `double d = 5;` (un `int` se convierte solo a `double`). El **casting explícito** lo tienes que escribir tú, con el tipo destino entre paréntesis, cuando vas del tipo "más grande" al "más pequeño" y puede haber pérdida de datos — por ejemplo, `int i = (int) 5.9;` (aquí `i` vale `5`, se trunca la parte decimal, y si no pusieras el `(int)` el código ni siquiera compilaría).
   </details>
