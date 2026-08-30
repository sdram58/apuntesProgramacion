---
title: Boletín U01 — Extras
description: Retos de pensamiento algorítmico puro, sin necesitar Java todavía
---

# 📝 Boletín U01 — Extras

> ⭐ Los retos de CodeWars y AceptaElReto necesitan tipos, `Scanner` y estructuras de control en Java real, así que cogen ritmo de verdad a partir de la U03. Mientras tanto, estos cuatro problemas clásicos ponen a prueba tu pensamiento algorítmico puro — sin escribir ni una línea de código.

---

## Desafío 1: el cruce del río (lobo, cabra y col)

Un pastor está en la orilla izquierda de un río junto a un lobo, una cabra y una col. Tiene una barca donde caben él y como mucho uno de los tres.

- Si el lobo se queda solo con la cabra (sin el pastor), se la come.
- Si la cabra se queda sola con la col (sin el pastor), se la come.
- El lobo no come col.

**Reto:** escribe en pseudocódigo la secuencia de cruces que lleva a los tres, sanos y salvos, a la orilla derecha.

:::tip[Pista]
Un viaje de vuelta no tiene por qué hacerse con la barca vacía — a veces la única forma de evitar una catástrofe es traerte a alguien de vuelta.
:::

<details>
<summary>💡 Solución</summary>

```
1. Cruza con la CABRA (lobo y col quedan seguros juntos en la izquierda).
2. El pastor vuelve solo.
3. Cruza con el LOBO.
4. El pastor vuelve CON LA CABRA (para que el lobo no se quede solo con ella).
5. Cruza con la COL (la cabra se queda sola en la izquierda, sin nada que comerse).
6. El pastor vuelve solo.
7. Cruza con la CABRA otra vez.
```

Siete viajes, y en ningún momento coinciden lobo+cabra o cabra+col sin el pastor delante.

</details>

---

## Desafío 2: la conjetura de Collatz

Para cualquier número entero positivo `n`: si es par, `n ← n / 2`; si es impar, `n ← (3 * n) + 1`. Se repite hasta que `n` llegue a 1.

**Reto:** escribe un algoritmo que lea `n`, muestre la secuencia completa de valores por los que pasa, y al final el número total de pasos.

:::tip[Pista]
Un `MIENTRAS (n <> 1) HACER` con un contador de pasos y un `SI n MOD 2 = 0` dentro es toda la estructura que necesitas.
:::

<details>
<summary>💡 Solución</summary>

```
INICIO
  LEER n
  pasos ← 0
  ESCRIBIR n
  MIENTRAS (n <> 1) HACER
    SI (n MOD 2 = 0) ENTONCES
      n ← n DIV 2
    SINO
      n ← (3 * n) + 1
    FINSI
    ESCRIBIR n
    pasos ← pasos + 1
  FINMIENTRAS
  ESCRIBIR "Tardó " + pasos + " pasos en llegar a 1"
FIN
```

</details>

---

## Desafío 3: el algoritmo de Euclides (máximo común divisor)

Hace más de 2300 años, Euclides encontró una forma de calcular el MCD de dos números mucho más rápida que descomponerlos en factores primos:

- Se calcula el resto de dividir `a` entre `b`.
- Si el resto es 0, el MCD es `b`.
- Si no, `a ← b`, `b ← resto`, y se repite.

**Reto:** escribe el algoritmo en pseudocódigo y traza a mano el MCD de `a = 252` y `b = 105`.

:::tip[Pista]
`MIENTRAS (b <> 0) HACER`, con `resto ← a MOD b`, `a ← b`, `b ← resto` dentro. Cuando el bucle termina, el MCD está en `a`.
:::

<details>
<summary>💡 Solución</summary>

```
INICIO
  LEER a, b
  MIENTRAS (b <> 0) HACER
    resto ← a MOD b
    a ← b
    b ← resto
  FINMIENTRAS
  ESCRIBIR "El MCD es: " + a
FIN
```

Traza para `a = 252`, `b = 105`:

| Vuelta | `a` | `b` | `resto` |
|:---:|:---:|:---:|:---:|
| 1 | 252 | 105 | 42 |
| 2 | 105 | 42 | 21 |
| 3 | 42 | 21 | 0 |

Cuando `b = 0` el bucle termina y `a = 21` — **MCD(252, 105) = 21**.

</details>

---

## Desafío 4: el inversor numérico

Diseña un algoritmo que lea un número entero positivo (por ejemplo, `12345`) y construya el número invertido (`54321`) **usando solo operaciones aritméticas** (`MOD 10` y `DIV 10`) — nada de tratarlo como texto.

:::tip[Pista]
El último dígito de un número es `numero MOD 10`. Quitárselo es `numero ← numero DIV 10`. Para ir construyendo el invertido: `invertido ← (invertido * 10) + digito`.
:::

<details>
<summary>💡 Solución</summary>

```
INICIO
  LEER numero
  invertido ← 0
  MIENTRAS (numero > 0) HACER
    digito ← numero MOD 10
    invertido ← (invertido * 10) + digito
    numero ← numero DIV 10
  FINMIENTRAS
  ESCRIBIR "El número invertido es: " + invertido
FIN
```

</details>
