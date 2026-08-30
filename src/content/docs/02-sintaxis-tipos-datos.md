---
title: "U02 — Primeros pasos en Java: sintaxis y tipos de datos"
description: "Tu primer programa Java real: estructura, tipos primitivos, operadores, conversiones y Scanner"
emoji: 🔤
---

<p><small>La U01 te enseñó a pensar. Esta te enseña a decírselo a Java 🔤</small></p>

> 🗺️ **El mapa del curso:** 🚀 U01 → **🔤 AQUÍ ESTÁS (U02)** → 🔀 U03 Control y excepciones → 🧩 U04 Métodos y recursividad → ⚡ U05 Clases y objetos → 🏗️ U06 Encapsulación → 🔒 U07 Herencia → 🧬 U08 Arrays → 📚 U09 Genéricos → 🗺️ U10 Streams → 📁 U11 Ficheros y regex → 🗄️ U12 GUI y eventos → 🌐 U13 JDBC y persistencia → 🏆 U14 Proyecto final

---

En la U01 diseñaste algoritmos en pseudocódigo: un idioma inventado, sin reglas estrictas, que nadie más que tú y tu profesor entendéis. Se acabó. A partir de aquí hablas con la máquina en su idioma real, y Java es bastante más tiquismiquis que el pseudocódigo — un punto y coma de más o de menos, y el compilador te lo va a hacer saber.

Esta unidad traduce literalmente lo que ya sabes: `LEER` se convierte en `Scanner`, `variable ← valor` se convierte en una declaración con tipo, y tu primer `INICIO...FIN` se convierte en una clase con un método `main`. No hay lógica nueva que aprender — todavía no hay `SI` ni `MIENTRAS` en Java, eso es la U03 —, solo el vocabulario y la gramática para decir en Java lo que ya sabías decir en pseudocódigo.

---

## 🎯 Objetivo de la unidad

Al terminar, serás capaz de:

- Reconocer y escribir la **estructura mínima** de un programa Java: clase y método `main`.
- Declarar variables usando los **ocho tipos primitivos** de Java y elegir el adecuado para cada dato.
- Diferenciar **literales**, **constantes** (`final`) y variables normales.
- Clasificar y usar los **operadores** aritméticos, relacionales, lógicos, de asignación e incremento/decremento.
- Aplicar **conversiones de tipo** implícitas (promoción) y explícitas (*casting*), y reconocer cuándo se pierde información.
- Escribir **comentarios** de línea, de bloque y Javadoc.
- **Instanciar objetos** de clases ya construidas — `Scanner` y `String` — sin haber escrito todavía una clase propia.
- Usar IntelliJ para compilar y ejecutar programas Java reales.

---

## 🧱 La estructura de un programa Java

Todo programa Java empieza igual. Aquí tienes el "Hola Mundo" de verdad, esta vez en el idioma que toca:

```java
public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola, Java. Llevaba una unidad entera esperándote.");
    }
}
```

Diseccionémoslo pieza a pieza:

| Pieza | Qué es |
|---|---|
| `public class HolaMundo` | Declara una clase pública llamada `HolaMundo`. El nombre del fichero (`HolaMundo.java`) tiene que coincidir exactamente, mayúsculas incluidas. |
| `public static void main(String[] args)` | El **punto de entrada**: la JVM busca exactamente este método para empezar a ejecutar. `static` significa que no hace falta crear un objeto para llamarlo; `void`, que no devuelve nada; `String[] args`, que puede recibir argumentos desde la línea de comandos. |
| `System.out.println(...)` | Llama al método `println` del objeto `out` de la clase `System`, para escribir texto y saltar de línea. |
| `{` `}` | Delimitan bloques: el cuerpo de la clase y el cuerpo del método, cada uno con su propia pareja de llaves. |
| `;` | Cierra cada instrucción. Java no adivina dónde acaba una instrucción por el salto de línea, como sí hacía tu pseudocódigo — necesita el punto y coma explícito. |

