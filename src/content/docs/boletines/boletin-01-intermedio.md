---
title: Boletín U01 — Intermedio
description: Ejercicios intermedios de algorítmica y pseudocódigo
---

# 📝 Boletín U01 — Intermedio

> Sin soluciones. Aquí ya toca pensar el algoritmo desde cero, no solo leerlo.

---

## Ejercicio 1: el mayor de tres

Escribe en pseudocódigo un algoritmo que lea tres números y escriba cuál es el mayor de los tres, sin comparaciones redundantes.

---

## Ejercicio 2: traza con acumulador y condición anidada

Construye la tabla de traza completa (línea, `tope`, `total`, `k`, evaluación de condiciones, salida) para `tope = 4`:

```
1: INICIO
2:   LEER tope
3:   total ← 0
4:   k ← 1
5:   MIENTRAS (k <= tope) HACER
6:     SI (k MOD 2 = 0) ENTONCES
7:       total ← total + (k * 2)
8:     SINO
9:       total ← total + k
10:    FINSI
11:    k ← k + 1
12:  FINMIENTRAS
13:  ESCRIBIR "Total acumulado: " + total
14: FIN
```

---

## Ejercicio 3: caza dos bugs

Este algoritmo calcula la media de 5 notas, pero tiene **dos errores de lógica** distintos: uno provoca un bucle infinito y otro hace que la media se calcule mal incluso si el bucle terminara. Encuéntralos y corrígelos.

```
INICIO
  sumaNotas ← 0
  contador ← 0
  MIENTRAS contador <= 5 HACER
    LEER nota
    sumaNotas ← sumaNotas + nota
  FINMIENTRAS
  media ← sumaNotas / 5
  ESCRIBIR "La nota media es: " + media
FIN
```

---

## Ejercicio 4: del diagrama al pseudocódigo

Traduce este diagrama de flujo a pseudocódigo: lee un precio y si el cliente es socio aplica un 15% de descuento; si el total resultante supera 100, resta 10 más; al final, muestra el total a cobrar.

```
             ⬭ INICIO
                │
        ▱ LEER precio, esSocio
                │
         ◇ ¿esSocio?
            │Sí                 │No
   ▭ descuento ← precio*0.15    ▭ descuento ← 0
            │                   │
            └─────────┬─────────┘
                      │
           ▭ total ← precio - descuento
                      │
           ◇ ¿total > 100?
              │Sí                 │No
     ▭ total ← total - 10        (nada)
              │                   │
              └─────────┬─────────┘
                        │
             ▱ ESCRIBIR "Cobrar: ", total
                        │
                      ⬭ FIN
```

---

## Ejercicio 5: validar con REPETIR...HASTA QUE

Diseña un algoritmo que pida una calificación entre 0.0 y 10.0 usando `REPETIR...HASTA QUE`: si el valor introducido está fuera de rango, debe avisar y volver a pedirlo tantas veces como haga falta. Al salir, debe mostrar `"Nota válida registrada: " + nota`.

---

## Ejercicio 6: conteo con PARA

Diseña un algoritmo que lea exactamente 8 números enteros (uno por uno) y, usando un bucle `PARA`, cuente cuántos son positivos, cuántos negativos y cuántos son cero. Al terminar, muestra el desglose.

---

## Ejercicio 7: factorial con PARA

Escribe un algoritmo que lea un número entero `N` y calcule su factorial (`N!`) con un bucle `PARA`. Recuerda que `0! = 1` y que el factorial no está definido para números negativos.

---

## Ejercicio 8: tu proyecto en IntelliJ

Abre IntelliJ IDEA y crea un proyecto Java llamado `PracticaU01`. Responde:

1. ¿Qué contiene la carpeta `.idea/`? ¿Y el fichero `.iml`?
2. ¿Qué diferencia hay entre la carpeta `src/` y la carpeta `out/` (o `target/`)?
3. ¿Qué atajo usarías para comentar una línea? ¿Y para reformatear todo el fichero?
