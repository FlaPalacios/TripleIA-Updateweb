# TRIPLE IA — ESPECIFICACIÓN MAESTRA PARA CODEX
## Nueva versión web institucional + oportunidades

> Este documento define el alcance, criterios de diseño, arquitectura y reglas de implementación para construir una nueva versión de la web de **TRIPLE IA CONSULTORES** desde cero.
>
> La nueva web se desarrollará en una carpeta/proyecto independiente.  
> El repositorio anterior **NO debe modificarse** bajo ninguna circunstancia.

---

# 1. OBJETIVO GENERAL

Construir una nueva versión de la web de **TRIPLE IA CONSULTORES** que:

- se vea más humana, profesional y diferenciada;
- inspire confianza desde la primera visita;
- comunique con claridad qué hace Triple IA;
- aporte valor incluso antes de que el usuario contrate un servicio;
- permita explorar convocatorias, fondos y oportunidades disponibles;
- muestre evidencia de actividad real de la empresa;
- mantenga un estilo tecnológico y contemporáneo sin caer en clichés visuales de webs generadas con IA;
- quede preparada para evolucionar posteriormente hacia una plataforma con base de datos, backend y administración de oportunidades.

Esta primera versión es principalmente un **prototipo frontend funcional y visual**, sin base de datos.

---

# 2. FUENTES DE INFORMACIÓN

## 2.1 Repositorio anterior — SOLO LECTURA

Repositorio de referencia:

https://github.com/FlaPalacios/Triple-IA-web1.git

Usar este repositorio únicamente para:

- recuperar información institucional;
- revisar servicios;
- recuperar textos útiles;
- recuperar enlaces;
- revisar redes sociales;
- revisar datos de contacto;
- reutilizar información sobre proyectos;
- recuperar la sección del Observatorio Global;
- identificar assets que puedan seguir siendo útiles;
- comprender el enfoque actual de Triple IA.

### REGLA CRÍTICA

**NO modificar, commitear, pushear, crear ramas ni realizar ningún cambio en `Triple-IA-web1`.**

Ese proyecto es únicamente una fuente de referencia.

La nueva versión debe construirse completamente dentro del proyecto/carpeta actual.

---

# 3. IDENTIDAD DE TRIPLE IA

Triple IA representa tres pilares:

1. **Innovación abierta**
2. **Investigación aplicada**
3. **Inteligencia artificial y ciencia de datos**

La empresa trabaja alrededor de innovación, proyectos, fondos, investigación aplicada, transformación tecnológica y soluciones basadas en datos.

## Mensaje principal de marca

Usar como idea central:

> **Conectamos oportunidades, innovación y tecnología para hacer crecer proyectos.**

Esta frase debe funcionar como base del hero y del posicionamiento general.

Evitar frases genéricas de consultoría como:

- "Transformamos el futuro"
- "Potenciamos tu negocio"
- "Innovación sin límites"
- "Impulsamos el mañana"
- "Soluciones inteligentes para un mundo mejor"

La comunicación debe sentirse concreta, profesional y humana.

---

# 4. PROPÓSITO DE LA NUEVA WEB

La web no debe funcionar solamente como una vitrina comercial.

Debe ofrecer valor directo mediante:

- oportunidades de financiamiento;
- convocatorias;
- información útil;
- observatorios;
- contenido de divulgación;
- actividad en redes;
- casos y experiencia de Triple IA.

La sensación deseada es:

> "Estas personas conocen el ecosistema de innovación, proyectos y financiamiento y además están activas dentro de él."

---

# 5. STACK TECNOLÓGICO

Mantener:

- React
- TypeScript
- Vite
- Tailwind CSS

Puede agregarse:

- `react-router-dom` para navegación entre páginas;
- `motion` / `framer-motion` si aporta valor a las animaciones;
- `papaparse` para lectura robusta del CSV;
- `lucide-react` únicamente para iconografía funcional y discreta.

No agregar dependencias pesadas sin necesidad.

