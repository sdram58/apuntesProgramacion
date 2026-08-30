---
title: Boletín U01 — Intermedio
description: Ejercicios intermedios de algorítmica y pseudocódigo
---

# 📝 Boletín U01 — Intermedio

> Sin soluciones. Aquí ya toca pensar el algoritmo desde cero, no solo leerlo.

---

## Ejercicio 1: el mayor de tres

Escribe en pseudocódigo un algoritmo que lea tres números y escriba cuál es el mayor de los tres.

---

## Ejercicio 2: traza anidada

Traza este pseudocódigo para `n1 = 7`, `n2 = 7` y para `n1 = 3`, `n2 = 9`. Escribe la salida exacta en cada caso.

```
INICIO
  LEER n1
  LEER n2
  SI n1 = n2 ENTONCES
    ESCRIBIR "Son iguales"
  SINO
    SI n1 > n2 ENTONCES
      ESCRIBIR "n1 es mayor"
    SINO
      ESCRIBIR "n2 es mayor"
    FINSI
  FINSI
FIN
```

---

## Ejercicio 3: traza con bucle

Traza este pseudocódigo y escribe todo lo que se muestra por pantalla, línea a línea.

```
INICIO
  contador ← 1
  MIENTRAS contador <= 5 HACER
    ESCRIBIR contador
    contador ← contador + 1
  FINMIENTRAS
  ESCRIBIR "Fin del bucle"
FIN
```

---

## Ejercicio 4: depura el pseudocódigo

Este algoritmo debería sumar los números del 1 al 10, pero tiene un error de lógica que lo deja en bucle infinito. Encuéntralo y corrígelo.

```
INICIO
  suma ← 0
  contador ← 1
  MIENTRAS contador <= 10 HACER
    suma ← suma + contador
  FINMIENTRAS
  ESCRIBIR suma
FIN
```

---

## Ejercicio 5: del diagrama al pseudocódigo

Un diagrama de flujo tiene esta estructura: empieza, pide un número, decide si es par (si el resto de dividir entre 2 es 0), si es par escribe "Par", si no escribe "Impar", y termina. Escribe el pseudocódigo correspondiente.

---

## Ejercicio 6: clasifica el algoritmo completo

Para el pseudocódigo del ejercicio 3 (el del bucle del 1 al 5), identifica qué líneas concretas corresponden a cada uno de los tres bloques estructurales: secuencia, selección e iteración. (Pista: puede que falte alguno de los tres bloques — si es así, dilo.)

---

## Ejercicio 7: tu primer proyecto

Abre IntelliJ IDEA y crea un nuevo proyecto Java llamado `PracticaU01`. Una vez creado, escribe qué carpetas y ficheros ha generado el IDE automáticamente y para qué sirve cada uno, a partir de lo que veas en el panel del proyecto.

---

## Ejercicio 8: propiedades rotas

Cada uno de estos "algoritmos" incumple una o más de las cinco propiedades. Para cada uno, indica qué propiedad(es) falla(n) y reescríbelo en pseudocódigo correcto:

a) "Mientras el usuario no se canse, pide un número y súmalo al total."
b) "Calcula la raíz cuadrada de un número. No hace falta pedir el número, ya se sabe cuál es."
c) "Lee un número. Si es primo, tarda lo que tarde en decírtelo."