:::caution[Un método no se ejecuta solo porque exista]
Si escribes un segundo método dentro de la clase, no se ejecuta por arte de magia: **solo se ejecuta lo que hay dentro de `main`**, en el orden en que aparece, más las llamadas explícitas que hagas a otros métodos (algo que veremos a fondo en la U04). Escribir código fuera de `main` sin llamarlo desde ahí es como escribir una receta que nadie va a cocinar.
:::

---

## 📦 Variables y tipos de datos primitivos

Una **variable** es un espacio con nombre en memoria donde guardas un valor. En Java, a diferencia del pseudocódigo, tienes que decirle al compilador **de qué tipo** va a ser ese valor, y ese tipo no cambia después.

Java tiene ocho tipos primitivos:

| Tipo | Guarda | Tamaño | Ejemplo |
|---|---|---|---|
| `byte` | Entero muy pequeño | 8 bits (−128 a 127) | `byte edad = 25;` |
| `short` | Entero pequeño | 16 bits | `short año = 2026;` |
| `int` | Entero — el que usarás casi siempre | 32 bits | `int cantidad = 1500;` |
| `long` | Entero grande | 64 bits | `long poblacion = 8000000000L;` |
| `float` | Decimal, poca precisión | 32 bits | `float pi = 3.14f;` |
| `double` | Decimal — el que usarás casi siempre | 64 bits | `double precio = 19.99;` |
| `char` | Un único carácter | 16 bits | `char inicial = 'J';` |
| `boolean` | Verdadero o falso | 1 bit (en la práctica) | `boolean activo = true;` |

```java
int edad = 17;
double altura = 1.75;
char inicial = 'M';
boolean esMayorDeEdad = false;
String nombre = "Marta"; // no es primitivo: es una clase, ahora mismo llegamos a eso
```

:::tip[¿`int` o `double`? ¿`float` o `double`?]
Como regla general en este curso: usa `int` para enteros y `double` para decimales, salvo que tengas una razón concreta para lo contrario (números enormes → `long`; ahorrar memoria en millones de valores → `float`). El 95 % de tu código no necesitará nada más.
:::

---

## 🔤 Instanciar objetos: la clase `String`

`String` no está en la tabla de arriba porque **no es un tipo primitivo** — es una clase, y una variable de tipo `String` no guarda el texto directamente sino una referencia a un **objeto** `String` creado en memoria. Todavía no vas a escribir tus propias clases (eso es la U05), pero desde ya puedes **instanciar objetos de clases que Java ya trae hechas**:

```java
String nombre = "Ada Lovelace";       // forma habitual: literal de texto
String otro = new String("Turing");   // forma explícita: instanciando con new
System.out.println(nombre.length());  // 12 — un objeto String tiene sus propios métodos
```

Cada vez que escribes `String texto = "algo";`, Java está creando un objeto por debajo. Te va a sonar raro hasta la U05 — todavía no sabes qué es "por dentro" una clase —, pero ya puedes *usar* objetos aunque no sepas todavía *construir* los tuyos. Es exactamente la misma idea que conducir un coche sin saber diseñar el motor.

---

## 🔒 Constantes y literales

Un **literal** es un valor escrito tal cual en el código: `25`, `3.14`, `'A'`, `"hola"`, `true`. Cada literal tiene un tipo por defecto, y algunos necesitan un sufijo para decirle al compilador cuál quieres:

| Literal | Tipo por defecto | Ejemplo |
|---|---|---|
| `25` | `int` | `int x = 25;` |
| `25L` | `long` (la `L` lo fuerza) | `long x = 25L;` |
| `3.14` | `double` | `double x = 3.14;` |
| `3.14f` | `float` (la `f` lo fuerza) | `float x = 3.14f;` |
| `'A'` | `char` (comillas simples) | `char x = 'A';` |
| `"A"` | `String` (comillas dobles) | `String x = "A";` |
| `true` / `false` | `boolean` | `boolean x = true;` |

Una **constante** es una variable cuyo valor no puede cambiar después de asignarlo, con la palabra clave `final`:

```java
final double IVA = 0.21;
final int MAX_INTENTOS = 3;
// IVA = 0.25; // esto no compila: no se puede reasignar un final
```