---

# 6. ARQUITECTURA GENERAL

La web debe tener una página principal y páginas secundarias.

## Rutas mínimas

```txt
/
├── Inicio
├── /oportunidades
└── /oportunidades/:id
```

Opcionalmente dejar preparada la estructura para futuras rutas:

```txt
/servicios
/proyectos
/nosotros
/observatorio
```

No es obligatorio construir todas estas páginas separadas en esta fase.

---

# 7. PÁGINA PRINCIPAL

La página principal debe ser principalmente una landing larga, bien estructurada y con narrativa.

Orden recomendado:

1. Navbar
2. Hero
3. Introducción / qué conecta Triple IA
4. Oportunidades destacadas
5. Servicios
6. Cómo trabajamos / enfoque Triple IA
7. Evidencia / resultados / proyectos
8. Actividad y divulgación — TikTok + redes
9. Observatorio Global
10. Quiénes somos
11. CTA final
12. Footer

No seguir este orden de forma rígida si durante la implementación una composición mejor funciona visualmente.

---

# 8. NAVBAR

Debe ser:

- limpia;
- elegante;
- sticky/fixed;
- sin exceso de elementos;
- responsive;
- con estados de hover sutiles;
- con buena lectura sobre fondos claros y oscuros.

Opciones sugeridas:

- Inicio
- Oportunidades
- Servicios
- Proyectos
- Nosotros
- Contacto

CTA discreto:

**Conversemos**

No usar un botón enorme o demasiado saturado.

---

# 9. HERO

## Objetivo

En menos de 5 segundos debe quedar claro que Triple IA trabaja con:

- oportunidades;
- proyectos;
- innovación;
- investigación aplicada;
- tecnología.

## Mensaje principal

> **Conectamos oportunidades, innovación y tecnología para hacer crecer proyectos.**

Crear un subtítulo breve basado en la información real de Triple IA.

Debe sentirse específico, no genérico.

## CTA sugeridos

Primario:

> Ver oportunidades

Secundario:

> Conocer Triple IA

## Diseño

Evitar completamente el clásico hero SaaS generado por IA:

- título centrado gigante;
- dos botones centrados;
- dashboard flotante;
- gradiente azul/morado;
- blobs;
- partículas;
- tarjetas flotantes genéricas.

Buscar una composición más editorial.

Ejemplos posibles:

- layout asimétrico;
- tipografía dominante;
- bloque informativo desplazado;
- elementos de datos reales;
- etiquetas de oportunidades;
- cifras discretas;
- líneas de conexión;
- composición que represente "conectar" sin dibujar cerebros ni nodos de IA.

---

# 10. SECCIÓN DE OPORTUNIDADES EN HOME

Esta sección es prioritaria.

Debe mostrar una pequeña selección de convocatorias provenientes del archivo:

`Oportunidades_TripleIA - RESUMEN-ORDENADO.csv`

El archivo ya se encuentra dentro de la carpeta del proyecto.

## Importante

Codex debe:

1. localizar el CSV;
2. inspeccionar sus columnas reales;
3. no asumir campos inexistentes;
4. normalizar visualmente los valores;
5. mostrar todas las oportunidades en `/oportunidades`;
6. mostrar solamente algunas destacadas/recientes en el home;
7. implementar la carga sin base de datos.

## En el home

Mostrar entre 3 y 6 oportunidades.

Cada oportunidad debe presentar únicamente la información necesaria para decidir si vale la pena abrirla.

Ejemplos de campos, solo si existen en el CSV:

- título;
- institución/donante;
- país/alcance;
- fecha límite;
- monto;
- tipo de fondo;
- sector;
- quiénes pueden postular.

Agregar CTA:

> Explorar todas las oportunidades

que lleve a:

`/oportunidades`

---

# 11. PÁGINA `/oportunidades`

Debe sentirse como una herramienta útil y no como una simple colección de cards.

## Componentes

### Encabezado

