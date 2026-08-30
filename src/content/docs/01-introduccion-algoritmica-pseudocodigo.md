---
title: "U01 — Introducción a la algorítmica y pseudocódigo"
description: "Fundamentos del pensamiento algorítmico: caja negra, la JVM, pseudocódigo, diagramas de flujo, trazas e IntelliJ IDEA"
emoji: 🚀
---

<p><small>Antes de escribir una sola línea de Java, aprende a pensar como un algoritmo 🚀</small></p>

> 🗺️ **El mapa del curso:** **🚀 AQUÍ ESTÁS (U01)** → 🔤 U02 Sintaxis y tipos → 🔀 U03 Control y excepciones → 🧩 U04 Métodos y recursividad → ⚡ U05 Clases y objetos → 🏗️ U06 Encapsulación → 🔒 U07 Herencia → 🧬 U08 Arrays → 📚 U09 Genéricos → 🗺️ U10 Streams → 📁 U11 Ficheros y regex → 🗄️ U12 GUI y eventos → 🌐 U13 JDBC y persistencia → 🏆 U14 Proyecto final

---

Todo el mundo quiere escribir código el primer día de clase. Es comprensible: compilar y ver algo en pantalla da una satisfacción inmediata. Pero hay una verdad incómoda: **si no sabes descomponer un problema en pasos lógicos antes de escribir una sola línea, vas a pasar el curso entero peleando contra la sintaxis sin entender por qué falla lo que falla**.

Así que esta unidad no toca Java. Ni una línea. Vas a aprender a **pensar como un algoritmo**: qué es exactamente un programa, cómo lo ejecuta la máquina, a descomponer un problema en pasos precisos, a dibujarlo en un diagrama de flujo, a escribirlo en pseudocódigo y a verificarlo a mano con una tabla de traza antes de que exista ni un solo `.java`. También vas a instalar tu entorno de trabajo para todo el curso: **IntelliJ IDEA**.

---

## 🎯 Objetivo de la unidad

Al terminar, serás capaz de:

- Diferenciar **programa**, **proceso** y **aplicación**, y explicar el modelo de **caja negra** (entrada → proceso → salida).
- Explicar cómo se traduce un programa a algo ejecutable: **compiladores**, **intérpretes** y el modelo híbrido de Java (**JVM**).
- Explicar qué es un **algoritmo** y enumerar sus cinco propiedades.
- Distinguir la **idea** de un algoritmo de su **materialización** en un lenguaje concreto.
- Escribir un algoritmo en **pseudocódigo**, con sus estructuras de control y operadores.
- Representar un algoritmo mediante un **diagrama de flujo** con la simbología estándar.
- Reconocer los **tres bloques estructurales** de todo programa: secuencia, selección e iteración.
- Verificar un algoritmo a mano con una **tabla de traza**.
- Instalar **IntelliJ IDEA** y crear tu primer proyecto Java.

---

## 🧠 Programa, proceso y aplicación

Antes de nada, tres palabras que se usan como sinónimos en la calle y que aquí vamos a separar bien:

- **Programa**: conjunto ordenado de instrucciones guardado en un archivo. En reposo, en el disco, no hace nada — es pasivo.
- **Proceso**: un programa *en ejecución*. En cuanto el sistema operativo lo carga en memoria RAM y la CPU empieza a procesar sus instrucciones, cobra vida: tiene su propio espacio de memoria y un estado que cambia en el tiempo.
- **Aplicación**: el software completo orientado al usuario — normalmente varios programas más recursos auxiliares (imágenes, configuración, documentación).

Cualquier programa, por complicado que sea, se puede mirar desde fuera con el modelo de **caja negra**: no importa lo que pase por dentro, solo lo que entra y lo que sale.

```
   ┌─────────────────────────────────────────────────────┐
   │                  CAJA NEGRA                          │
   │                                                       │
   │   ENTRADA          PROCESAMIENTO           SALIDA     │
   │  (LEER)             (PROGRAMA)            (ESCRIBIR)  │
   │                                                       │
   │  teclado    ──────>   instrucciones   ──────>  pantalla│
   │  fichero               que transforman         fichero │
   │  red                   los datos                red    │
   └─────────────────────────────────────────────────────┘
```

