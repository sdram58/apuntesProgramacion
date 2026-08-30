---
title: Boletín U01 — Inicial
description: Ejercicios básicos de algorítmica y pseudocódigo
---

# 📝 Boletín U01 — Inicial

> Sin soluciones. Sin prisas. Con papel y lápiz — todavía no hace falta abrir IntelliJ.

---

## Ejercicio 1: ordena la receta

Estos pasos para preparar un café con leche están desordenados. Numéralos del 1 al 5 para formar un algoritmo válido.

```
- Servir el café en la taza.
- Añadir la leche caliente.
- Calentar la leche.
- Poner la cafetera en el fuego.
- Esperar a que salga el café.
```

---

## Ejercicio 2: auditoría de las cinco propiedades

Para cada uno de estos procedimientos, indica si cumple las cinco propiedades de un algoritmo (finito, preciso, con entrada, con salida, eficaz) y, si no, cuál falla y por qué:

a) "Toma un número entero. Súmale 1 de forma continua sin detenerte jamás."
b) "Lee dos números reales `x` e `y`. Calcula su división y escribe el cociente." (Piensa en el caso `y = 0`.)
c) "Toma una cantidad adecuada de harina y hornea hasta que esté dorado a tu gusto."
d) "Lee la temperatura en grados. Si es menor de 15, escribe 'Frío'; si está entre 15 y 25, escribe 'Templado'; si supera 25, escribe 'Calor'."

---

## Ejercicio 3: traza con condición compuesta

Traza este pseudocódigo para los dos casos de entrada y escribe exactamente lo que muestra `ESCRIBIR`:

```
INICIO
  LEER rentaFamiliar
  LEER notaMedia
  SI (rentaFamiliar < 18000) Y (notaMedia >= 7.0) ENTONCES
    ESCRIBIR "Beca concedida"
  SINO
    ESCRIBIR "Solicitud denegada"
  FINSI
  ESCRIBIR "Expediente evaluado"
FIN
```

- Caso 1: `rentaFamiliar = 14500`, `notaMedia = 8.2`
- Caso 2: `rentaFamiliar = 12000`, `notaMedia = 6.5`

---

## Ejercicio 4: identifica el bloque

Según el teorema de Böhm-Jacopini, cualquier algoritmo se construye combinando secuencia, selección e iteración. Para cada fragmento, indica cuál de los tres es:

a)
```
LEER precio
totalConIva ← precio * 1.21
ESCRIBIR totalConIva
```

b)
```
MIENTRAS intentos < 3 HACER
  LEER clave
  intentos ← intentos + 1
FINMIENTRAS
```

c)
```
SI stock > 0 ENTONCES
  ESCRIBIR "Disponible"
SINO
  ESCRIBIR "Agotado"
FINSI
```

---

## Ejercicio 5: empareja conceptos

Relaciona cada concepto de la izquierda con su definición de la derecha:

| Concepto | Definición |
|---|---|
| 1. Bytecode | A. Representación gráfica de un algoritmo con símbolos y flechas |
| 2. Pseudocódigo | B. Software que agrupa editor, compilador y depurador |
| 3. JVM | C. Código intermedio de Java, independiente de la plataforma |
| 4. Diagrama de flujo | D. Escritura de un algoritmo sin sintaxis de un lenguaje concreto |
| 5. IDE | E. Software que ejecuta el bytecode simulando un ordenador |

Escribe las respuestas como "1→C, 2→D, ...".

---

## Ejercicio 6: elige el símbolo

¿Qué símbolo de diagrama de flujo usarías para representar cada uno de estos pasos?

a) "Leer el nombre del usuario."
b) "¿La contraseña es correcta?"
c) "Calcular el total sumando precio más impuestos."
d) "Inicio del algoritmo."
e) "Unir dos ramas del diagrama que vienen de un `SI...SINO` antes de continuar."

---

## Ejercicio 7: completa el pseudocódigo

Falta una línea en este algoritmo que debería mostrar si un número es positivo o negativo. Añádela donde corresponda.

```
INICIO
  LEER numero
  SI numero >= 0 ENTONCES
    ESCRIBIR "Positivo"
  SINO

  FINSI
FIN
```

---

## Ejercicio 8: caza la ambigüedad

Cada uno de estos pasos es ambiguo y no serviría dentro de un algoritmo preciso. Reescribe cada uno para que no deje lugar a interpretación:

a) "Añade sal al gusto."
b) "Espera un rato."
c) "Si el número es grande, avisa."
d) "Repite varias veces."
