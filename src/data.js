export const permitTemplate = {
  meta: {
    source: 'FS0xx R1 - Permiso de Trabajo Específico',
    revision: '29.08.25',
    extractedFrom: 'FS0xx R1 en rev 29.08.25.xlsx',
    generatedAt: '2025-12-16T13:43:49.756896Z'
  },
  categories: [
    {
      key: 'general',
      name: 'Generales',
      alwaysInclude: true,
      items: [
        { id: 1, text: '¿Existe el análisis de riesgos PS.040 y el procedimiento específico aprobado para el trabajo?' },
        { id: 2, text: '¿El área de trabajo está delimitada, señalizada y libre de obstrucciones/ordenada? (incluye señalización para vehículos y peatones donde aplique)' },
        { id: 3, text: '¿Las condiciones meteorológicas son apropiadas para trabajar? (si es altura, validar viento < 30 km/h)' },
        { id: 4, text: '¿El personal está entrenado/certificado para la tarea y conoce los peligros?' },
        { id: 5, text: '¿Herramientas, equipos y equipos eléctricos fueron revisados y están operativos? (incluye aterrizamiento si corresponde)' },
        { id: 6, text: '¿Se dispone de extintores portátiles adecuados y accesibles en el sitio?' },
        { id: 7, text: '¿Se realizó la charla de seguridad previa / inducción inicial del trabajo?' },
        { id: 8, text: '¿Todo el personal tuvo descanso adecuado (~8 h) y hay gestión de fatiga/relevos si corresponde?' },
        { id: 9, text: '¿Se verificó la atmósfera cuando aplica? (O₂ suficiente y CO/LEL dentro de límites)' },
        { id: 10, text: '¿Medios de comunicación disponibles y operativos? (radio/handy/trunking/satelital) y coordinación con Sala de Control si corresponde' },
        { id: 11, text: '¿Plan de emergencia vigente, rutas de evacuación, botiquín y recursos de rescate disponibles? (incluye brigada/“personal para extinción de incendios” y simulacros cuando apliquen)' },
        { id: 12, text: '¿Documentación de soporte disponible: Orden/Contrato de trabajo, programa/cronograma, procedimientos/planos/diagramas?' },
        { id: 13, text: '¿Requisitos legales y socioambientales vigentes? (licencia ambiental, permiso de desmonte/deshierbe, comunicación con comunidad/propietario; evaluación de impactos SSMS; control de residuos/efluentes y monitoreos)' },
        { id: 14, text: '¿Gestión de cambios activada si hubo modificaciones respecto al plan aprobado? (FO.190 Manejo de Cambios)' },
        { id: 15, text: '¿EPP mínimo estándar definido por el análisis de riesgos y disponible para todos? (casco con barbiquejo, gafas, guantes, botas; añadir arnés/línea de vida para trabajos en altura, etc.)' },
        { id: 16, text: '¿Validez operativa del permiso controlada? (vigencia máx. 12 h y cancelación automática ante alarma de emergencia)' }
      ]
    },
    {
      key: 'en_frio',
      name: 'Actividades EN FRIO',
      alwaysInclude: false,
      items: [
        { id: 17, text: 'Confirmar que el trabajo no genera fuentes de ignición (corte, esmerilado, soldadura, superficies > ≈93 °C). Si genera, migrar a FS.020 – Trabajo en Caliente.' },
        { id: 18, text: 'Antes de abrir bridas/equipos: colocar tapas/placas ciegas temporales y tarjetas de identificación para evitar ingreso de cuerpos extraños.' },
        { id: 19, text: 'Disponer bandejas, tapones y material absorbente previo a la desconexión de líneas para control de derrames.' },
        { id: 20, text: 'Realizar limpieza/descontaminación en frío (agua/detergente/aire) del equipo a intervenir, según procedimiento.' },
        { id: 21, text: 'Verificar temperatura superficial < ≈60 °C del equipo a manipular manualmente.' },
        { id: 22, text: 'Protección de bordes/aristas vivas en piezas a manipular (guardas, cantoneras, limado).' },
        { id: 23, text: 'Guardas de máquinas: retirar solo para intervenir y reinstalar antes de devolver a servicio.' },
        { id: 24, text: 'Herramientas manuales (llaves, cuchillas, cortafríos): hojas/mangos en buen estado; no improvisar palancas.' },
        { id: 25, text: 'Torque controlado: definir secuencia y valores; torquímetro con calibración vigente.' },
        { id: 26, text: 'Retiro controlado de elementos elásticos (resortes, clips, tensores) con extractores/gatos adecuados para evitar liberaciones bruscas.' },
        { id: 27, text: 'Manipulación/izaje de piezas: uso de eslingas/cáncamos inspeccionados; no pasar bajo cargas suspendidas.' },
        { id: 28, text: 'Control de proyecciones/astillas al cincelar/cortar en frío (pantallas o mantas de contención).' },
        { id: 29, text: 'Control de polvo al picar/cepillar: humectación o aspiración localizada.' },
        { id: 30, text: 'Uso de solventes/adhesivos/pinturas en frío: compatibilidad de materiales, FDS disponible y ventilación adecuada si es interior.' },
        { id: 31, text: 'Protección de equipos/superficies cercanas (lonas, cubiertas) para evitar contaminación e ingreso de objetos.' },
        { id: 32, text: 'Verificación de holguras/interferencias antes de mover partes; retirar herramientas/objetos.' },
        { id: 33, text: 'Ergonomía: identificar piezas > ≈25 kg y planificar ayuda mecánica o de equipo.' },
        { id: 34, text: 'Señalización y protección de aberturas temporales (pozos, tapas retiradas, bridas abiertas) con barreras/caperuzas específicas.' },
        { id: 35, text: 'Prueba de estanqueidad en frío (agua/jabón) tras reensamble antes de retorno a servicio.' },
        { id: 36, text: 'Reinstalar placas/indicadores y tapas de inspección; retirar tapones/etiquetas temporales antes de entrega.' },
        { id: 37, text: 'Retiro y disposición de residuos del trabajo en frío (virutas, trapos) según plan de residuos.' }
      ]
    },
    {
      key: 'en_caliente',
      name: 'Actividades EN CALIENTE',
      alwaysInclude: false,
      items: [
        { id: 38, text: 'Lavado previo de recipientes/líneas con vapor o agua con detergente antes de aplicar calor.' },
        { id: 39, text: 'Medición de espesores en zonas a soldar/cortar/arenar antes de intervenir.' },
        { id: 40, text: 'Para arenado: el suministro de aire cuenta con filtro de respiración aprobado.' },
        { id: 41, text: 'En soldadura a cielo abierto: disponer de pantallas/biombos y sombra para el área de soldadura (control UV/IR y proyecciones).' },
        { id: 42, text: 'Certificado Detector de Gases vigente para recipientes/ductos que contuvieron hidrocarburos (luego de lavar, purgar e inertizar)' },
        { id: 43, text: 'Distancias mínimas entre el punto de chispa y almacenamiento de combustibles/cilindros; reubicar cilindros de O₂/combustibles fuera del radio de chispas. (Propuesta adicional)' },
        { id: 44, text: 'Ruteo y protección de cables y mangueras de soldadura/oxicorte: fuera de pasillos, sin uniones improvisadas, protegidos del calor.' },
        { id: 45, text: 'Protección a terceros: cortinas/pantallas específicas contra radiación UV/IR del arco y proyecciones en áreas de tránsito.' },
        { id: 46, text: 'Verificación con termómetro IR de puntos calientes en estructura/equipo antes de levantar control del área.' },
        { id: 47, text: 'Consumibles y discos de corte/amolado aprobados para el material y RPM del equipo; prohibidas adaptaciones.' },
        { id: 48, text: 'WPS/PQR y calificación de soldador vigentes (donde aplique); trazabilidad de electrodo/consumible.' },
        { id: 49, text: 'En muros/pisos con huecos o pasos: tener vigía del lado opuesto para detectar chispas/escoria que traspase.' },
        { id: 50, text: 'Cierre de válvulas a la antorcha y purgado de mangueras al terminar; retiro seguro de cilindros, tapas y sujeción.' },
        { id: 51, text: 'Coordinar con Sala de Control cuando exista potencial de chispa en áreas peligrosas o por ingreso de equipos/vehículos.' },
        { id: 52, text: 'Mantener vigilancia post-trabajo (vigía de fuego) por el tiempo establecido para detectar puntos calientes/reignición.' },
        { id: 53, text: 'Controlar viento/polvo combustible que favorezcan la propagación de chispas; suspender ante condiciones no seguras.' },
        { id: 54, text: 'Registrar en el permiso venteo/quema/drenaje realizados y controles asociados antes del retorno a servicio.' }
      ]
    },
    {
      key: 'en_excavacion',
      name: 'Actividades EN EXCAVACIÓN',
      alwaysInclude: false,
      items: [
        { id: 55, text: 'Determinar la clasificación del tipo de suelo a excavar.' },
        { id: 56, text: 'Verificar que no existan grietas o desprendimientos en las paredes de la excavación.' },
        { id: 57, text: 'Identificar fuentes de vibración que puedan afectar la estabilidad del talud/entibado.' },
        { id: 58, text: 'Confirmar que no habrá daño a servicios enterrados (agua, electricidad, alcantarillado, teléfonos, otros ductos).' },
        { id: 59, text: 'Realizar detección/localización de servicios enterrados (manual o detector) antes de excavar.' },
        { id: 60, text: 'Disponer de planos/diagramas “as built” de los servicios enterrados.' },
        { id: 61, text: 'Establecer distancia segura entre el borde de la excavación y el tránsito vehicular/peatonal.' },
        { id: 62, text: 'Contar con apuntalamiento/entibado para excavaciones > 1,50 m de profundidad.' },
        { id: 63, text: 'Ejecutar talud/banqueo conforme al tipo de suelo.' },
        { id: 64, text: 'Asegurar protecciones adicionales para excavaciones > 6 m de profundidad.' },
        { id: 65, text: 'Disponer de bomba para remoción de agua (desagote) cuando aplique.' },
        { id: 66, text: 'Autorizar y disponer pasos (pasarelas/tablas de arrastre) para cruces de excavación cuando corresponda.' },
        { id: 67, text: 'Cuando se trabaje cerca de excavaciones > 1,80 m, utilizar arnés y línea de vida.' },
        { id: 68, text: 'Disponer de equipo de emergencia para recuperación (tabla espinal, collarín, férulas).' },
        { id: 69, text: 'Contar con medios de escape (escaleras) cada ≤ 7,50 m de distancia.' },
        { id: 70, text: 'Condición de suspensión: no trabajar con lluvia o suelo inestable (u otras condiciones inseguras).' }
      ]
    },
    {
      key: 'con_escaleras',
      name: 'Actividades CON ESCALERAS',
      alwaysInclude: false,
      items: [
        { id: 71, text: 'Verificar ausencia de peligros eléctricos (cables energizados) en un radio < 3 m.' },
        { id: 72, text: 'Desconectar y etiquetar interruptores/conductores eléctricos ubicados a < 3 m.' },
        { id: 73, text: 'Área donde se ubicará la escalera libre de objetos/equipos/materiales peligrosos en 3 m a la redonda.' },
        { id: 74, text: 'Estabilidad y resistencia de la superficie/piso donde se apoyará la escalera.' },
        { id: 75, text: 'Escalera nivelada y que se extienda 0,90 m por encima del punto de apoyo superior.' },
        { id: 76, text: 'Inclinación correcta 1:4 (~75°) y apoyos P1 (piso) / P2 (pared) conforme Diagrama 1.' },
        { id: 77, text: 'Inspección previa vigente (FS.027) de la escalera móvil.' },
        { id: 78, text: 'Estructura completa: peldaños, largueros y tacos de goma en buen estado.' },
        { id: 79, text: 'Peldaños limpios (sin aceite, lodo, óxido, grasa).' },
        { id: 80, text: 'Escaleras fijas con canastillo: contar con protección contra caídas (barandas).' },
        { id: 81, text: 'Escalera dieléctrica cuando exista exposición eléctrica.' },
        { id: 82, text: 'Datos técnicos impresos en el larguero (largo, capacidad máxima, etc.).' },
        { id: 83, text: 'Sujeción de herramientas (portaherramientas / lanyard) para prevenir caída de objetos.' },
        { id: 84, text: 'Para permanencia en altura > 1,80 m y < 4,5 m: línea de vida fija, arnés, anclajes, mosquetones, punto fijo.' },
        { id: 85, text: 'Para trabajos > 4,5 m: dispositivo de absorción de impacto (retráctil).' }
      ]
    },
    {
      key: 'con_andamios',
      name: 'Actividades CON ANDAMIOS',
      alwaysInclude: false,
      items: [
        { id: 86, text: 'Verificar ausencia de peligros eléctricos (cables energizados) en un radio < 3 m.' },
        { id: 87, text: 'Desconectar y etiquetar interruptores/conductores eléctricos ubicados a < 3 m.' },
        { id: 88, text: 'Área donde se erigirá el andamio libre de objetos/equipos/materiales peligrosos en 3 m a la redonda.' },
        { id: 89, text: 'Estabilidad y nivelación de la superficie/piso donde se apoyará el andamio.' },
        { id: 90, text: 'Estructura completa: barandas diagonales, placa/base de apoyo, cruces, pasadores y seguros en buen estado.' },
        { id: 91, text: 'Plataformas con topes/rodapiés (cantoneras) en cada nivel.' },
        { id: 92, text: 'Amarre a estructura fija para andamios de altura > 3 m.' },
        { id: 93, text: 'Accesos y salidas definidos del andamio (subida/bajada).' },
        { id: 94, text: 'Relación altura–base: la altura no supera 3× el largo de la base.' },
        { id: 95, text: 'Datos técnicos visibles (capacidad máxima, etc.) en placa del andamio.' },
        { id: 96, text: 'Trabas de ruedas/frenos instalados para andamios móviles.' },
        { id: 97, text: 'Sujeción de herramientas (portaherramientas / lanyards) para prevenir caída de objetos.' },
        { id: 98, text: 'Para permanencia > 1,80 m y < 4,5 m: línea de vida fija, arnés, anclajes, mosquetones, punto fijo.' },
        { id: 99, text: 'Arnés y línea de vida por trabajador, conectados externamente al sistema del andamio.' },
        { id: 100, text: 'Para trabajos > 4,5 m: absorbedor de impacto / anticaídas retráctil.' },
        { id: 101, text: 'Revisión previa del andamio (FS.026) realizada y vigente.' },
        { id: 102, text: 'Instrucciones especiales a seguir definidas y comunicadas.' }
      ]
    },
    {
      key: 'con_agua_superficie_con_agua',
      name: 'Actividades CON AGUA/SUPERFICIE CON AGUA',
      alwaysInclude: false,
      items: [
        { id: 103, text: 'Equipos/botes/embarcación con implementos completos (remos, soga, salvavidas, iluminación, herramientas).' },
        { id: 104, text: 'Ocupantes con chalecos salvavidas u otro implemento de flotación.' },
        { id: 105, text: 'Embarcación en buen estado (sin goteos, roturas, pinchaduras).' },
        { id: 106, text: 'Personal sabe nadar y/o flotar con chaleco.' },
        { id: 107, text: 'Salvavidas circulares con línea de vida alrededor del lugar de trabajo.' },
        { id: 108, text: 'Medios de evacuación y rescate acuático definidos y disponibles (p. ej., pértiga, línea de vida, tabla; según riesgo).' },
        { id: 109, text: 'Profundidad (tentativa) del agua conocida en el área de trabajo.' },
        { id: 110, text: 'Implementos/equipos de apoyo en el bote (bichero, linterna, mantas, etc.).' },
        { id: 111, text: 'Guardia/observador asignado para observación y auxilio.' },
        { id: 112, text: 'Bote de auxilio asignado cuando existan corrientes fuertes.' },
        { id: 113, text: 'Motor fuera de borda con interruptor tipo “hombre muerto” operativo.' },
        { id: 114, text: 'Permiso de Trabajo en Frío aperturado en combinación cuando aplique.' },
        { id: 115, text: 'Diagrama de contingencias a bordo de la embarcación.' },
        { id: 116, text: 'EPP específicos verificados: chaleco salvavidas, botas de goma, overall impermeable; equipo de buceo si corresponde.' },
        { id: 117, text: 'Velocidad del agua/viento registrada (nudos o m/min).' }
      ]
    },
    {
      key: 'de_bajado_de_tuberia',
      name: 'Actividades DE BAJADO DE TUBERIA',
      alwaysInclude: false,
      items: [
        { id: 118, text: 'Equipos especializados para bajado (side boom, tecles, cadenas, aparejos, equipo de inspección) verificados antes de uso.' },
        { id: 119, text: 'Rodillos de las bicicletas / sistema de bajado verificados (estado, giro libre, alineación).' },
        { id: 120, text: 'Número de equipos disponibles es el apropiado para el bajado planificado.' },
        { id: 121, text: 'Ubicación del responsable de la dirección de bajado es apropiada (visión y control del maniobro).' },
        { id: 122, text: 'Personal de apoyo (holiday, reparación, ayudantes y otros) ubicado a distancia segura (≥ 30 m).' }
      ]
    },
    {
      key: 'de_radiografiado',
      name: 'Actividades DE RADIOGRAFIADO',
      alwaysInclude: false,
      items: [
        { id: 123, text: 'Certificación del personal por IBTEN o similar (radiografista y ayudante) verificada.' },
        { id: 124, text: 'Equipos especializados verificados y con certificados vigentes: cámara/fuente, medidor (Geiger), dosímetro lapicero, colimador.' },
        { id: 125, text: 'Hoja de cálculo de exposición (isótopo/actividad, distancia, espesor, tiempo) elaborada y firmada por responsable de RP. (Buena práctica)' },
        { id: 126, text: 'Perímetro y zona controlada calculados por tasa de dosis (ley del inverso del cuadrado) y delimitados físicamente. (Buena práctica)' },
        { id: 127, text: 'Señalización específica de radiación ionizante (carteles “PELIGRO RADIACIÓN – NO PASAR”, cintas de radiografiado, luz/alarma en exposición).' },
        { id: 128, text: 'Área libre de personas y animales durante la exposición; control de accesos (vigía/barreras).' },
        { id: 129, text: 'Dosimetría personal: TLD/film + dosímetro de lectura directa (lapicero) en cero antes de iniciar y lectura al cerrar.' },
        { id: 130, text: 'Medidor de radiación (Geiger o cámara de ionización) calibrado y con prueba funcional previa al trabajo.' },
        { id: 131, text: 'Colimador y blindajes (plomo/compuesto) instalados para minimizar dosis dispersa / retrodispersión.' },
        { id: 132, text: 'Medio/aparejo apropiado para traslado/manipulación de la fuente radioactiva (varilla, contenedor blindado, trolley).' },
        { id: 133, text: 'Plan de emergencia específico (pérdida de fuente, cable atascado, fallo de cierre) y kit de recuperación disponible.' },
        { id: 134, text: 'Inventario y cadena de custodia de la fuente (ID, actividad, entradas/salidas) actualizados; RSO notificado. (Buena práctica)' },
        { id: 135, text: 'Comunicación previa a todo el personal involucrado y áreas colindantes con cronograma de exposiciones.' },
        { id: 136, text: 'Verificación de atmósferas (CO/LEL) cuando la radiografía se realiza en/contra equipos con hidrocarburos; suspender ante riesgo.' },
        { id: 137, text: 'Condiciones climáticas revisadas (viento/lluvia) para estabilidad del perímetro y posicionamiento de colimación.' },
        { id: 138, text: 'Residuos de gamagrafía (películas/químicos): recipientes apropiados, etiquetado y disposición final.' },
        { id: 139, text: 'Prueba de cierre: confirmación del retorno total de la fuente a posición segura (lectura de tasa ≈ fondo) post exposición. (Buena práctica)' },
        { id: 140, text: 'Control de cables / crank / guías: libres de daño, longitud suficiente, prueba en seco antes de exponer. (Buena práctica)' },
        { id: 141, text: 'Protección a terceros: ajustar perímetro por ocupación del entorno (público/tránsito) para cumplir límites regulatorios. (Buena práctica)' },
        { id: 142, text: 'Planificación de tomas: secuencia, ángulos y posicionamiento del detector/película para evitar repeticiones (menos dosis). (Buena práctica)' },
        { id: 143, text: 'X-ray (si aplica): interlocks, luces de aviso, cable de disparo y fail-safe probados antes de energizar. (Buena práctica)' },
        { id: 144, text: 'Control de backscatter: blindaje posterior en el lado opuesto del haz (planchas/blankets de plomo). (Buena práctica)' },
        { id: 145, text: 'Seguridad física de la fuente en pausas y traslado (custodia continua, no dejar desatendida). (Buena práctica)' },
        { id: 146, text: 'Mapeo de riesgos radiológicos del sitio (reflejos metálicos, pasos de personas, vías de dispersión). (Buena práctica)' },
        { id: 147, text: 'Registro final: tiempos de exposición, lecturas de dosímetro directo antes/después, calibraciones, Nº de película/detector y firma del RSO. (Buena práctica)' },
        { id: 148, text: 'Briefing de cierre y retiro de señalización/perímetro solo tras verificar tasa de dosis en condiciones de fondo. (Buena práctica)' }
      ]
    },
    {
      key: 'prueba_hidrostatica',
      name: 'Actividades PRUEBA HIDROSTATICA',
      alwaysInclude: false,
      items: [
        { id: 149, text: 'Cabezales de lanzamiento y recepción revisados para la limpieza y secado de la tubería.' },
        { id: 150, text: 'Caseta de prueba conforme a exigencias (instrumentos, calefacción, luz, refrigerio) y ubicada a ≥ 30 m del cabezal.' },
        { id: 151, text: 'Levantamiento de barrera para trabajos nocturnos del personal y vehículos que intervienen en la prueba.' },
        { id: 152, text: 'Conexiones de mangueras y abrazaderas verificadas y con cadena de seguridad.' },
        { id: 153, text: 'Tapones y acoples apretados y sin corrosión aparente.' },
        { id: 154, text: 'Señalización específica para la prueba diurna/nocturna (reflectores, balizas, letreros, cintas).' },
        { id: 155, text: 'Cabezales de prueba hidráulica probados a 1,5× la presión de prueba (presentar certificación).' },
        { id: 156, text: 'Análisis físico-químico del agua a utilizar para la prueba.' },
        { id: 157, text: 'Equipos especializados (bombeo, cabezales, conexiones) verificados previamente.' }
      ]
    },
    {
      key: 'de_desfile_de_tuberia',
      name: 'Actividades DE DESFILE DE TUBERIA',
      alwaysInclude: false,
      items: [
        { id: 158, text: 'Equipos especializados para desfile (side boom, grúas, retroexcavadora, camiones) verificados antes de usar.' },
        { id: 159, text: 'Patolas, eslingas y fajas de izaje con aprobación y check-list vigentes.' },
        { id: 160, text: 'Escalera a utilizar para subir al camión inspeccionada (check-list).' },
        { id: 161, text: 'Línea de vida externa cuando el personal de apoyo está sobre la carga.' },
        { id: 162, text: 'Ayudante/guía banderillero asignado al operador de equipo pesado.' },
        { id: 163, text: 'Perímetro de izaje controlado: personal de apoyo a distancia segura y conos de seguridad instalados.' },
        { id: 164, text: 'Antes de retirar fajas de seguridad de la carga: comprobar que los tubos no se movieron ni hay riesgo de deslizamiento.' },
        { id: 165, text: 'En terrenos con pendiente: definir si se desfila o si se hacen acopios temporales (plan de contención).' },
        { id: 166, text: 'Condición de viento: confirmar velocidad < 45 km/h para operar con seguridad.' },
        { id: 167, text: 'Habrá emisión de gas natural en el trabajo?, si es asi Instrucciones especiales / adicionales a seguir……………………………………………………………………………………..' }
      ]
    }
  ],
  ppe: {
    options: [
      'CASCO Y BARBIQUEJO',
      'GUANTES( CUERO/PIGMENTADOS)',
      'GAFAS DE SEGURIDAD',
      'BOTAS DE SEGURIDAD',
      'PROTECTOR AUDITIVO',
      'PROTECTOR FACIAL Y GAFAS ANTIPARRAS',
      'ROPA DE TRABAJO',
      'OVERALL TERMICO'
    ],
    allowsOther: true,
    otherLabel: 'Otros (especificar)'
  }
};

