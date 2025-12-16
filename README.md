# Permiso de trabajo PWA

Aplicación PWA tipo móvil para gestionar permisos FS0xx R1 con flujo Elaboración → Validación → Aprobación → Ejecución y ATR PS.054. No requiere build: se puede abrir `index.html` directamente o servir con cualquier servidor estático.

## Características
- Roles: administrador, ingeniero de proyecto (crea proyectos y códigos de invitación), elaborador, validador, aprobador y ejecutor.
- Creación de proyectos de transporte de hidrocarburos con código compartible (WhatsApp) para sumar equipo con rol ejecutor por defecto.
- Constructor de permisos FS0xx R1 con checklist dinámica: siempre se incluye “Generales” y se añaden preguntas de las actividades seleccionadas (frío, caliente, excavación, etc.).
- Selección de EPP con opción “Otros” y adjunto de evidencias (imágenes).
- Flujo de estados por permiso: elaboración → validación → aprobación → ejecución con botones de avance según rol (elaborador/ingeniero, validador y aprobador/administrador).
- Checklist FS0xx almacena respuestas Sí/No, ATR guarda notas por punto y el tablero muestra evidencias adjuntas.
- ATR PS.054 Anexo1R2 incluido con panel de conversación tipo bow tie preventivo y disparador para trabajo en caliente.
- PWA lista para instalar con manifest y service worker de caché básico.
- Persistencia local (localStorage) y punto de extensión `bootstrapFirebase(config)` para conectar Firebase.

## Cómo probar
1. Levantar un servidor estático, por ejemplo: `python -m http.server 4173` y abrir `http://localhost:4173`.
2. Crear usuario con rol y correo, generar proyecto o unirse con código.
3. Completar checklist, EPP, ATR y adjuntar fotos antes de enviar al validador.

## Estructura
- `index.html`: shell PWA.
- `src/main.js`: lógica de UI, flujos y persistencia.
- `src/data.js`: contenido de FS0xx y ATR.
- `src/styles.css`: estilos con gradientes rojo → morado.
- `manifest.webmanifest` y `service-worker.js`: instalación y caché offline.