- **Entrada**: datos que el programa capta del exterior — teclado, un fichero, la red.
- **Proceso**: lo que el programa hace con esos datos — cálculos, comparaciones, reordenaciones.
- **Salida**: lo que el programa devuelve al exterior — texto en consola, una interfaz gráfica, un fichero actualizado.

Este modelo te va a acompañar todo el curso: cada algoritmo que diseñes, cada método que escribas, es una caja negra con entrada y salida bien definidas.

---

## ⚙️ Cómo se ejecuta un programa: compilador, intérprete y JVM

Un archivo `.java` es simplemente texto. Para que la máquina lo ejecute, hace falta traducirlo. Hay tres modelos:

```
COMPILADO (C):        código fuente ──[compilador]──> binario nativo (.exe)
INTERPRETADO (Python): código fuente ──[intérprete, línea a línea]──> ejecución
HÍBRIDO (Java):        código fuente ──[javac]──> bytecode (.class) ──[JVM]──> ejecución
```

| Tipo | Cómo funciona | Ventaja | Inconveniente |
|---|---|---|---|
| **Compilador** | Traduce todo el código de golpe a binario nativo. | Máxima velocidad. | El binario solo sirve para un SO/CPU concreto. |
| **Intérprete** | Lee y ejecuta el código línea a línea. | Multiplataforma sin paso previo. | Más lento; necesita el intérprete instalado. |
| **Híbrido (Java)** | Compila a un código intermedio (**bytecode**) que ejecuta una máquina virtual. | Portable: el mismo `.class` corre en cualquier SO con JVM. | Un pequeño coste de arranque de la propia máquina virtual. |

:::tip[JDK, JRE y JVM: la trilogía del café]
- **JVM** (*Java Virtual Machine*): el programa que simula una CPU y ejecuta el bytecode `.class`. Hay una distinta para Windows, Linux y macOS — por eso el mismo `.class` funciona en los tres.
- **JRE** (*Java Runtime Environment*): la JVM más las librerías estándar necesarias para **ejecutar** programas Java.
- **JDK** (*Java Development Kit*): el paquete completo para programar — incluye el compilador (`javac`), el JRE y herramientas de desarrollo. En este curso trabajarás siempre con un **JDK LTS** (versión de soporte largo).
:::

---

## 📬 ¿Qué es un algoritmo?

> **Un algoritmo es una secuencia finita, ordenada y sin ambigüedades de pasos que resuelve un problema.**

Piensa en la última vez que montaste un mueble con instrucciones en dibujitos. Cada paso está numerado, cada pieza identificada, y el dibujo no deja lugar a dudas sobre qué tornillo va dónde. Eso es un algoritmo bien escrito. Ahora piensa en "encaja las piezas hasta que quede bien" — eso no es un algoritmo, es una esperanza.

El ordenador es exactamente como ese mueble: no interpreta, no da por hecho, no "entiende la intención". Ejecuta exactamente lo que le dices, ni una coma más.

:::note[Origen etimológico]
La palabra *algoritmo* viene de **Al-Juarismi**, matemático y astrónomo persa del siglo IX cuyas obras introdujeron las reglas sistemáticas del cálculo aritmético. Más de mil años después, seguimos usando su nombre — deformado — para lo mismo: procedimientos que se siguen paso a paso sin margen de interpretación.
:::

### Las cinco propiedades

Para que una lista de pasos merezca llamarse algoritmo, tiene que cumplir cinco condiciones:

1. **Finito**: tiene que terminar en algún momento. Un algoritmo que nunca acaba no es un algoritmo, es un cuelgue.
2. **Preciso**: cada paso está definido sin ambigüedad, y con los mismos datos de entrada produce siempre el mismo resultado. Nada de "más o menos" ni "cuando esté listo".
3. **Con entrada**: puede recibir cero o más datos de partida.
4. **Con salida**: produce al menos un resultado.
5. **Eficaz**: cada paso es lo bastante sencillo como para ejecutarse en un tiempo razonable con recursos reales.

:::caution[Algoritmo ≠ código]
El **algoritmo** es la idea: la secuencia de pasos. El **código** es su traducción a un lenguaje concreto. El mismo algoritmo "encontrar el mayor de una lista" es idéntico si lo expresas en español estructurado, en Java o en Python — solo cambia el idioma.
:::

