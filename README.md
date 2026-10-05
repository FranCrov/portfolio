# Portfolio · Franco Crovetto

Portfolio de una sola página para presentar el perfil, los proyectos y las vías de contacto.

## Stack

- **Next.js 16** con App Router y renderizado estático
- **React 19** y **TypeScript**
- **Tailwind CSS 4** para las utilidades base
- **CSS propio** en `app/globals.css` para el sistema de diseño (tokens, secciones, animaciones)
- **next-themes** para el tema claro/oscuro siguiendo la preferencia del sistema
- **Barlow Condensed** y **DM Sans** vía `next/font` (self-hosted, sin requests externos)

## Secciones

| Sección | Ancla | Qué incluye |
| --- | --- | --- |
| Hero | `#inicio` | Nombre, rol, presentación, CTAs, avatar y enlaces sociales |
| Proyectos | `#proyectos` | Tres proyectos con panel de color, logo a sangre de fondo, resumen, tecnologías y links |
| Sobre mí | `#sobre-mi` | Biografía y habilidades agrupadas por categoría |
| Recorrido | `#recorrido` | Formación y experiencia en una línea de tiempo |
| Contacto | `#contacto` | Formulario validado, email con copiado y enlaces a GitHub/LinkedIn |

## Logos de proyectos

Los logos viven en `public/logos/` y se muestran a sangre, cubriendo todo el panel
de color de cada proyecto. En reposo están en escala de grises y se vuelven a color
al pasar el mouse, con un zoom suave.

Los tres logos comparten las mismas reglas: PNG de 512×512 con fondo transparente y
recortados al área con contenido, para que ninguno domine sobre los otros. El logo
de Biblioteca traía el fondo gris horneado dentro del PNG, así que se le removió con
un flood fill desde los bordes en lugar de un umbral global, para no borrar los
contornos claros que tiene el escudo.

Cada proyecto declara su logo en `data/projects.ts`. Para sumar uno nuevo alcanza con
copiar el archivo a `public/logos/` y agregar la entrada:

```ts
logo: {
  src: "/logos/mi-proyecto.png",
}
```

El logo es decorativo: va con `alt=""` y `aria-hidden`, porque el nombre del proyecto
ya está en el título y en la etiqueta del panel.

## Formulario de contacto

El formulario valida en el cliente nombre (2-80 caracteres), email (formato) y
mensaje (10-2000 caracteres), con contador de caracteres y mensajes de error
asociados por `aria-describedby`. Al enviar correctamente arma un `mailto:` con
el asunto y el cuerpo ya escritos, así que no necesita backend ni variables de
secreto.

## Ejecutar localmente

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Comandos

```bash
npm run lint     # ESLint
npm run build    # build de producción
npm run start    # sirve el build
```

## Accesibilidad y responsive

- HTML semántico: un solo `h1`, `header` / `nav` / `main` / `section` / `footer`, enlace para saltar al contenido.
- Navegable por teclado, foco visible en todos los controles y targets táctiles de mínimo 44px.
- Verificado en 360px, 768px y 1280px sin scroll horizontal.
- Las animaciones de entrada se desactivan con `prefers-reduced-motion: reduce`, y sin JavaScript el contenido se muestra sin animación.

## Deploy

Listo para Vercel: importá el repositorio y usá los comandos predeterminados
(`npm run build`) con el directorio de salida `.next`.