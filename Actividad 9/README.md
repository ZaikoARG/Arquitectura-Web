# Página de Suscripción para Diario Online

## Descripción General

Este proyecto consiste en una página web para un diario online con una sección dedicada a la suscripción, desarrollada como parte de un ejercicio de clase. La página principal (`index.html`) muestra un artículo de noticias, mientras que la página de suscripción (`subscription.html`) incluye un formulario responsive para que los usuarios se suscriban al boletín. El diseño mantiene una estética consistente, inspirada en "La Nación", con validación de formularios del lado del cliente y funciones dinámicas.

## Características

* **Página Principal de Noticias (`index.html`)** :
* Muestra un artículo de noticias con encabezado, imágenes, leyendas y contenido de texto.
* Incluye un botón que redirige a la página de suscripción.
* Diseño responsive para vistas en dispositivos móviles y de escritorio.
* **Página de Suscripción (`subscription.html`)** :
* Formulario con los campos: Nombre completo, Correo Electrónico, Contraseña, Repetir Contraseña, Edad, Teléfono, Dirección, Ciudad, Código Postal y DNI.
* Validación del lado del cliente en el evento `blur` para cada campo:
  * **Nombre completo** : Más de 6 letras, con al menos un espacio.
  * **Correo Electrónico** : Formato de email válido.
  * **Contraseña** : Mínimo 8 caracteres, con letras y números.
  * **Repetir Contraseña** : Debe coincidir con la contraseña.
  * **Edad** : Número entero mayor o igual a 18.
  * **Teléfono** : Mínimo 7 dígitos, sin espacios, guiones ni paréntesis.
  * **Dirección** : Mínimo 5 caracteres, con letras, números y un espacio.
  * **Ciudad** : Mínimo 3 caracteres.
  * **Código Postal** : Mínimo 3 caracteres.
  * **DNI** : 7 u 8 dígitos.
* Los mensajes de error aparecen debajo de los campos inválidos y desaparecen en el evento `focus`.
* Al enviar el formulario, se muestra una alerta con la información ingresada si todas las validaciones son correctas, o con los errores si alguna falla.
* **Bonus** : El título del formulario cambia dinámicamente a "HOLA [NOMBRE COMPLETO]" en tiempo real según se edita el campo de nombre completo (usando el evento `input`).
* Diseño responsive: dos columnas en pantallas grandes y una columna en dispositivos móviles, con el botón de enviar centrado al final.
* **Estilo (`styles.css`)** :
* Estética consistente con tipografía 'Prumo' y paleta de colores sobria.
* Estilos reutilizados de la página principal, con adiciones para el formulario de suscripción.
* Diseño responsive con media queries para pantallas de hasta 768px y 480px.

## Estructura del Proyecto

```
Actividad 9/
├── index.html          # Página principal con el artículo de noticias
├── subscription.html   # Página de suscripción con el formulario
└── styles.css          # Hoja de estilos compartida
```
