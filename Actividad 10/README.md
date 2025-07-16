# Página de Suscripción para Diario Online

## Descripción General

Este proyecto es una página web para un diario online, desarrollada como parte de los ejercicios de las clases 08 y 09. La página principal (`index.html`) presenta un artículo de noticias, mientras que la página de suscripción (`subscription.html`) incluye un formulario responsive para que los usuarios se suscriban al boletín. En la Semana 09, se añadió funcionalidad para enviar los datos del formulario a un servidor mediante una llamada HTTP POST, mostrar un modal con los resultados y manejar el almacenamiento en LocalStorage. El diseño mantiene una estética consistente, inspirada en "La Nación", con validaciones del lado del cliente y un modal para respuestas del servidor.

## Características

* **Página Principal de Noticias (`index.html`)** :
* Muestra un artículo de noticias con encabezado, imágenes, leyendas y contenido de texto.
* Incluye un botón que redirige a la página de suscripción (`subscription.html`).
* Diseño responsive para vistas en dispositivos móviles y de escritorio.
* **Página de Suscripción (`subscription.html`)** :
* **Formulario** : Campos para Nombre completo, Correo Electrónico, Contraseña, Repetir Contraseña, Edad, Teléfono, Dirección, Ciudad, Código Postal y DNI.
* **Validaciones del lado del cliente** (en el evento `blur`):
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
* Los mensajes de error aparecen debajo de los campos inválidos en `blur` y desaparecen en `focus`.
* **Envío de datos** : Al hacer clic en "Enviar", se valida el formulario. Si es válido, los datos se envían mediante una solicitud POST a `https://jsonplaceholder.typicode.com/posts`.
* **Modal** : Un modal se muestra tras el envío, indicando éxito (con los datos de la respuesta) o error (con detalles del fallo). El modal se cierra con un botón "×".
* **LocalStorage** : En caso de éxito, los datos enviados se guardan en LocalStorage y se recargan automáticamente en los campos del formulario al refrescar la página.
* **Bonus** : El título del formulario cambia dinámicamente a "HOLA [NOMBRE COMPLETO]" en tiempo real según se edita el campo de nombre completo (usando el evento `input`).
* **Diseño responsive** : Dos columnas en pantallas grandes y una columna en dispositivos móviles, con el botón de enviar centrado al final.
* **Estilo (`styles.css`)** :
* Estética consistente con tipografía 'Prumo' y paleta de colores sobria.
* Estilos para el formulario y el modal, con media queries para pantallas de hasta 768px y 480px.
* Modal con fondo semitransparente, centrado y con sombra para destacar sobre el contenido.

## Estructura del Proyecto

```
Actividad 10/
├── index.html          # Página principal con el artículo de noticias
├── subscription.html   # Página de suscripción con el formulario y modal
├── styles.css          # Hoja de estilos compartida
└── README.md           # Documentación del proyecto
```

## URL de GitHub Pages