:::note[Convenio de nombres]
Las constantes se escriben tradicionalmente en `MAYÚSCULAS_CON_GUION_BAJO`; las variables normales, en `camelCase` (`precioFinal`, no `PrecioFinal` ni `precio_final`). No es obligatorio para el compilador, pero sí para cualquier equipo de trabajo real — y para el profesor.
:::

---

## ➕ Operadores

- **Aritméticos**: `+` `-` `*` `/` `%` (resto — el `MOD` de tu pseudocódigo).
- **Relacionales**: `==` (igual — ¡dos signos, no uno!) `!=` `<` `<=` `>` `>=`.
- **Lógicos**: `&&` (Y), `||` (O), `!` (NO).
- **Asignación**: `=`, y las compuestas `+=` `-=` `*=` `/=` `%=` (`x += 5` equivale a `x = x + 5`).
- **Incremento/decremento**: `++` y `--`, en forma prefija (`++x`) o posfija (`x++`).

```java
int x = 5;
x++;        // x vale 6
int y = ++x; // x vale 7, y también vale 7 (prefijo: incrementa y LUEGO usa el valor)
int z = x++; // z vale 7, x pasa a valer 8 (posfijo: usa el valor y LUEGO incrementa)
```

:::caution[La trampa del `==` con `String`]
Con tipos primitivos, `==` compara valores. Con objetos — y `String` es un objeto —, `==` compara si son **la misma referencia en memoria**, no si el contenido es igual. Para comparar el contenido de dos `String`, se usa el método `.equals()`:
```java
String a = new String("hola");
String b = new String("hola");
System.out.println(a == b);      // false — son dos objetos distintos
System.out.println(a.equals(b)); // true — el contenido es igual
```
Volveremos a esto con calma en la U05, cuando entiendas bien qué es una referencia. De momento, quédate con la norma: **para comparar texto, usa siempre `.equals()`.**
:::

---

## 🔄 Conversiones de tipo

Java convierte automáticamente entre tipos compatibles cuando no hay riesgo de perder información — es la **conversión implícita** o *promoción*:

```java
int entero = 10;
double decimal = entero; // implícita: un int siempre cabe en un double
```

Cuando sí hay riesgo de perder información (un tipo "grande" a uno "pequeño"), Java te obliga a pedirlo explícitamente con un ***casting***, escribiendo el tipo destino entre paréntesis:

```java
double precio = 19.99;
int precioEntero = (int) precio; // explícita: 19 — se trunca el decimal, no se redondea
```

| Conversión | ¿Implícita o explícita? | Riesgo |
|---|---|---|
| `int` → `double` | Implícita | Ninguno |
| `double` → `int` | Explícita (`(int)`) | Se pierde la parte decimal |
| `long` → `int` | Explícita (`(int)`) | Se pueden perder dígitos si el número es muy grande |
| `int` → `char` | Explícita (`(char)`) | Interpreta el número como código Unicode |

:::tip[Trunca, no redondea]
`(int) 19.99` da `19`, no `20`. El *casting* de decimal a entero **corta** la parte decimal, no aplica ningún redondeo matemático. Si necesitas redondear de verdad, se usa `Math.round(...)` — lo verás cuando toque la librería `Math` con más detalle.
:::

---

## 💬 Comentarios

```java
// Comentario de una sola línea

/*
 * Comentario de bloque,
 * puede ocupar varias líneas
 */

/**
 * Comentario Javadoc: documenta la clase o el método que viene justo debajo.
 * Herramientas como IntelliJ lo usan para generar documentación y para
 * mostrarte ayuda contextual mientras escribes.
 */
public class Ejemplo { }
```

El Javadoc no es solo un comentario más largo: es un formato que otras herramientas **leen y procesan**. Cuando en la U04 empieces a escribir tus propios métodos, vas a documentarlos con Javadoc — de momento, reconoce las tres formas y sabe cuándo usar cada una.

---

## ⌨️ Leer del teclado con `Scanner`

Ya sabes instanciar objetos — pues aquí tienes el objeto que de verdad vas a usar todos los días: `Scanner`, para leer lo que el usuario escribe por teclado. Es el `LEER` de tu pseudocódigo, hecho realidad:

