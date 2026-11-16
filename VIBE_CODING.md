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