export const atrTemplate = {
  meta: {
    source: 'PS.054 Anexo1R2 - Análisis de Trabajo Seguro (A.T.S)',
    revision: '25.02.25',
    extractedFrom: 'PS.054 Anexo1R2 EN REV  25.02.25.xlsx',
    generatedAt: '2025-12-16T13:43:57.288391Z'
  },
  talkPoints: [
    { id: 1, text: 'Objetivos del trabajo' },
    { id: 2, text: 'Plan y Procedimientos' },
    { id: 3, text: 'Responsabilidades/Supervisión' },
    { id: 4, text: 'Peligros' },
    { id: 5, text: 'Mano de Obra y Capacitación' },
    { id: 6, text: 'Equipo a utilizar' },
    { id: 7, text: 'Equipo de Protección Personal' },
    { id: 8, text: 'Las 3 Que\'s' },
    { id: 9, text: 'Permiso de Trabajo' },
    { id: 10, text: 'Lugar de Trabajo' },
    { id: 11, text: 'Otras actividades' },
    { id: 12, text: 'Cierre y Etiquetado' },
    { id: 13, text: 'Sistemas sensibles inhibidos o desconectados' },
    { id: 14, text: 'Vías de Evacuación' },
    { id: 15, text: 'OBSERVACION RELEVANTES NO CONTEMPLADOS ANTERIORMENTE / LISTA DE OTROS PARTICIPANTES' }
  ],
  hotWorkPrompt: '¿Es un trabajo en caliente?'
};
