# Bitácora de Vibe Coding: HidroHuerto

**Herramienta de IA:** Claude (chat)

## Idea inicial
App Next.js de huerto hidropónico: catálogo de cultivos, beneficios y comparador de sistemas.

## Iteración 0: Configuración
- **Prompt:** (comando create-next-app y reglas de AGENTS.md)
- **Resultado:** proyecto Next.js 16.4.6 funcionando.
- **Decisión técnica:** archivo AGENTS.md para dar contexto a la IA y no gastar tokens.

## Iteración 1: Datos y API (tipos y datos)
- **Prompt:** "Crea los tipos Cultivo y Sistema, y los datos de 8 cultivos hidropónicos (lechuga, albahaca, espinaca, fresa, tomate cherry, menta, cilantro, pepino) y 3 sistemas (NFT, DWC, torres verticales). Textos originales y breves."
- **Resultado:** Claude generó `src/types/index.ts`, `src/data/cultivos.ts` y `src/data/sistemas.ts`. Los creé a mano en VS Code siguiendo sus instrucciones.
- **Decisión técnica:** los textos son originales y los valores (pH, días a cosecha) son aproximados. Evité copiar el ebook de hidroponía porque tiene derechos reservados. Usé tipos de TypeScript estrictos, sin `any`.
- **Problemas y cómo se resolvieron:** Ninguno hasta ahora.

## Iteración 2: API con Route Handlers
- **Prompt:** "Crea Route Handlers: GET /api/cultivos (con filtro ?categoria=), GET /api/cultivos/[id] (404 con JSON si no existe) y GET /api/sistemas. Crea .env.local y .env.example."
- **Resultado:** tres Route Handlers probados en el navegador (200, 200, 200, 404 y 200 según lo esperado).
- **Decisión técnica:** en Next 16 los `params` de rutas dinámicas son una Promise, por eso se usa `await params`. Se agregó `!.env.example` al .gitignore para que la plantilla sí se suba al repositorio.
- **Problemas y cómo se resolvieron:** los archivos .env quedaron vacíos al crearlos y los detecté al revisar las capturas; pegué la variable NEXT_PUBLIC_API_URL y reinicié el servidor para que Next la leyera.

## Iteración 3: Layout, Navbar e Inicio
- **Prompt:** "Crea un layout con barra de navegación responsive (Inicio, Beneficios, Cultivos, Sistemas) y una página de inicio con un banner y 3 cultivos destacados, usando Tailwind en tonos verdes."
- **Resultado:** componente Navbar (Client Component), layout y página de inicio (Server Component). Probado en localhost, se ve correcto.
- **Decisión técnica:** la Navbar es Client Component porque usa `usePathname` para resaltar el enlace activo; el resto son Server Components. Como el proyecto tiene Cache Components activado, la Navbar va envuelta en `Suspense`.
- **Problemas y cómo se resolvieron:** Ninguno.

## Iteración 4: Página de cultivos
- **Prompt:** "Crea la página /cultivos con buscador por nombre y filtro por categoría. Debe consumir /api/cultivos, manejar estados de carga y error, y tener loading.tsx y error.tsx."
- **Resultado:** Client Component `CatalogoCultivos` dentro de una página Server Component, más `loading.tsx` y `error.tsx` de la ruta. Probado en localhost con los 8 cultivos, buscador y filtros funcionando.
- **Decisión técnica:** el filtro por categoría se pide a la API con `?categoria=` y el buscador filtra en el cliente. Definí una paleta verde salvia + madera + crema en globals.css con `@theme`, para cambiar los colores de toda la app sin tocar cada componente.
- **Problemas y cómo se resolvieron:** al crear `CatalogoCultivos.tsx` escribí mal el nombre del archivo. Next.js mostró "Module not found: Can't resolve '@/components/CatalogoCultivos'" y VS Code marcó el mismo error en page.tsx. Revisé el tsconfig.json (el alias `@/*` estaba bien), corregí el nombre del archivo y limpié la caché con `Remove-Item -Recurse -Force .next`.

## Iteración 5: Sistemas, beneficios y despliegue
- **Prompt:** "Crea las páginas /sistemas y /beneficios con tarjetas, y ayúdame a subir el proyecto a GitHub y desplegarlo en Vercel."
- **Resultado:** 4 rutas funcionando, repositorio público y app desplegada.
- **Decisión técnica:** no definí NEXT_PUBLIC_API_URL en Vercel para que la app use rutas relativas.
- **Ninguno.