---

## ✍️ Pseudocódigo: estructuras y operadores

El **pseudocódigo** es un lenguaje intermedio entre el español y Java: tiene la estructura de un lenguaje de programación pero sin su rigidez de compilación (nada de puntos y coma, `import` o llaves obligatorias).

| Instrucción | Significado |
|---|---|
| `INICIO` / `FIN` | Delimitan el algoritmo. |
| `LEER variable` | Entrada: captura un dato y lo guarda. |
| `ESCRIBIR expresión` | Salida: muestra un valor. |
| `variable ← expresión` | Asignación. |
| `// comentario` | Anotación ignorada al "ejecutar". |
| `SI cond ENTONCES ... SINO ... FINSI` | Selección simple o doble. |
| `SEGUN var HACER CASO ... FINSEGUN` | Selección múltiple según el valor de una variable. |
| `MIENTRAS cond HACER ... FINMIENTRAS` | Bucle con condición al principio (puede no ejecutarse nunca). |
| `REPETIR ... HASTA QUE cond` | Bucle con condición al final (se ejecuta al menos una vez). |
| `PARA var ← ini HASTA fin HACER ...` | Bucle contado. |

**Operadores:**

- **Aritméticos**: `+` `-` `*` `/` (división real), `DIV` (división entera), `MOD` (resto).
- **Relacionales**: `=` `<>` `<` `<=` `>` `>=`.
- **Lógicos**: `Y` (`AND`), `O` (`OR`), `NO` (`NOT`).

```
// Tarifa con descuento por edad
INICIO
  LEER edad
  LEER precioBase
  SI (edad < 18) O (edad >= 65) ENTONCES
    descuento ← precioBase * 0.20
    precioFinal ← precioBase - descuento
    ESCRIBIR "Tarifa reducida: " + precioFinal
  SINO
    precioFinal ← precioBase
    ESCRIBIR "Tarifa estándar: " + precioFinal
  FINSI
FIN
```

---

## 🔷 Diagramas de flujo

Un **diagrama de flujo** (u ordinograma) es la versión dibujada de un algoritmo, con símbolos normalizados (ANSI/ISO) conectados por flechas que marcan el orden de ejecución:

| Símbolo | Nombre | Significado |
|:---:|---|---|
| ⬭ | Terminal | Inicio o fin del algoritmo. |
| ▭ | Proceso | Cálculo o asignación (`area ← b * h`). |
| ▱ | Entrada/salida | `LEER` o `ESCRIBIR`. |
| ◇ | Decisión | Evalúa una condición; una entrada, dos o más salidas. |
| → | Línea de flujo | Marca el orden de ejecución. |
| ◯ | Conector | Enlaza partes del diagrama entre sí o entre páginas. |

```
        ⬭ Inicio
           │
   ▱ Leer base, altura
           │
  ▭ area ← base * altura
           │
   ◇ ¿area > 100?
      │Sí         │No
▭ Escribir      ▭ Escribir
 "Grande"        "Normal"
      │            │
       └────┬──────┘
            │
      ▱ Escribir area
            │
        ⬭ Fin
```

:::tip[Truco para no perderte]
Sigue siempre la flecha con el dedo, nunca "a ojo". La mayoría de los errores de lógica de un principiante se detectan solos en cuanto trazas el diagrama paso a paso en vez de darlo por bueno de un vistazo.
:::

---

## 🧱 Los tres bloques de todo programa

En 1966, los matemáticos Corrado Böhm y Giuseppe Jacopini demostraron un resultado que sostiene toda la programación estructurada: **cualquier algoritmo, por complicado que sea, se puede construir combinando solo tres bloques**, unos dentro de otros.

1. **Secuencia**: los pasos se ejecutan uno detrás de otro, en el orden en que están escritos.
2. **Selección**: el programa elige entre caminos según una condición — el `SI...SINO`, el rombo del diagrama.
3. **Iteración**: un bloque de pasos se repite mientras se cumpla una condición — el `MIENTRAS...HACER`.

```
SECUENCIA          SELECCIÓN              ITERACIÓN
   │              ◇ ¿condición?          ◇ ¿condición? ←─┐
   ▭              │Sí      │No             │Sí           │
   │              ▭        ▭                ▭ ────────────┘
   ▭                                        │No
```

