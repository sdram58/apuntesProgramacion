---
title: Boletín U01 — Inicial (Resuelto)
description: Los mismos ejercicios que el boletín inicial, con soluciones
---

# 📝 Boletín U01 — Inicial (Resuelto)

> Las soluciones están ocultas en cada ejercicio. No hagas trampa: primero inténtalo de verdad.

---

## Ejercicio 1: ordena la receta

<details>
<summary>🔄 Solución</summary>

1. Poner la cafetera en el fuego.
2. Esperar a que salga el café.
3. Calentar la leche.
4. Servir el café en la taza.
5. Añadir la leche caliente.

Fíjate en la dependencia lógica: no puedes servir el café antes de que salga, ni añadir la leche antes de calentarla.

</details>

---

## Ejercicio 2: ¿cumple las cinco propiedades?

<details>
<summary>🔄 Solución</summary>

a) **No** — falla **finito**. "No pares nunca" significa que el algoritmo no termina.
b) **Sí** — cumple las cinco: es finito, preciso, tiene entrada (el número), salida (el mensaje) y es eficaz.
c) **No** — falla **preciso**. "El tiempo que veas" es ambiguo, cada persona lo interpretaría de forma distinta.
d) **Sí** — cumple las cinco.

</details>

---

## Ejercicio 3: traza a mano

<details>
<summary>🔄 Solución</summary>

Con `edad = 15`:
```
Eres menor de edad
```

Con `edad = 20`:
```
Eres mayor de edad
```

La condición `edad >= 18` decide qué rama del `SI...SINO` se ejecuta; la otra rama nunca se llega a ejecutar en la misma traza.

</details>

---

## Ejercicio 4: identifica el bloque

<details>
<summary>🔄 Solución</summary>

a) **Secuencia** — los tres pasos se ejecutan uno detrás de otro, sin condiciones ni repeticiones.
b) **Iteración** — el bloque `MIENTRAS...HACER` repite mientras se cumpla la condición `contador < 10`.
c) **Selección** — el `SI...FINSI` decide si se ejecuta el `ESCRIBIR` según la condición.

</details>

---

## Ejercicio 5: completa el pseudocódigo

<details>
<summary>🔄 Solución</summary>

```
INICIO
  LEER numero
  SI numero >= 0 ENTONCES
    ESCRIBIR "Positivo"
  SINO
    ESCRIBIR "Negativo"
  FINSI
FIN
```

La rama `SINO` necesita su propio `ESCRIBIR` para cubrir el caso en que la condición no se cumple — si no, el algoritmo se queda mudo cuando el número es negativo.

</details>

---

## Ejercicio 6: empareja conceptos

<details>
<summary>🔄 Solución</summary>

**1→B, 2→D, 3→A, 4→C**

</details>

---

## Ejercicio 7: elige el símbolo

<details>
<summary>🔄 Solución</summary>

a) **Paralelogramo** (▱) — es una entrada de datos.
b) **Rombo** (◇) — es una decisión.
c) **Rectángulo** (▭) — es un proceso o cálculo.
d) **Óvalo** (⬭) — es el inicio del algoritmo.

</details>

---

## Ejercicio 8: caza la ambigüedad

<details>
<summary>🔄 Solución</summary>

Respuestas orientativas (cualquier versión igual de precisa es válida):

a) "Añade 5 gramos de sal."
b) "Espera 10 minutos."
c) "Si el número es mayor que 1000, muestra el mensaje 'Número grande'."
d) "Repite el proceso 3 veces."

La clave en los cuatro casos es sustituir una valoración subjetiva ("al gusto", "un rato", "grande", "varias veces") por un valor o condición exacta y comprobable.

</details>