```java
import java.util.Scanner;

public class LeerEdad {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("¿Cuántos años tienes? ");
        int edad = sc.nextInt();
        System.out.println("El año que viene tendrás " + (edad + 1) + " años.");
    }
}
```

- `import java.util.Scanner;` — le dice a Java dónde encontrar la clase `Scanner`, que no está disponible por defecto.
- `new Scanner(System.in)` — instancia un objeto `Scanner` conectado a la entrada estándar (el teclado).
- `sc.nextInt()`, `sc.nextDouble()`, `sc.next()`, `sc.nextLine()` — cada uno lee un tipo de dato distinto.

:::caution[`nextInt()` seguido de `nextLine()`]
`nextInt()` lee el número pero deja el salto de línea pendiente en el búfer. Si justo después llamas a `nextLine()` esperando texto, te va a devolver una cadena vacía. Es una de las trampas más típicas del primer mes de curso — si te pasa, ya sabes por qué.
:::

---

## ⭐ Sé el Código

> No ejecutes esto mentalmente "a lo rápido" — sigue cada línea como si fueras el compilador.

¿Qué imprime este programa? Anota el valor exacto antes de mirar la solución.

```java
public class Enigma {
    public static void main(String[] args) {
        int a = 7;
        double b = a / 2;
        double c = a / 2.0;
        int d = (int) (a / 2.0);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
    }
}
```

<details>
<summary>🔄 Solución</summary>

```
3.0
3.5
3
```

- `b`: `a / 2` es una división entre dos `int` (`7 / 2`), así que Java hace **división entera** y descarta el resto antes de guardarlo en el `double` — el resultado es `3`, que se muestra como `3.0`.
- `c`: `a / 2.0` tiene un operando `double`, así que Java promociona `a` a `double` **antes** de dividir — división real, `3.5`.
- `d`: se calcula `a / 2.0` como decimal (`3.5`) y luego se trunca con `(int)` — `3`, no `4`. El casting no redondea.

</details>

---

## ❓ ¡No Hay Preguntas Tontas!

**¿Por qué Java me obliga a decir el tipo si el valor ya lo deja claro?**
Porque decidir el tipo por adelantado le permite al compilador reservar la memoria exacta que necesita y detectar errores *antes* de ejecutar el programa — si intentas meter texto en un `int`, te enteras al compilar, no cuando ya está en producción fallando. Es el precio de la seguridad de tipos.

**¿Por qué `String` empieza con mayúscula y `int` no?**
Porque `int` es un tipo primitivo del propio lenguaje, e `String` es una clase — y en Java, por convenio, las clases empiezan siempre con mayúscula. Es una pista visual: si empieza en mayúscula, es (casi seguro) un objeto.

**¿Qué pasa si me paso del rango de un tipo, por ejemplo un `byte` mayor que 127?**
Se produce *overflow*: el valor "da la vuelta" y empieza de nuevo por el otro extremo del rango, sin avisarte con ningún error. Es una razón más para no usar `byte` o `short` salvo que sepas exactamente por qué.

**¿`==` nunca sirve para comparar `String`?**
Sirve, pero compara si es literalmente el mismo objeto en memoria — no si el contenido es igual. Java además reutiliza los literales de texto idénticos (el *string pool*), así que a veces `==` "funciona" por casualidad y te confía en un comportamiento que no es fiable. Usa siempre `.equals()`.

---

## 🎯 Mini-chequeo

1. ¿Cuál es el tipo primitivo por defecto para un literal decimal como `3.14`?
2. ¿Qué diferencia hay entre `x++` y `++x`?
3. ¿`(int) 9.9` da 9 o 10?
4. ¿Por qué `String nombre = "Ana";` está instanciando un objeto aunque no veas la palabra `new`?

<details>
<summary>🔄 Respuestas</summary>

1. `double`.
2. `x++` (posfijo) usa el valor actual y después incrementa; `++x` (prefijo) incrementa primero y después usa el nuevo valor.
3. `9` — el *casting* trunca, no redondea.
4. Porque `String` es una clase, no un tipo primitivo: cualquier literal de texto entre comillas crea (o reutiliza) un objeto `String` por debajo, aunque la sintaxis no muestre `new` explícitamente.

</details>

---

## ✅ Resumen en 4 frases