En la U03 vas a escribir estos tres bloques en Java de verdad (`if`, `else`, `while`, `for`). Por ahora, cuando leas cualquier algoritmo, pregúntate siempre: *¿esto es secuencia, decisión o repetición?*. Si sabes responder, sabes leer código antes de saber escribirlo.

---

## 🔍 Tablas de traza

Una **traza** (o prueba de escritorio) es hacer de CPU con papel y boli: seguir el algoritmo línea a línea, anotando cómo cambia cada variable, hasta llegar al resultado. Es la técnica número uno para encontrar errores de lógica antes de escribir una sola línea de Java.

```
1: INICIO
2:   LEER n
3:   suma ← 0
4:   contador ← 1
5:   MIENTRAS contador <= n HACER
6:     suma ← suma + contador
7:     contador ← contador + 1
8:   FINMIENTRAS
9:   ESCRIBIR "Total: " + suma
10: FIN
```

Traza para `n = 3`:

| Línea | `n` | `suma` | `contador` | `contador <= n` | Salida |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 | 3 | — | — | — | (lee 3) |
| 3 | 3 | 0 | — | — | — |
| 4 | 3 | 0 | 1 | — | — |
| 5 | 3 | 0 | 1 | Verdadero | — |
| 6 | 3 | 1 | 1 | — | — |
| 7 | 3 | 1 | 2 | — | — |
| 5 | 3 | 1 | 2 | Verdadero | — |
| 6 | 3 | 3 | 2 | — | — |
| 7 | 3 | 3 | 3 | — | — |
| 5 | 3 | 3 | 3 | Verdadero | — |
| 6 | 3 | 6 | 3 | — | — |
| 7 | 3 | 6 | 4 | — | — |
| 5 | 3 | 6 | 4 | **Falso** | sale del bucle |
| 9 | 3 | 6 | 4 | — | `"Total: 6"` |

Una fila por cada vez que el flujo pasa por esa línea — incluida cada vuelta del bucle. Nada de calcularlo "de cabeza": la traza obliga a ser tan literal como la propia máquina.

---

## 🔭 Un adelanto: funciones y procedimientos

Cuando un algoritmo crece, meterlo todo en un único bloque se vuelve ilegible. La solución es dividirlo en **subalgoritmos** reutilizables: funciones (devuelven un valor) y procedimientos (no devuelven nada, hacen una tarea). No te va a hacer falta todavía — le dedicamos toda la **U04** —, pero ya puedes intuir por qué existen: es la misma idea de "divide y vencerás" aplicada al código.

---

## 💻 Tu entorno de desarrollo: IntelliJ IDEA

Todo el curso se apoya en un único IDE: **IntelliJ IDEA**. Cualquier captura, atajo o menú de estos apuntes está pensado para él.

**Instalación:**

1. Descarga **IntelliJ IDEA Community Edition** (gratuita) desde el sitio oficial de JetBrains.
2. Ejecuta el instalador con las opciones por defecto.
3. En la pantalla de bienvenida, IntelliJ puede descargarte un **JDK LTS** automáticamente la primera vez que crees un proyecto.

:::note[¿Community o Ultimate?]
La edición **Community** es gratuita y tiene todo lo que necesitas para este curso. La **Ultimate** añade herramientas de desarrollo web y empresarial que no usaremos hasta unidades muy avanzadas — no hace falta pagarla ahora.
:::

### Anatomía de un proyecto

```
┌─────────────────────────────────────────────────┐
│ PROJECT              EDITOR                       │
│ ▼ MiProyecto  │ public class HolaMundo {           │
│   ▶ .idea/    │   public static void main(...) {   │
│   ▼ src/      │     System.out.println("¡Hola!");  │
│     Hola.java │   }                                 │
│   MiProy.iml  │ }                                   │
├─────────────────────────────────────────────────┤
│ RUN                                                │
│ ¡Hola! — Process finished with exit code 0         │
└─────────────────────────────────────────────────┘
```

- **`.idea/`**: configuración interna del IDE — no se toca a mano.
- **`.iml`**: metadatos del módulo.
- **`src/`**: aquí vive tu código Java, y solo tu código Java.
- **`out/`** o **`target/`**: donde el compilador deja los `.class` generados.

