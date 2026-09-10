---
title: Boletín U02 — Intermedio (resuelto)
description: Soluciones del boletín intermedio sobre sintaxis y tipos de datos en Java
---

# ✅ Boletín U02 — Intermedio (resuelto)

1. **Scanner: nombre y edad**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.util.Scanner;

   public class NombreEdad {
       public static void main(String[] args) {
           Scanner sc = new Scanner(System.in);
           System.out.print("Nombre: ");
           String nombre = sc.nextLine();
           System.out.print("Edad: ");
           int edad = sc.nextInt();
           System.out.println(nombre + " tiene " + edad + " años");
       }
   }
   ```

   Aquí no hay problema porque `nextLine()` se lee **antes** que `nextInt()` — el problema clásico aparece al revés (`nextInt()` seguido de `nextLine()`), porque `nextInt()` deja sin consumir el salto de línea.
   </details>

2. **Switch con el resto de una división**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.util.Scanner;

   public class RestoDivision {
       public static void main(String[] args) {
           Scanner sc = new Scanner(System.in);
           int n = sc.nextInt();
           String mensaje = switch (n % 3) {
               case 0 -> "El resto es 0";
               case 1 -> "El resto es 1";
               case 2 -> "El resto es 2";
               default -> "Imposible";
           };
           System.out.println(mensaje);
       }
   }
   ```
   </details>

3. **Enum Talla**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.util.Scanner;

   public class TallaRopa {
       enum Talla { S, M, L, XL }

       public static void main(String[] args) {
           Scanner sc = new Scanner(System.in);
           System.out.print("Talla (S/M/L/XL): ");
           Talla talla = Talla.valueOf(sc.nextLine().toUpperCase());
           switch (talla) {
               case S -> System.out.println("Bastante ajustada");
               case M -> System.out.println("Talla estándar");
               case L -> System.out.println("Amplia");
               case XL -> System.out.println("Muy amplia");
           }
       }
   }
   ```

   `Talla.valueOf(texto)` convierte un `String` en el valor del `enum` correspondiente — lanza un error si el texto no coincide con ninguno de los valores definidos.
   </details>

4. **Tabla con printf**
   <details>
   <summary>💡 Solución</summary>

   ```java
   public class TablaProductos {
       public static void main(String[] args) {
           System.out.printf("%-15s %8s %6s%n", "Producto", "Precio", "Cant.");
           System.out.printf("%-15s %8.2f %6d%n", "Teclado", 24.99, 3);
           System.out.printf("%-15s %8.2f %6d%n", "Ratón", 12.5, 5);
           System.out.printf("%-15s %8.2f %6d%n", "Monitor", 189.0, 1);
       }
   }
   ```

   El `-` antes del número de ancho (`%-15s`) alinea el texto a la izquierda en vez de a la derecha — útil para que la primera columna quede en forma de lista legible.
   </details>

5. **IMC con if/else if**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.util.Scanner;

   public class Imc {
       public static void main(String[] args) {
           Scanner sc = new Scanner(System.in);
           System.out.print("Peso (kg): ");
           double peso = sc.nextDouble();
           System.out.print("Altura (m): ");
           double altura = sc.nextDouble();
           double imc = peso / (altura * altura);
           System.out.printf("IMC: %.2f - ", imc);
           if (imc < 18.5) {
               System.out.println("Bajo peso");
           } else if (imc < 25) {
               System.out.println("Normal");
           } else if (imc < 30) {
               System.out.println("Sobrepeso");
           } else {
               System.out.println("Obesidad");
           }
       }
   }
   ```
   </details>

6. **String y ==**
   <details>
   <summary>💡 Solución</summary>

   Imprime `true`, `false`, `true`. `a` y `b` son dos literales `"hola"` idénticos, y Java reutiliza el mismo objeto en memoria para literales iguales (el *string pool*), así que `a == b` es `true`. `c` se crea explícitamente con `new String(...)`, que fuerza un objeto **nuevo** en memoria aunque el contenido sea igual, así que `a == c` es `false`. Pero `a.equals(c)` compara el **contenido**, no la posición en memoria, así que da `true`. Por eso la regla es: nunca compares `String` con `==`, usa siempre `.equals(...)`.
   </details>

7. **Factorial con BigInteger**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.math.BigInteger;

   public class FactorialGrande {
       public static void main(String[] args) {
           BigInteger resultado = BigInteger.ONE;
           for (int i = 1; i <= 30; i++) {
               resultado = resultado.multiply(BigInteger.valueOf(i));
           }
           System.out.println("30! = " + resultado);
       }
   }
   ```

   30! tiene 33 dígitos — muy por encima de lo que un `long` puede almacenar (máximo ~19 dígitos). `BigInteger` es inmutable: cada `multiply` devuelve un `BigInteger` **nuevo**, por eso hay que reasignar `resultado` en cada vuelta.
   </details>

8. **Edad con LocalDate**
   <details>
   <summary>💡 Solución</summary>

   ```java
   import java.time.LocalDate;
   import java.time.Period;
   import java.util.Scanner;

   public class CalcularEdad {
       public static void main(String[] args) {
           Scanner sc = new Scanner(System.in);
           System.out.print("Año de nacimiento: ");
           int anio = sc.nextInt();
           System.out.print("Mes: ");
           int mes = sc.nextInt();
           System.out.print("Día: ");
           int dia = sc.nextInt();

           LocalDate nacimiento = LocalDate.of(anio, mes, dia);
           int edad = Period.between(nacimiento, LocalDate.now()).getYears();
           System.out.println("Edad: " + edad + " años");
       }
   }
   ```

   `Period.between(fecha1, fecha2)` calcula la diferencia entre dos fechas ya descompuesta en años, meses y días — más cómodo que hacer la resta a mano.
   </details>