1. Todo programa Java necesita una **clase** y un método **`main`** como punto de entrada — nada se ejecuta si no cuelga, directa o indirectamente, de ahí.
2. Java tiene **ocho tipos primitivos**; para todo lo demás (como `String`) trabajas con **objetos**, que se **instancian** aunque a veces la sintaxis lo disimule.
3. Las conversiones entre tipos son **implícitas** cuando no hay riesgo de perder información, y **explícitas** (*casting*) cuando sí lo hay — y el *casting* de decimal a entero siempre trunca.
4. `Scanner` es tu `LEER`: instanciarlo conectado a `System.in` te permite leer del teclado igual que ya sabías leer en pseudocódigo.

> 🐛 **Vocabulario rápido**
>
> | Término | Idea general |
> |---|---|
> | Tipo primitivo | Uno de los 8 tipos básicos de Java (`int`, `double`, `boolean`...) |
> | Literal | Valor escrito tal cual en el código (`25`, `"hola"`, `true`) |
> | Constante | Variable declarada `final`, cuyo valor no puede cambiar |
> | Casting | Conversión de tipo explícita, escrita entre paréntesis |
> | Promoción | Conversión de tipo implícita y segura, sin pérdida de datos |
> | Instanciar | Crear un objeto a partir de una clase |
> | Javadoc | Comentario `/** ... */` que documenta y es procesable por herramientas |

---

## 📝 Boletines de la unidad

> Practica con los pares del curso: empieza siempre por el resuelto para ver el estilo, y luego inténtalo por tu cuenta.

<div class="ejercicio-links">
  <a href="/boletines/boletin-02-inicial-resuelto/" class="elink">✅ Inicial resuelto</a>
  <a href="/boletines/boletin-02-inicial/" class="elink">🟢 Inicial por resolver</a>
  <a href="/boletines/boletin-02-intermedio-resuelto/" class="elink">💪 Intermedio resuelto</a>
  <a href="/boletines/boletin-02-intermedio/" class="elink">⭐ Intermedio por resolver</a>
  <a href="/boletines/boletin-02-extras/" class="elink">🔥 Extras</a>
</div>

---

## ✅ Criterios de evaluación cubiertos (RA1, RA2)

**RA1: Reconoce la estructura de un programa informático...**

| CE | Criterio | Dónde se cubre |
|---|---|---|
| d) | Distintos tipos de variables y su utilidad | ✅ "Variables y tipos de datos primitivos" |
| e) | Modificar código para crear y utilizar variables | ✅ Ejemplos y ejercicios de toda la unidad |
| f) | Creación y uso de constantes y literales | ✅ "Constantes y literales" |
| g) | Clasificación y uso de operadores | ✅ "Operadores" |
| h) | Conversiones de tipo explícitas e implícitas | ✅ "Conversiones de tipo" |
| i) | Comentarios en el código | ✅ "Comentarios" |

**RA2: Escribe y prueba programas sencillos, reconociendo y aplicando los fundamentos de la POO.**

| CE | Criterio | Dónde se cubre |
|---|---|---|
| c) | Instanciar objetos a partir de clases predefinidas | ✅ "Instanciar objetos: la clase String" y "Leer del teclado con Scanner" |
| i) | Usar el IDE para crear y compilar programas simples | ✅ Toda la unidad, practicada en IntelliJ |

> 📌 El resto de RA2 (fundamentos completos de POO, constructores, librerías de objetos propias) llega en la U05, cuando escribas tus propias clases.

---

## 🚪 ¿Por dónde empiezo?

- ¿Vienes directa de la U01? → Lee la unidad entera en orden: cada sección da por hecho la anterior.
- ¿Ya conoces otro lenguaje tipado (C, C#)? → Repasa por encima "Estructura de un programa Java" y ve directa a "Conversiones de tipo" y la trampa de `==` con `String`, que es donde más se diferencia Java de otros lenguajes.
- ¿Vienes a repasar antes de un examen? → Haz el Mini-chequeo y después los [boletines](/boletines/boletin-02-inicial/).

**⏭️ Al acabar la unidad, continúa en U03 · Estructuras de control de flujo y excepciones.**