Título claro:

> Oportunidades y fondos

Texto breve que explique que Triple IA recopila y difunde convocatorias relevantes para innovación, investigación, emprendimiento y proyectos.

### Buscador

Implementar búsqueda simple por texto.

Debe buscar como mínimo en:

- título;
- donante/institución;
- sector;
- país;
- descripción o información adicional;

si dichos campos existen.

### Filtros

Crear filtros únicamente con campos reales disponibles en el CSV.

Posibles filtros:

- País / alcance
- Sector
- Tipo de fondo
- Tipo de postulante
- Donante
- Fecha límite
- Moneda

No inventar filtros si el CSV no contiene suficiente información.

### Resultados

Las convocatorias deben tener:

- diseño legible;
- jerarquía clara;
- información compacta;
- buen comportamiento responsive;
- estados hover distintos a la típica card que solo "sube 4 px".

Permitir ordenar si resulta sencillo:

- fecha límite;
- más recientes;
- monto;

solamente si los datos permiten hacerlo correctamente.

---

# 12. DETALLE DE OPORTUNIDAD

Ruta:

`/oportunidades/:id`

Crear un identificador estable a partir del CSV.

La página debe presentar la información disponible de forma ordenada.

Priorizar:

- título;
- donante;
- fecha límite;
- financiamiento;
- elegibilidad;
- alcance;
- sector;
- descripción;
- información adicional;
- enlace oficial.

No inventar información ausente.

CTA:

> Ver convocatoria oficial

Si existe enlace.

Agregar también un CTA comercial discreto:

> ¿Necesitas apoyo para postular?

que dirija al canal de contacto/formulario actual de Triple IA.

El CTA comercial no debe bloquear ni ocultar la información gratuita.

---

# 13. SERVICIOS

Recuperar del proyecto anterior la información real sobre los servicios de Triple IA.

Servicios actuales a considerar:

- Identificación de oportunidades de financiamiento
- Formulación de proyectos
- Asesoría y ejecución de proyectos financiados
- Capacitación en Innovación e IA
- Consultorías especializadas en IA

No presentarlos como cinco cards clonadas.

Buscar una composición menos predecible, por ejemplo:

- lista editorial;
- bloques alternados;
- accordion refinado;
- índice lateral;
- tarjetas con proporciones diferentes;
- interacción por hover que revele información;
- navegación visual por servicios.

Mantener claridad por encima del efecto visual.

---

# 14. LOS TRES PILARES DE TRIPLE IA

Crear una sección breve que explique el significado de Triple IA:

### Innovación abierta
Conectar necesidades, capacidades y oportunidades.

### Investigación aplicada
Transformar conocimiento en soluciones y proyectos concretos.

### Inteligencia artificial y ciencia de datos
Usar tecnología y datos para resolver problemas y mejorar decisiones.

Revisar la información del repositorio anterior y mejorar el wording sin cambiar el sentido institucional.

Esta sección puede ser visualmente distintiva.

Evitar iconos clichés.

---

# 15. PROYECTOS Y EVIDENCIA

Recuperar los proyectos/resultados reales disponibles en la web anterior.

Ejemplos actuales:

- Más de S/ 20 millones captados en fondos no reembolsables.
- Más de 10 organizaciones con ahorros y eficiencias comprobadas.
- Dashboards y observatorios de PROCIENCIA y PROINNOVATE.

No presentar números sin contexto.

Crear una composición de evidencia/casos donde las cifras sean parte de una narrativa.

---

# 16. SECCIÓN DE TIKTOK Y DIVULGACIÓN

Agregar una sección breve que deje claro que Triple IA también:

- divulga oportunidades;
- comparte información útil;
- entrevista investigadores;
- promueve ciencia e innovación en Perú;
- mantiene actividad real en redes sociales.

Video de referencia:

https://www.tiktok.com/@triple.ia.innovation/video/7673936386105429266

Este video corresponde a una entrevista realizada por Triple IA a una investigadora.

