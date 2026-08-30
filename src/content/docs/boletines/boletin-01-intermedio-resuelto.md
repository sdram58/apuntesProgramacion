---
title: Boletín U01 — Intermedio (Resuelto)
description: Los mismos ejercicios que el boletín intermedio, con soluciones
---

# 📝 Boletín U01 — Intermedio (Resuelto)

> Las soluciones están ocultas en cada ejercicio. No hagas trampa: primero inténtalo de verdad.

---

## Ejercicio 1: el mayor de tres

<details>
<summary>🔄 Solución</summary>

```
INICIO
  LEER n1
  LEER n2
  LEER n3
  mayor ← n1
  SI n2 > mayor ENTONCES
    mayor ← n2
  FINSI
  SI n3 > mayor ENTONCES
    mayor ← n3
  FINSI
  ESCRIBIR mayor
FIN
```

La estrategia es "ir guardando el mayor visto hasta ahora" y comparar cada nuevo número contra él, en vez de intentar comparar los tres a la vez.

</details>

---

## Ejercicio 2: traza anidada

<details>
<summary>🔄 Solución</summary>

Con `n1 = 7`, `n2 = 7`:
```
Son iguales
```

Con `n1 = 3`, `n2 = 9`:
```
n2 es mayor
```

En el segundo caso, la primera condición (`n1 = n2`) es falsa, así que se entra en el `SINO`, donde hay un segundo `SI` anidado que compara `n1 > n2` — también falso, así que se ejecuta su `SINO`.

</details>

---

## Ejercicio 3: traza con bucle

<details>
<summary>🔄 Solución</summary>

```
1
2
3
4
5
Fin del bucle
```

El bucle se ejecuta mientras `contador <= 5`; en cada vuelta escribe el valor de `contador` y lo incrementa en 1. Cuando `contador` llega a 6, la condición deja de cumplirse, el bucle termina y se ejecuta la línea que hay después del `FINMIENTRAS`.

</details>

---

## Ejercicio 4: depura el pseudocódigo

<details>
<summary>🔄 Solución</summary>

Falta incrementar `contador` dentro del bucle. Tal como estaba, `contador` siempre vale 1, la condición `contador <= 10` nunca deja de cumplirse, y el bucle no termina jamás — incumple la propiedad de ser **finito**.

```
INICIO
  suma ← 0
  contador ← 1
  MIENTRAS contador <= 10 HACER
    suma ← suma + contador
    contador ← contador + 1
  FINMIENTRAS
  ESCRIBIR suma
FIN
```

</details>

---

## Ejercicio 5: del diagrama al pseudocódigo

<details>
<summary>🔄 Solución</summary>

```
INICIO
  LEER numero
  SI numero MOD 2 = 0 ENTONCES
    ESCRIBIR "Par"
  SINO
    ESCRIBIR "Impar"
  FINSI
FIN
```

</details>

---

## Ejercicio 6: clasifica el algoritmo completo

<details>
<summary>🔄 Solución</summary>

- **Secuencia**: `contador ← 1` (antes del bucle) y `ESCRIBIR "Fin del bucle"` (después del bucle) — se ejecutan una sola vez, en orden.
- **Iteración**: todo el bloque `MIENTRAS...FINMIENTRAS`, que repite `ESCRIBIR contador` y `contador ← contador + 1` mientras `contador <= 5`.
- **Selección**: no hay ningún bloque `SI...FINSI` en este algoritmo — falta el tercer bloque estructural. Es un algoritmo válido igualmente: no es obligatorio que un algoritmo contenga los tres bloques, solo que combine los que necesite.

</details>

---

## Ejercicio 7: tu primer proyecto

<details>
<summary>🔄 Solución</summary>

Respuesta orientativa (variará ligeramente según la versión de IntelliJ):

- **`src`**: carpeta donde vive todo tu código fuente (los ficheros `.java`).
- **`.idea`**: carpeta de configuración interna del proyecto para IntelliJ — no la tocas tú directamente.
- **Fichero de módulo (`.iml`)**: describe cómo está configurado el módulo del proyecto (dependencias, JDK usado, etc.).
- **Panel de proyecto (izquierda)**: muestra el árbol de carpetas y ficheros anterior de forma visual, para navegar sin usar el explorador de archivos del sistema operativo.

Lo importante de este ejercicio no es memorizar los nombres exactos, sino comprobar con tus propios ojos que un "proyecto" es bastante más que un solo fichero de código.

</details>

---

## Ejercicio 8: propiedades rotas

<details>
<summary>🔄 Solución</summary>

a) Falla **finito**: "mientras el usuario no se canse" no tiene un final garantizado y determinable de antemano.
```
INICIO
  total ← 0
  LEER numero
  MIENTRAS numero <> -1 HACER
    total ← total + numero
    LEER numero
  FINMIENTRAS
  ESCRIBIR total
FIN
```
(Aquí se fija un valor centinela, `-1`, para que el usuario decida cuándo parar de forma explícita y el algoritmo sepa reconocerlo.)

b) Falla **entrada**: dice que "no hace falta pedir el número" pero no explica de dónde sale ese número, lo cual es imposible de programar tal cual.
```
INICIO
  LEER numero
  resultado ← RAIZ_CUADRADA(numero)
  ESCRIBIR resultado
FIN
```

c) Falla **preciso** (y por extensión, **eficaz**): "tarda lo que tarde" no da ninguna garantía sobre el comportamiento del algoritmo. Un algoritmo real de comprobación de primalidad tiene un número de pasos determinado (por ejemplo, dividir por todos los números hasta la raíz cuadrada del número), no un tiempo indefinido.

</details>
