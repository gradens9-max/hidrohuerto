<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
## Reglas del proyecto: HidroHuerto

App web sobre huerto hidropónico (catálogo de cultivos, beneficios y comparador de sistemas).

### Stack obligatorio
- Next.js 16 con App Router (carpeta `src/app`), TypeScript estricto, Tailwind CSS.
- Sin `any`. Tipos en `src/types`.

### Rutas (mínimo 4)
- `/` inicio · `/beneficios` · `/cultivos` · `/cultivos/[id]` · `/sistemas`
- Cada ruta con datos debe tener su `loading.tsx` y su `error.tsx`.

### Componentes
- Server Components por defecto.
- `"use client"` solo cuando haga falta interactividad (buscador, filtros, comparador).
- Usar `useState` y `useEffect` donde corresponda.

### Datos
- API propia con Route Handlers en `src/app/api/cultivos` y `src/app/api/sistemas`.
- La URL base de la API va en `.env.local` (`NEXT_PUBLIC_API_URL`) y documentada en `.env.example`.
- Manejo de errores: respuestas 404 cuando el recurso no existe, nunca 500 por eso.

### Diseño
- Responsive (móvil y escritorio), estilo limpio con tonos verdes.

### Contenido
- Todos los textos deben ser originales. No copiar texto de ebooks ni sitios con derechos.
- No afirmar beneficios como hechos absolutos sin dato verificable.

### Forma de trabajar
- Antes de crear archivos, explicar brevemente el plan.
- Cambios pequeños y verificables, un paso a la vez.
- No tocar archivos fuera de lo pedido.