## Objetivo visual

No construir una sección tipo "Síguenos en redes" genérica.

La idea debe ser:

> Triple IA no solo formula proyectos: también participa y difunde el ecosistema de ciencia, innovación e investigación.

Mostrar:

- embed o preview del video de TikTok si técnicamente es razonable;
- texto breve;
- enlaces a TikTok, Instagram y LinkedIn;
- CTA tipo "Ver más contenido".

### Si TikTok bloquea el embed

Crear un fallback visual limpio:

- thumbnail;
- título;
- contexto;
- enlace externo al video.

No romper la página si el embed no carga.

---

# 17. OBSERVATORIO GLOBAL

Conservar la idea del Observatorio Global existente.

Actualmente Triple IA cuenta con dashboards de:

- PROCIENCIA
- PROINNOVATE

Esta sección no debe dominar el inicio.

Ubicarla después de otras secciones de mayor prioridad.

Debe comunicar que Triple IA trabaja con:

- datos;
- seguimiento;
- análisis;
- visualización del ecosistema de financiamiento e innovación.

Agregar enlaces a los dashboards existentes recuperados del repositorio anterior.

---

# 18. REDES SOCIALES

Recuperar enlaces actuales del repositorio anterior:

- TikTok
- Instagram
- LinkedIn
- WhatsApp

Mostrar redes de forma natural.

No llenar el sitio de íconos.

Los enlaces pueden concentrarse en:

- sección de divulgación;
- footer;
- contacto.

---

# 19. CONTACTO

Recuperar los datos reales disponibles en el proyecto anterior.

El contacto debe ser breve y directo.

CTA posibles:

- Conversemos
- Cuéntanos tu proyecto
- Necesito apoyo para postular

Utilizar el formulario actual si sigue disponible.

También recuperar WhatsApp y correo institucional.

Evitar formularios propios complejos durante esta fase.

---

# 20. PALETA DE COLORES

Colores principales obligatorios:

```css
--blue: #202D4F;
--beige: #D1BD9B;
--off-white: #EBEBEB;
--black: #1A1A1A;
```

Generar variaciones sutiles del azul para:

- estados hover;
- fondos secundarios;
- divisores;
- superficies;
- texto secundario.

Ejemplo:

- azul ligeramente más claro;
- azul ligeramente más oscuro;
- azul grisáceo.

No introducir otro color protagonista.

El beige debe usarse como acento elegante, no como fondo dominante permanente.

---

# 21. ESTÉTICA GENERAL

La web debe sentirse:

- editorial;
- tecnológica;
- estratégica;
- contemporánea;
- sobria;
- elegante;
- limpia;
- activa;
- humana.

Inspiración conceptual:

https://www.armatuproyecto.cl/

## Importante

No copiar esta web.

Usarla únicamente como referencia de:

- claridad;
- jerarquía;
- sensación de servicio profesional;
- uso de espacio;
- comunicación directa;
- enfoque comercial sin saturación.

La nueva identidad debe sentirse propia de Triple IA.

---

# 22. PROHIBICIONES VISUALES

Evitar estrictamente:

- emojis;
- robots;
- cerebros;
- circuitos usados como símbolo genérico de IA;
- íconos decorativos sin función;
- gradientes morado/azul estilo startup IA;
- glow;
- neón;
- blobs;
- partículas flotantes;
- estrellas decorativas;
- fondos con grids futuristas cliché;
- mockups genéricos de dashboards;
- glassmorphism excesivo;
- cards idénticas repetidas en grids de 3;
- uso excesivo de `rounded-2xl`;
- sombras grandes sin intención;
- títulos que parezcan generados por IA;
- ilustraciones genéricas de personas trabajando;
- fotografías stock excesivamente corporativas;
- textos inflados;
- exceso de badges;
- exceso de pills;
- scroll effects gratuitos;
- iconos Lucide gigantes usados como decoración.

---

# 23. TIPOGRAFÍA

