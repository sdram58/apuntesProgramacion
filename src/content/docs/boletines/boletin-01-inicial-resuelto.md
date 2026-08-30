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

## Ejercicio 2: auditoría de las cinco propiedades

<details>
<summary>🔄 Solución</summary>

a) **No cumple** — falla **finitud**. "Sin detenerte jamás" es, literalmente, un bucle infinito.

b) **No cumple tal cual** — falla **precisión/eficacia**. La división entre cero no está definida; el algoritmo debería incluir una comprobación:
```
SI y <> 0 ENTONCES
  ESCRIBIR x / y
SINO
  ESCRIBIR "Error: división por cero"
FINSI
```

c) **No cumple** — falla **precisión**. "Cantidad adecuada" y "a tu gusto" son valoraciones subjetivas: dos personas obtendrían resultados distintos.

d) **Cumple las cinco**: es finito, preciso (los rangos numéricos están bien delimitados), tiene entrada (la temperatura), salida (el mensaje) y es eficaz.

</details>

---

## Ejercicio 3: traza con condición compuesta

<details>
<summary>🔄 Solución</summary>

La condición usa `Y`: para entrar en la rama `ENTONCES` hace falta que **las dos** subcondiciones sean verdaderas.

**Caso 1** (`rentaFamiliar = 14500`, `notaMedia = 8.2`): `14500 < 18000` es verdadero, `8.2 >= 7.0` es verdadero → la conjunción es verdadera.
```
Beca concedida
Expediente evaluado
```

**Caso 2** (`rentaFamiliar = 12000`, `notaMedia = 6.5`): `12000 < 18000` es verdadero, pero `6.5 >= 7.0` es falso → la conjunción es falsa.
```
Solicitud denegada
Expediente evaluado
```

En los dos casos el último `ESCRIBIR` se ejecuta siempre: está después del `FINSI`, ya fuera del bloque de selección.

</details>

---

## Ejercicio 4: identifica el bloque

<details>
<summary>🔄 Solución</summary>

a) **Secuencia** — los tres pasos se ejecutan uno detrás de otro, sin condiciones ni repeticiones.
b) **Iteración** — el bloque `MIENTRAS...FINMIENTRAS` repite mientras se cumpla `intentos < 3`.
c) **Selección** — el `SI...SINO` decide qué mensaje mostrar según `stock > 0`.

</details>

---

## Ejercicio 5: empareja conceptos

<details>
<summary>🔄 Solución</summary>

**1→C, 2→D, 3→E, 4→A, 5→B**

- Bytecode: código intermedio de Java (`.class`), independiente de la plataforma.
- Pseudocódigo: notación sin sintaxis de un lenguaje concreto.
- JVM: ejecuta el bytecode simulando un ordenador.
- Diagrama de flujo: representación gráfica con símbolos y flechas.
- IDE: editor + compilador + depurador en una sola herramienta (en este curso, IntelliJ).

</details>

---

## Ejercicio 6: elige el símbolo

<details>
<summary>🔄 Solución</summary>

a) **Paralelogramo** (▱) — entrada de datos.
b) **Rombo** (◇) — decisión.
c) **Rectángulo** (▭) — proceso o cálculo.
d) **Óvalo** (⬭) — inicio del algoritmo.
e) **Conector** (◯) — enlaza ramas del diagrama.

</details>

---

## Ejercicio 7: completa el pseudocódigo

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