### Atajos que vas a usar todos los días

| Acción | Atajo | Para qué sirve |
|---|---|---|
| Ejecutar | `Shift + F10` | Compila y lanza la clase actual. |
| Depurar | `Shift + F9` | Lanza la app en modo depuración. |
| Duplicar línea | `Ctrl + D` | Clona la línea actual. |
| Comentar línea | `Ctrl + /` | Añade o quita `//`. |
| Reformatear código | `Ctrl + Alt + L` | Aplica la sangría y el estilo estándar. |
| Buscar cualquier cosa | `Shift` `Shift` | Encuentra clase, archivo o menú al instante. |

### Tu primer proyecto

1. En la pantalla de bienvenida, pulsa **New Project**.
2. Elige **Java**, comprueba que el JDK seleccionado es una versión LTS.
3. Ponle nombre — por ejemplo, `CursoProgramacion` — y elige dónde guardarlo.
4. Marca la opción de generar un ejemplo de código si IntelliJ te la ofrece.
5. Pulsa **Create** y deja que termine de indexar el proyecto — cancelarlo a mitad suele dejarlo en un estado raro.

---

## ⭐ Sé el Código

> Ponte en la piel de la CPU: no interpretes, no completes huecos, no asumas nada que no esté escrito.

Traza este algoritmo a mano para `limite = 5` y anota lo que muestra `ESCRIBIR`:

```
1: INICIO
2:   LEER limite
3:   acumulador ← 0
4:   i ← 1
5:   MIENTRAS i <= limite HACER
6:     SI (i MOD 2 <> 0) ENTONCES
7:       acumulador ← acumulador + i
8:     SINO
9:       acumulador ← acumulador - 1
10:    FINSI
11:    i ← i + 1
12:  FINMIENTRAS
13:  ESCRIBIR "Total: " + acumulador
14: FIN
```

<details>
<summary>🔄 Solución</summary>

| `i` | `i MOD 2 <> 0` | `acumulador` |
|:---:|:---:|:---:|
| 1 | Sí (impar) | 0 + 1 = 1 |
| 2 | No (par) | 1 − 1 = 0 |
| 3 | Sí (impar) | 0 + 3 = 3 |
| 4 | No (par) | 3 − 1 = 2 |
| 5 | Sí (impar) | 2 + 5 = 7 |

Con `i = 6`, la condición `i <= limite` (6 ≤ 5) es falsa y el bucle termina.

**Salida: `Total: 7`**

</details>

---

## ❓ ¡No Hay Preguntas Tontas!

**¿Por qué no empezamos programando directamente en Java?**
Aprender a programar mezcla dos retos: pensar la lógica y dominar la sintaxis. Resolver los dos a la vez suele acabar en frustración — si el programa falla, no sabes si te equivocaste en el razonamiento o si solo olvidaste una llave. El pseudocódigo aísla el pensamiento algorítmico del idioma.

**¿Un bucle puede quedarse ejecutándose para siempre?**
Sí, es el clásico bucle infinito: pasa cuando la condición de salida nunca llega a ser falsa (por ejemplo, si olvidas incrementar el contador dentro del bucle). El algoritmo pierde la propiedad de ser finito.

**¿Qué diferencia hay entre código fuente, bytecode y código máquina?**
El código fuente lo escribe y lee un humano (`.java`). El código máquina son instrucciones binarias nativas de una CPU concreta. El bytecode es el punto intermedio de Java: binario, pero independiente de la máquina física, pensado para que lo ejecute la JVM.

**¿Por qué instalamos IntelliJ si todavía no sabemos programar?**
Porque el entorno de trabajo no depende de saber programar — depende de tener algo instalado para cuando toque. Es como aprender dónde están los fogones antes de aprender a cocinar.

---

## 🎯 Mini-chequeo

1. ¿Cuáles son las cinco propiedades de un algoritmo?
2. ¿Qué teorema garantiza que cualquier algoritmo se puede construir con solo tres bloques?
3. ¿Qué diferencia hay entre JDK, JRE y JVM?
4. ¿Qué símbolo del diagrama de flujo representa una decisión?

<details>
<summary>🔄 Respuestas</summary>

