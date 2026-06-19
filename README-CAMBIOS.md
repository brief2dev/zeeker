# Cómo integrar esto a tu proyecto

No tuve acceso a tu repositorio real en este chat (no se subió ningún archivo), así
que estos son los archivos completos y listos para copiar dentro de tu proyecto
actual, respetando el árbol que pediste.

## 1. Limpieza de estructura

Tu árbol tenía una carpeta `src/comercio/` (fuera de `app`). En el App Router de
Next.js las rutas SOLO viven dentro de `src/app`, así que esa carpeta suelta no
hace nada — probablemente quedó de un movimiento a medias. Bórrala:

```bash
rm -rf src/comercio
```

Las rutas dinámicas de "comercio" deben vivir únicamente en:

```
src/app/comercio/[slug]/page.tsx
```

## 2. Archivos a copiar/reemplazar

```
src/styles/colors.css                       (nuevo) — paleta de colores
src/app/globals.css                         (reemplazar)
src/app/layout.tsx                          (reemplazar o fusionar con tu metadata)
src/app/page.tsx                            (reemplazar)
src/app/comercio/[slug]/page.tsx            (nuevo)
src/components/layout/Navbar.tsx            (reemplazar)
src/components/layout/Footer.tsx            (nuevo)
src/components/home/PromoBanner.tsx         (nuevo)
src/components/home/Categorias.tsx          (reemplazar)
src/components/home/ComercioCard.tsx        (reemplazar)
src/components/home/ComerciosDestacados.tsx (reemplazar)
src/components/home/OfertasTrending.tsx     (nuevo)
src/components/ui/SectionHeader.tsx         (nuevo)
src/data/mock-data.ts                       (reemplazar)
src/services/comercios.ts                   (nuevo)
```

## 3. Verifica el alias `@/*`

Todo usa imports tipo `@/components/...`. En `tsconfig.json` debes tener:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Si tu proyecto ya lo tenía (es el default de `create-next-app`), no hagas nada.

## 4. Sobre la paleta de colores (lo que pediste: un solo archivo)

Todo el tema vive en **`src/styles/colors.css`**. Usa Tailwind v4: cada variable
`--color-x` genera automáticamente las clases `bg-x`, `text-x`, `border-x`, etc.
Por eso en los componentes ves clases como `bg-primary`, `text-accent`,
`text-text-muted`... nunca un hex suelto.

Para cambiar el tema completo en el futuro, edita SOLO ese archivo:

```css
@theme {
  --color-primary: #c1502e;   /* cambia esto y toda la app cambia */
  --color-secondary: #0f7173;
  --color-accent: #f2a93b;
  ...
}
```

No hace falta tocar `tailwind.config` (Tailwind v4 no lo requiere) ni ningún
componente.

> Si tu proyecto usa Tailwind v3 (tiene un `tailwind.config.ts`), dime y te
> paso la versión equivalente con `theme.extend.colors` apuntando a estas
> mismas variables CSS — el resto del código no cambia.

## 5. Qué se rediseñó en el Home (inspirado en Mercado Libre)

`src/app/page.tsx` ahora compone:

1. **`PromoBanner`** — carrusel de banners de publicidad/descuentos (autoplay).
2. **`Categorias`** — chips de categorías con scroll horizontal.
3. **`OfertasTrending`** — carrusel de ofertas con badge de % de descuento.
4. **`ComerciosDestacados`** — grid de comercios destacados (usa tu `ComercioCard`
   con el `next/link` dinámico a `/comercio/[slug]`).

`ComercioCard` enlaza a `/comercio/[slug]`, y esa página ya existe en
`src/app/comercio/[slug]/page.tsx`, mostrando info del comercio y sus ofertas.

## 6. Imágenes

Las imágenes de `mock-data.ts` usan `picsum.photos` (placeholders) solo para que
veas el diseño funcionando. Cuando tengas imágenes reales, solo cambia el campo
`imagen` por tu URL — si usas `next/image` en vez de `<img>`, recuerda agregar
el dominio en `next.config.ts` (`images.remotePatterns`).

## 7. Segunda ronda de ajustes (estilo de tarjetas + navbar + banner)

- **Tarjetas de ofertas** (`OfertasTrending.tsx`) ahora siguen el patrón de
  "También puede interesarte" de Mercado Libre: precio original tachado,
  precio final con centavos en superíndice, badge verde "X% OFF" junto al
  precio, línea verde de cuotas ("3 meses sin intereses de $...") y línea
  verde de entrega (con ícono de rayo, o resaltada con fondo si
  `entregaDestacada: true`). Para esto `Oferta` ahora tiene `precioOriginal`,
  `descuento`, `cuotas` (opcional) y `entrega` en `mock-data.ts`.
- Se agregaron **puntos de paginación** funcionales arriba a la derecha del
  título de la sección (como en la imagen de referencia): siguen la posición
  del scroll horizontal y son clicables. Para soportar esto, `SectionHeader`
  ahora acepta un prop `rightSlot` para insertar cualquier elemento a la
  derecha del título (no solo el link "Ver todo").
- **Navbar** más alto: `py-3` → `py-5`, logo y texto un poco más grandes.
- **Banner** ahora ocupa el ancho completo de la pantalla (sin `max-w-6xl`
  ni bordes redondeados en el contenedor) y es un poco más alto
  (`aspect-[16/7]` en móvil, `aspect-[16/4.5]` en desktop). El texto interno
  se sigue alineando al contenedor de lectura de `max-w-6xl` para que no se
  vea perdido en pantallas muy anchas.

