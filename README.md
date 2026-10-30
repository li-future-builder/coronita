# 👑 ¿Qué princesa de Disney eres? — CORONITA

Descubre qué princesa de Disney vive en tu personalidad. Responde **7 preguntas**, elige con honestidad y encuentra a tu princesa entre **12 resultados posibles**: Rapunzel, Mulan, Bella, Tiana, Ariel, Jasmín, Cenicienta, Moana, Mérida, Pocahontas, Elsa y Anna.

**[✨ Jugar ahora](https://li-future-builder.github.io/coronita/)**

![Logo de CORONITA](assets/logo.png)

## ✨ Características

- 👑 **12 princesas posibles**, cada una con su imagen, título de personalidad, descripción y frase característica.
- 📝 **7 preguntas** con 12 opciones de respuesta cada una: no hay respuestas buenas ni malas, solo tú.
- 🎭 **Plot twist incluido**: si empatas con otra princesa, el test te lo cuenta.
- 🔗 **Resultado compartible con un enlace**: tu princesa viaja codificada en la URL. Quien reciba el enlace verá tu mismo resultado al abrirlo, sin servidores ni bases de datos.
- 📱 **Compartir nativo** (Web Share API en móviles) y botón de **copiar** con respaldo para navegadores antiguos.
- 💗 Diseño **responsive** (móvil y escritorio), accesible y sin dependencias externas.

## 🎮 Cómo jugar

1. Abre el test y pulsa **«Empezar mi era de princesa ✨»**.
2. Responde las 7 preguntas eligiendo la opción que más se parece a ti.
3. Descubre tu princesa y compártela con tus amigas por el enlace.

## 🚀 Ejecutar localmente

No necesita instalación ni servidor. Solo abre `index.html` en tu navegador.

## 🌐 Demo

El test está publicado con GitHub Pages:

**[https://li-future-builder.github.io/coronita/](https://li-future-builder.github.io/coronita/)**

## 📁 Estructura del proyecto

```
coronita/
├── index.html          # Marcado (HTML)
├── css/
│   └── style.css       # Estilos (CSS)
├── js/
│   └── main.js         # Lógica del test, princesas y compartir (JavaScript)
├── assets/
│   ├── logo.png        # Logo de CORONITA
│   └── princesses/     # Imagen de cada princesa (12 imágenes)
├── README.md
└── LICENSE
```

## 🛠️ Tecnologías

- HTML5, CSS3 y JavaScript vanilla — sin frameworks ni build.
- Web Share API y Clipboard API para compartir (con respaldo universal).

## 🔗 ¿Cómo funciona el compartir?

Al terminar el test, tus respuestas se codifican en el propio enlace (`#r=...`). El proyecto no usa servidores, cookies ni bases de datos: todo ocurre en tu navegador. Si alguien abre tu enlace, el test decodifica tus respuestas y muestra tu misma princesa.

## 🎨 Personalizar

- Edita los arrays `P` (princesas) y `Q` (preguntas) en [`js/main.js`](js/main.js). Cada opción de respuesta apunta al índice de su princesa.
- Cambia los colores en las variables CSS al inicio de [`css/style.css`](css/style.css) (`--pink`, `--plum`, `--accent`…).
- Sustituye las imágenes en `assets/princesses/` manteniendo los nombres de archivo.

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE). Puedes usarlo, modificarlo y compartirlo libremente.

## ⚠️ Aviso legal

Test recreativo y **no oficial**. No está afiliado, patrocinado ni aprobado por Disney. Las imágenes de las princesas son ilustraciones de demostración con fines no comerciales.

---

💗 Hecho con magia por [li-future-builder](https://github.com/li-future-builder) · [Reportar un problema](https://github.com/li-future-builder/coronita/issues)
