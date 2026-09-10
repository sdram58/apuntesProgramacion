---
title: Boletín U02 — Intermedio
description: Ejercicios propuestos de nivel intermedio sobre sintaxis y tipos de datos en Java
---

# 📝 Boletín U02 — Intermedio

1. Escribe un programa que use `Scanner` para leer el nombre (`nextLine`) y la edad (`nextInt`) de un usuario, en ese orden, y los muestre por pantalla. Ten cuidado con el orden de lectura — ¿qué problema podrías encontrarte?

2. Escribe un programa que pida un número entero y, usando `switch` (en cualquiera de sus dos formas), muestre si el resto de dividirlo entre 3 es 0, 1 o 2.

3. Define un `enum` llamado `Talla` con los valores `S`, `M`, `L`, `XL`, y un programa que pida una talla por teclado (como texto) y muestre un mensaje distinto según cuál sea, usando un `switch` sobre el enum.

4. Usa `System.out.printf` para mostrar una tabla con 3 columnas alineadas: nombre de producto, precio (con 2 decimales) y cantidad, para 3 productos que definas tú mismo/a.

5. Escribe un programa que calcule el IMC (índice de masa corporal) de una persona a partir de su peso y altura (leídos con `Scanner`), y muestre la categoría (bajo peso / normal / sobrepeso / obesidad) usando `if`/`else if` encadenados.

6. ¿Qué imprime este código, y por qué? (Pista: repasa el apartado sobre `String` y `==`.)
   ```java
   String a = "hola";
   String b = "hola";
   String c = new String("hola");
   System.out.println(a == b);
   System.out.println(a == c);
   System.out.println(a.equals(c));
   ```

7. Escribe un programa que use `BigInteger` para calcular el factorial de 30 (un número demasiado grande para `long`). Pista: `BigInteger` no tiene un método `factorial`, tendrás que multiplicar en un bucle.

8. Escribe un programa que lea la fecha de nacimiento de un usuario (año, mes y día, por separado, con `Scanner`) y muestre su edad, calculada con `LocalDate` y el método `until` o comparando con `LocalDate.now()`.