Elegir una combinación tipográfica contemporánea y profesional.

Preferencias:

- sans serif con personalidad;
- alta legibilidad;
- títulos con carácter editorial;
- cuerpo neutro.

Puede utilizarse Google Fonts si es necesario.

Evitar:

- Inter como única decisión automática;
- Poppins si hace que el diseño se vea demasiado genérico;
- tipografías futuristas cliché.

Opciones que podrían evaluarse:

- Manrope
- Geist
- DM Sans
- Plus Jakarta Sans
- Instrument Sans
- Archivo
- IBM Plex Sans

Codex puede seleccionar una combinación coherente.

---

# 24. SISTEMA DE LAYOUT

Usar:

- grid;
- espacios amplios;
- composiciones asimétricas;
- variación de ritmo entre secciones;
- anchos máximos consistentes;
- buena respiración visual.

No hacer que todas las secciones sean:

```txt
título centrado
subtítulo centrado
3 cards
```

Cada sección debe tener una composición adecuada a su contenido.

---

# 25. ANIMACIONES

Las animaciones son importantes.

Deben ser:

- limpias;
- fluidas;
- poco comunes;
- modernas;
- con intención;
- discretamente experimentales.

No deben verse:

- chafas;
- como templates;
- exageradas;
- lentas;
- distractoras.

## Animaciones sugeridas

Experimentar con:

### 1. Reveals mediante máscaras
Texto o bloques que aparezcan a través de `clip-path` o máscaras.

### 2. Líneas de conexión
Pequeños elementos lineales que reaccionen al scroll y comuniquen visualmente el concepto de conectar oportunidades.

### 3. Scroll-linked transitions
Cambios suaves de posición, escala o composición asociados al scroll.

### 4. Typography transitions
Palabras clave que cambien de peso, posición o contraste sutilmente.

### 5. Hover editorial
En servicios u oportunidades, el hover puede:

- desplazar información secundaria;
- cambiar borde;
- revelar una etiqueta;
- alterar jerarquía;
- mover una línea o marcador.

No limitarse a `translateY(-4px)`.

### 6. Section transitions
Transiciones mediante solapamientos, máscaras o cambios de fondo.

### 7. Cursor-aware interaction
Solo si se puede implementar de forma muy sutil y accesible.

## Performance

Las animaciones deben:

- respetar `prefers-reduced-motion`;
- no bloquear la interacción;
- evitar layout shifts;
- mantener buen rendimiento en mobile.

---

# 26. RESPONSIVE

Diseñar desktop y mobile de forma intencional.

No simplemente "apilar todo".

En mobile:

- navbar adecuada;
- filtros utilizables;
- oportunidades fáciles de leer;
- tipografía proporcionada;
- videos responsivos;
- animaciones simplificadas;
- CTAs claros.

---

# 27. ACCESIBILIDAD

Implementar:

- HTML semántico;
- contraste correcto;
- foco visible;
- navegación por teclado;
- labels;
- alt text real;
- `aria` cuando sea necesario;
- `prefers-reduced-motion`;
- botones y enlaces con áreas táctiles adecuadas.

---

# 28. SEO BÁSICO

Aunque sea un prototipo, incluir:

- title;
- meta description;
- Open Graph básico;
- favicon si existe;
- headings jerárquicos;
- textos indexables;
- URLs limpias.

Ejemplo conceptual:

**Title**
Triple IA Consultores | Innovación, oportunidades y tecnología

**Description**
Triple IA conecta oportunidades de financiamiento, innovación, investigación aplicada e inteligencia artificial para desarrollar proyectos con impacto.

No usar esta descripción necesariamente de manera literal si se encuentra una versión mejor.

---

# 29. ESTRUCTURA SUGERIDA DEL PROYECTO

Puede adaptarse si existe una organización mejor.