1. Finito, preciso, con entrada, con salida y eficaz.
2. El teorema de Böhm-Jacopini (1966).
3. La JVM ejecuta el bytecode; el JRE es la JVM más las librerías necesarias para ejecutar programas; el JDK es el paquete completo para desarrollar, incluye el JRE más el compilador y otras herramientas.
4. El rombo (◇).

</details>

---

## ✅ Resumen en 4 frases

1. Un **algoritmo** es una secuencia finita, precisa y sin ambigüedades de pasos que resuelve un problema, vista desde fuera como una **caja negra** de entrada y salida.
2. Java es un lenguaje **híbrido**: compila a **bytecode** portable que ejecuta la **JVM**, dentro del **JDK** que usarás durante todo el curso.
3. El **pseudocódigo** y los **diagramas de flujo** expresan la lógica de un algoritmo sin sintaxis de ningún lenguaje concreto, combinando solo tres bloques: **secuencia, selección e iteración**.
4. Una **tabla de traza** verifica a mano que un algoritmo hace lo que se supone que hace, antes de traducirlo a código real.

> 🐛 **Vocabulario rápido**
>
> | Término | Idea general |
> |---|---|
> | Algoritmo | Secuencia finita y precisa de pasos que resuelve un problema |
> | Caja negra | Modelo que describe un sistema solo por su entrada y su salida |
> | Bytecode | Código intermedio de Java (`.class`), independiente de la máquina física |
> | JDK / JRE / JVM | Kit de desarrollo / entorno de ejecución / máquina virtual de Java |
> | Pseudocódigo | Escritura de un algoritmo sin la sintaxis estricta de un lenguaje concreto |
> | Diagrama de flujo | Representación gráfica de un algoritmo con símbolos y flechas |
> | Secuencia / Selección / Iteración | Los tres bloques con los que se construye cualquier programa |
> | Tabla de traza | Seguimiento manual del estado de las variables paso a paso |
> | IDE | Entorno integrado de desarrollo (en este curso, IntelliJ IDEA) |

---

## 📝 Boletines de la unidad

> Practica con los pares del curso: empieza siempre por el resuelto para ver el estilo, y luego inténtalo por tu cuenta.

<div class="ejercicio-links">
  <a href="/boletines/boletin-01-inicial-resuelto/" class="elink">✅ Inicial resuelto</a>
  <a href="/boletines/boletin-01-inicial/" class="elink">🟢 Inicial por resolver</a>
  <a href="/boletines/boletin-01-intermedio-resuelto/" class="elink">💪 Intermedio resuelto</a>
  <a href="/boletines/boletin-01-intermedio/" class="elink">⭐ Intermedio por resolver</a>
  <a href="/boletines/boletin-01-extras/" class="elink">🔥 Extras</a>
</div>

---

## ✅ Criterios de evaluación cubiertos (RA1)

**RA1: Reconoce la estructura de un programa informático, identificando y relacionando los elementos propios del lenguaje de programación utilizado.**

| CE | Criterio | Dónde se cubre |
|---|---|---|
| a) | Bloques que componen la estructura de un programa | ✅ "Los tres bloques de todo programa" |
| b) | Proyectos de desarrollo de aplicaciones | ✅ "Tu primer proyecto" |
| c) | Entornos integrados de desarrollo | ✅ "Tu entorno de desarrollo: IntelliJ IDEA" |

> 📌 Los criterios d) a i) de RA1 (variables, constantes, operadores, conversiones de tipo, comentarios en Java real) se cubren en la U02, cuando estos bloques se traducen por fin a sintaxis Java.

---

## 🚪 ¿Por dónde empiezo?

- ¿Cero conocimientos de programación? → Lee la unidad entera en orden, no te saltes nada.
- ¿Ya sabes qué es un algoritmo de otra asignatura? → Ve directa a "Los tres bloques de todo programa" y a la instalación de IntelliJ.
- ¿Ya tienes IntelliJ instalado? → Sáltate la instalación y repasa pseudocódigo y trazas antes de los boletines.
- ¿Vienes a repasar? → Haz el Mini-chequeo y después los [boletines](/boletines/boletin-01-inicial/).

**⏭️ Al acabar la unidad, continúa en U02 · Primeros pasos en Java: sintaxis y tipos de datos.**