```txt
src/
├── assets/
├── components/
│   ├── layout/
│   ├── home/
│   ├── opportunities/
│   ├── observatory/
│   ├── social/
│   └── ui/
├── data/
│   ├── opportunities.ts
│   └── site.ts
├── hooks/
├── lib/
│   ├── csv.ts
│   ├── filters.ts
│   └── utils.ts
├── pages/
│   ├── HomePage.tsx
│   ├── OpportunitiesPage.tsx
│   └── OpportunityDetailPage.tsx
├── routes/
├── styles/
├── App.tsx
└── main.tsx
```

El CSV puede mantenerse fuera de `src` o dentro de `public/data` según la estrategia elegida.

---

# 30. MANEJO DEL CSV

Archivo:

`Oportunidades_TripleIA - RESUMEN-ORDENADO.csv`

## Reglas

- analizar primero las columnas;
- detectar encoding;
- manejar celdas vacías;
- normalizar fechas;
- no romperse con comas dentro de campos;
- no convertir información de forma destructiva;
- no inventar valores;
- no eliminar registros;
- mostrar todas las oportunidades;
- mantener el CSV como fuente de datos inicial.

Crear una capa de normalización para que la UI no dependa directamente de nombres extraños de columnas.

Ejemplo conceptual:

```ts
interface Opportunity {
  id: string;
  title: string;
  donor?: string;
  deadline?: string;
  amount?: string;
  country?: string;
  sector?: string;
  eligibility?: string;
  additionalInfo?: string;
  url?: string;
}
```

La interfaz final debe basarse en columnas existentes.

---

# 31. ESTADOS DE DATOS

Implementar estados:

- cargando;
- error;
- sin oportunidades;
- búsqueda sin resultados.

Los mensajes deben ser simples y humanos.

No usar frases de asistente IA.

---

# 32. COMPONENTES REUTILIZABLES

Crear únicamente abstracciones útiles.

Evitar construir un design system enorme en esta fase.

Componentes posibles:

- Container
- SectionHeader
- Button
- OpportunityCard / OpportunityRow
- FilterPanel
- SearchInput
- SocialLink
- Reveal
- AnimatedLine
- Stat
- ExternalLink

No abstraer prematuramente.

---

# 33. CÓDIGO

Priorizar:

- componentes pequeños;
- TypeScript estricto;
- nombres descriptivos;
- separación entre contenido y presentación;
- evitar duplicación;
- evitar lógica compleja dentro del JSX;
- sin archivos monolíticos;
- comentarios solamente cuando aporten contexto.

No generar cientos de líneas de clases Tailwind ilegibles si pueden organizarse mejor.

---

# 34. CONTENIDO

Utilizar información real del repositorio anterior.

Codex debe revisar especialmente:

```txt
src/config/content.ts
src/components/Home/
src/components/Layout/
src/assets/
```

Extraer:

- datos institucionales;
- servicios;
- proyectos;
- redes;
- correo;
- WhatsApp;
- links;
- observatorios;
- assets aprovechables.

No copiar automáticamente el diseño ni la implementación existente.

---

# 35. REGLA CONTRA EL "AI LOOK"

Antes de considerar terminada cada sección, realizar mentalmente esta pregunta:

> "¿Esta sección podría aparecer sin cambios en cualquier landing generada automáticamente para una startup SaaS?"

Si la respuesta es sí, rediseñarla.

Buscar:

- decisiones visuales específicas;
- jerarquías propias;
- contenido real;
- layouts menos predecibles;
- interacción con propósito;
- mejor uso de tipografía;
- evidencia concreta.

---

# 36. FASE DE IMPLEMENTACIÓN

Trabajar en este orden.

## Fase 1 — Auditoría

Antes de escribir componentes:

1. inspeccionar proyecto actual;
2. inspeccionar CSV;
3. inspeccionar repositorio antiguo en modo lectura;
4. listar información reutilizable;
5. identificar assets válidos;
6. definir estructura.

No modificar el repositorio antiguo.

## Fase 2 — Foundation

Crear:

- routing;
- tokens de color;
- tipografía;
- layout;
- navbar;
- footer;
- utilidades;
- configuración de datos.

## Fase 3 — Home

Implementar:

- hero;
- oportunidades destacadas;
- servicios;
- pilares;
- evidencia;
- TikTok/redes;
- observatorio;
- nosotros;
- CTA.

## Fase 4 — Oportunidades

Implementar:

- carga CSV;
- búsqueda;
- filtros;
- cards/lista;
- detalle;
- links externos.

## Fase 5 — Animación

Agregar animaciones después de que el contenido y layout estén correctos.

No diseñar una sección alrededor de un efecto que empeore la UX.

## Fase 6 — Calidad

Verificar:

- responsive;
- accesibilidad;
- build;
- lint;
- errores;
- links;
- performance;
- estados vacíos;
- reduced motion.

---

# 37. NO IMPLEMENTAR TODAVÍA

En esta etapa NO crear:

- base de datos;
- Supabase;
- Firebase;
- autenticación;
- panel admin;
- CMS;
- login;
- pagos;
- scraping automático;
- APIs de oportunidades;
- newsletter compleja;
- chatbot;
- asistente IA;
- sistema de recomendación;
- backend propio.

La prioridad es validar visualmente el producto.

---

# 38. PREPARAR PARA FUTURO

La arquitectura debe permitir posteriormente sustituir:

```txt
CSV local
```

por:

```txt
API / base de datos
```

sin tener que reconstruir toda la UI.

La lógica de oportunidades debe estar desacoplada de la capa visual.

---

# 39. CRITERIOS DE ACEPTACIÓN

La primera versión se considera satisfactoria cuando:

- el proyecto corre correctamente con Vite;
- el repositorio anterior no fue modificado;
- la identidad visual utiliza la nueva paleta;
- el home comunica claramente qué hace Triple IA;
- el sitio no parece un template de IA;
- oportunidades reales se cargan desde el CSV;
- se pueden buscar oportunidades;
- existen filtros útiles basados en columnas reales;
- todas las oportunidades pueden explorarse;
- existe página de detalle;
- el TikTok indicado aparece o tiene fallback funcional;
- las redes sociales funcionan;
- el Observatorio Global permanece accesible;
- servicios y resultados reales fueron recuperados;
- la navegación funciona;
- mobile funciona correctamente;
- las animaciones aportan personalidad sin afectar legibilidad;
- no existen emojis;
- no existen clichés visuales de IA;
- el build termina sin errores.

---

# 40. FORMA DE TRABAJO PARA CODEX

Durante la ejecución:

1. **Primero inspecciona.**
2. Después explica brevemente qué encontraste.
3. Propón la estructura.
4. Implementa por bloques coherentes.
5. Ejecuta `npm run build`.
6. Ejecuta lint cuando corresponda.
7. Corrige problemas antes de dar una fase por terminada.

No realizar cambios masivos sin haber entendido primero la estructura del proyecto.

Si existe una decisión de diseño menor que no está especificada aquí:

- tomar una decisión razonable;
- priorizar coherencia;
- mantener el estilo de este documento;
- no detener el desarrollo por preguntas triviales.

Si existe una decisión que pueda cambiar significativamente:

- arquitectura;
- contenido institucional;
- identidad visual;
- tratamiento de datos;

entonces señalarla antes de asumir algo irreversible.

---

# 41. RESULTADO ESPERADO

El resultado debe sentirse como una web construida específicamente para **Triple IA**, no como una plantilla adaptada.

La experiencia debería comunicar simultáneamente:

**Oportunidades + Innovación + Investigación + Tecnología + Evidencia + Comunidad**

La web debe dejar claro que Triple IA no se limita a vender consultoría:

- encuentra oportunidades;
- comparte conocimiento;
- divulga ciencia;
- trabaja con datos;
- acompaña proyectos;
- participa activamente en el ecosistema.

Ese valor debe percibirse desde la primera visita.
