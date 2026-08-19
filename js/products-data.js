/**
 * Tienda Natural - Catálogo de Productos y Características Detalladas
 */

'use strict';

const PRODUCTS_DATA = {
  'cafe-ecologico': {
    id: 'cafe-ecologico',
    name: 'CAFÉ ECOLÓGICO 250GR',
    category: 'Alacena Natural',
    price: 'S/30.00',
    numericPrice: 30.00,
    image: 'images/colagen_producto1.png',
    badge: '100% Orgánico',
    subtitle: 'Café gourmet de finca peruana cultivado a más de 1,600 msnm.',
    description: 'Nuestro Café Ecológico proviene de cultivos sostenibles de la selva central del Perú. Grano arábica de tueste medio balanceado, con notas aromáticas a chocolate artesanal y frutos secos. Libre de pesticidas y fertilizantes sintéticos.',
    features: [
      'Grano 100% Arábica de altura (1600+ msnm)',
      'Tueste artesanal medio balanceado',
      'Certificación ecológica de origen',
      'Baja acidez y digestión suave',
      'Empaque bilaminado con válvula bilateral de frescura'
    ],
    benefits: [
      'Estimula la energía y concentración de forma sostenida',
      'Rico en antioxidantes naturales (ácido clorogénico)',
      'Favorece la salud cardiovascular y digestiva',
      'Libre de residuos químicos e industriales'
    ],
    usage: 'Preparar en cafetera gota a gota, prensa francesa o moka italiana. Se recomienda usar 10g a 12g de café por cada 180ml de agua filtrada a 90°C.',
    specs: {
      'Peso Neto': '250 gramos',
      'Origen': 'Selva Central, Perú',
      'Tueste': 'Medio Gourmet',
      'Presentación': 'Molidura Media / Grano'
    }
  },

  'chia-ecologica': {
    id: 'chia-ecologica',
    name: 'CHÍA ECOLÓGICA 400GR',
    category: 'Semillas & Superfoods',
    price: 'S/25.00',
    numericPrice: 25.00,
    image: 'images/colagen_producto3.png',
    badge: 'Superfood',
    subtitle: 'Semillas orgánicas seleccionadas de chía negra de máxima pureza.',
    description: 'Las semillas de Chía Ecológica son uno de los alimentos con mayor concentración de ácidos grasos Omega-3 vegetale y fibra soluble. Al hidratarse forman un mucílago ideal para enriquecer yogures, smoothies, bowls de avena o como espesante natural.',
    features: [
      'Semilla 100% limpia y libre de impurezas',
      'Alto contenido de Omega-3 vegetal (ALA)',
      'Excelente fuente de fibra soluble e insoluble',
      'Sin gluten por naturaleza',
      'Sin aditivos ni preservantes'
    ],
    benefits: [
      'Promueve el tránsito intestinal y la digestión saludable',
      'Aporta saciedad prolongada favoreciendo el control de peso',
      'Ayuda a regular los niveles de colesterol y glucosa en sangre',
      'Fortalece huesos y articulaciones por su aporte de calcio y magnesio'
    ],
    usage: 'Agregar 1 o 2 cucharadas (15g) diarias en agua, jugos, yogur o ensaladas. Dejar reposar 10-15 minutos si se busca gel de chía.',
    specs: {
      'Peso Neto': '400 gramos',
      'Origen': 'Andes Peruanos',
      'Propiedades': 'Rica en Omega 3 y Fibra',
      'Almacenamiento': 'Lugar fresco y seco'
    }
  },

  'choco-pasas': {
    id: 'choco-pasas',
    name: 'CHOCO PASAS SIN AZÚCAR',
    category: 'Snacks Saludables',
    price: 'S/14.00',
    numericPrice: 14.00,
    image: 'images/colagen_producto4.png',
    badge: 'Sin Azúcar',
    subtitle: 'Pasas rubias seleccionadas cubiertas de chocolate negro 70% cacao puro.',
    description: 'Un delicioso snack crujiente y dulce sin culpas. Pasas de uva dulces bañadas en fina cobertura de cacao peruano al 70% edulcorado con stevia natural. El equilibrio perfecto entre energía, sabor y nutrición limpia.',
    features: [
      '70% Cacao fino de aroma de origen peruano',
      'Endulzado exclusivamente con Stevia natural',
      'Sin azúcar añadida ni jarabes fructosados',
      'Libre de grasas trans e hidrogenadas',
      'Empaque práctico listo para consumir'
    ],
    benefits: [
      'Aporta energía limpia para media mañana o media tarde',
      'Fuente natural de hierro, potasio y antioxidantes',
      'Apto para personas con estilo de vida saludable o control de azúcar',
      'Satisface el antojo dulce de forma natural'
    ],
    usage: 'Consumir como snack durante el día, como topping para bowls, o como acompañante en loncheras escolares y de trabajo.',
    specs: {
      'Peso Neto': '150 gramos',
      'Cacao': '70% Puro',
      'Edulcorante': 'Stevia Natural',
      'Gluten Free': 'Sí'
    }
  },

  'avena-integral': {
    id: 'avena-integral',
    name: 'AVENA 100% INTEGRAL 1KG',
    category: 'Cereales & Alacena',
    price: 'S/15.00',
    numericPrice: 15.00,
    image: 'images/colagen_producto1.png',
    badge: '100% Integral',
    subtitle: 'Hojuelas de avena silvestre integral laminadas en frío.',
    description: 'Nuestra Avena Integral mantiene intactas todas las partes del grano (salvado, germen y endospermo). Es una fuente insuperable de Betaglucanos, carbohidratos de absorción lenta que brindan energía constante durante toda la mañana.',
    features: [
      'Grano entero sin refinamientos ni blanqueadores',
      'Hojuela gruesa de gran textura y sabor suave',
      'Rica en betaglucanos y fibra dietética',
      'Sin azúcares ni aromatizantes artificiales',
      'Formato rinde más (1 Kg entero)'
    ],
    benefits: [
      'Reduce activamente el colesterol LDL en sangre',
      'Brinda energía sostenible sin picos de glucosa',
      'Mejora la digestión y combate el estreñimiento',
      'Ideal para desayunos, repostería y pancakes saludables'
    ],
    usage: 'Cocinar 4 cucharadas en agua o leche durante 5 minutos a fuego medio, o consumir directamente hidratada overnight con frutas y semillas.',
    specs: {
      'Peso Neto': '1000 gramos (1 Kg)',
      'Ingredientes': '100% Avena Integral en hojuelas',
      'Origen': 'Cultivo seleccionado',
      'Conservación': 'Envase hermético'
    }
  },

  'cacao-organico': {
    id: 'cacao-organico',
    name: 'CACAO ORGÁNICO SIN AZÚCAR 200GR',
    category: 'Superfoods & Repostería',
    price: 'S/22.00',
    numericPrice: 22.00,
    image: 'images/citrato_magnesio2.png',
    badge: '100% Cacao Puro',
    subtitle: 'Polvo de cacao puro desgrasado de aroma nativo amazónico.',
    description: 'Cacao en polvo de la Amazonía peruana prensado en frío para preservar su alta densidad de flavanoles, magnesio y teobromina. Sin adición de azúcares, lácteos ni químicos saborizantes.',
    features: [
      'Cacao puro nativo desgrasado',
      'No alcalinizado (mantiene antioxidantes naturales)',
      'Intenso aroma y color chocolate natural',
      'Sin azúcar añadida ni conservantes',
      'Apto para dietas Keto, Veganas y Paleo'
    ],
    benefits: [
      'Estimula la producción de endorfinas y serotonina (mejora el ánimo)',
      'Potente antioxidante para la salud celular y de la piel',
      'Gran aporte natural de magnesio, hierro y zinc',
      'Ideal para avenas, batidos, postres y bebidas calientes'
    ],
    usage: 'Mezclar 1 cucharada sopera en leche vegetal, batidos proteicos o recetas de reposteria saludable.',
    specs: {
      'Peso Neto': '200 gramos',
      'Cacao': '100% Puro Nativo',
      'Certificación': 'Orgánico',
      'Azúcar': '0%'
    }
  },

  'cloruro-de-magnesio': {
    id: 'cloruro-de-magnesio',
    name: 'CLORURO DE MAGNESIO',
    category: 'Minerales & Salud',
    price: 'S/35.00',
    numericPrice: 35.00,
    image: 'images/cloruro_magnesio1.png',
    badge: 'Salud Articular',
    subtitle: 'Cristales de cloruro de magnesio farmacéutico de alta asimilación.',
    description: 'El Cloruro de Magnesio es un compuesto mineral indispensable para más de 300 reacciones bioquímicas en el cuerpo humano. Ayuda a equilibrar el sistema nervioso, prevenir calambres musculares y fijar adecuadamente el calcio en los huesos.',
    features: [
      'Cristales solubles de alta pureza',
      'Grado USP / Alimentario certificado',
      'Rápida absorción y biodisponibilidad',
      'Sin aditivos ni aglomerantes',
      'Rinde para más de 1 mes de uso regular'
    ],
    benefits: [
      'Alivia dolores articulares y rigidez muscular',
      'Previene calambres nocturnos y contracturas',
      'Favorece la fijación de calcio reduciendo la descalcificación',
      'Combate el cansancio físico y mental'
    ],
    usage: 'Disolver 33g (aprox 1 cucharada colmada) en 1 litro de agua hervida fría. Tomar de 1 a 2 copitas (30ml) al día preferentemente por la mañana o noche.',
    specs: {
      'Contenido': '330 gramos',
      'Pureza': '99.5% Cristalizado',
      'Dosis diaria': '30 ml de solución disuelta',
      'Uso': 'Suplemento nutricional'
    }
  },

  'citrato-de-magnesio': {
    id: 'citrato-de-magnesio',
    name: 'CITRATO DE MAGNESIO',
    category: 'Minerales & Salud',
    price: 'S/45.00',
    numericPrice: 45.00,
    image: 'images/citrato_magnesio.png',
    badge: 'Alta Absorción',
    subtitle: 'Magnesio unido a ácido cítrico para máxima biodisponibilidad digestiva.',
    description: 'El Citrato de Magnesio es una de las formas minerales de mayor absorción y menor molestia estomacal. Ideal para personas que buscan mejorar la calidad del sueño, relajar el sistema nervioso y combatir la ansiedad o fatiga crónica.',
    features: [
      'Forma orgánica de citrato de alta biodisponibilidad',
      'Suave con el sistema digestivo',
      'Polvo fino 100% puro para fácil disolución',
      'Libre de saborizantes artificiales o azúcares',
      'Apto para consumo diario continuo'
    ],
    benefits: [
      'Promueve un sueño profundo y reparador',
      'Reduce los niveles de estrés, ansiedad y tensión muscular',
      'Regula el tránsito intestinal de manera suave',
      'Mejora el rendimiento muscular y recuperativo'
    ],
    usage: 'Disolver 1/2 a 1 cucharadita (2.5g a 5g) en un vaso de agua o jugo cítrico natural por las noches antes de dormir.',
    specs: {
      'Contenido': '250 gramos',
      'Formato': 'Polvo Soluble',
      'Absorción': 'Máxima (Citrato orgánico)',
      'Sin Alérgenos': 'Sí'
    }
  },

  'choco-almendras': {
    id: 'choco-almendras',
    name: 'CHOCO ALMENDRAS SIN AZÚCAR',
    category: 'Snacks Saludables',
    price: 'S/14.00',
    numericPrice: 14.00,
    image: 'images/colagen_plus.jpg',
    badge: 'Sin Azúcar',
    subtitle: 'Almendras tostadas crujientes bañadas en cacao 70% y stevia.',
    description: 'Exquisita combinación de almendras enteras cuidadosamente tostadas, recubiertas con nuestro fino cacao peruano al 70% sin azúcar. Aportan grasas saludables monoinsaturadas, proteína vegetal y vitamina E.',
    features: [
      'Almendras tostadas de primera calidad',
      'Cobertura 70% Cacao puro peruano',
      'Endulzado con Stevia natural',
      'Aporte de Proteína y Grasas Buenas',
      'Sin conservantes sintéticos'
    ],
    benefits: [
      'Excelente saciante natural para dietas de control de peso',
      'Protege la salud cardiovascular por su aporte de vitamina E',
      'Bajo en carbohidratos netos (Apto dieta Keto / Low Carb)',
      'Sabor artesanal superior'
    ],
    usage: 'Ideal para consumir entre comidas, como refrigerio post-entrenamiento o como acompañante nutritivo.',
    specs: {
      'Peso Neto': '120 gramos',
      'Fruto Seco': 'Almendra Entera Tostada',
      'Cacao': '70% Fino de Aroma',
      'Azúcar': '0g'
    }
  },

  'colageno-plus': {
    id: 'colageno-plus',
    name: 'COLÁGENO HIDROLIZADO PLUS 500GR',
    category: 'Colágeno & Estética',
    price: 'S/65.00',
    numericPrice: 65.00,
    image: 'images/colagen_plus.jpg',
    badge: 'Más Vendido',
    subtitle: 'Fórmula potenciada con Camu Camu, Magnesio, Zinc y Vitamina C.',
    description: 'Nuestro Colágeno Hidrolizado Plus contiene péptidos de colágeno italiano de bajo peso molecular (2,000 Daltons) para máxima asimilación celular. Enriquecido con Camu Camu nativo (fuente natural de Vitamina C), Magnesio y Zinc para regenerar piel, cabello, uñas y cartílagos.',
    features: [
      'Péptidos de Colágeno Hidrolizado de máxima solubilidad',
      'Enriquecido con Camu Camu 100% natural',
      'Contiene Magnesio, Zinc y Vitamina C para potenciar la síntesis',
      'Sin saborizantes químicos ni azúcares añadidos',
      'Disolución instantánea en líquidos fríos o tibios'
    ],
    benefits: [
      'Devuelve la firmeza, elasticidad e hidratación a la piel',
      'Reduce la caída del cabello y fortalece uñas quebradizas',
      'Protege y regenera los cartílagos desgastados en articulaciones',
      'Previene el envejecimiento prematuro gracias a su poder antioxidante'
    ],
    usage: 'Disolver 1 cucharada medidora (10g) en un vaso de agua, jugo natural o infusión preferentemente en ayunas o antes de dormir.',
    specs: {
      'Peso Neto': '500 gramos',
      'Rendimiento': '50 tomas (10g al día)',
      'Ingredientes': 'Colágeno Hidrolizado, Camu Camu, Magnesio, Zinc',
      'Sabor': 'Neutro / Ligero cítrico natural'
    }
  },

  'colageno-camu-camu': {
    id: 'colageno-camu-camu',
    name: 'COLÁGENO CON CAMU CAMU',
    category: 'Colágeno & Estética',
    price: 'S/55.00',
    numericPrice: 55.00,
    image: 'images/colagen_producto1.png',
    badge: 'Vitamina C Natural',
    subtitle: 'Péptidos bioactivos de colágeno combinados con superfoto amazónico Camu Camu.',
    description: 'La vitamina C es el cofactor biológico indispensable para la fijación del colágeno en los tejidos del cuerpo. Esta fórmula une la mayor fuente de vitamina C del planeta (Camu Camu amazónico) con péptidos puros de colágeno hidrolizado.',
    features: [
      '100% Colágeno de origen vacuno alimentado a pasto',
      'Harina de Camu Camu amazónico seleccionada',
      'Alta capacidad antioxidante (ORAC)',
      'Sin azúcares, maltodextrina ni colorantes',
      'Formatos prácticos de uso diario'
    ],
    benefits: [
      'Estimula la síntesis autóctona de colágeno en la dermis',
      'Refuerza el sistema inmunológico',
      'Aporta luminosidad y tono uniforme a la piel del rostro',
      'Protege los tendones y ligamentos'
    ],
    usage: 'Mezclar 1 cucharada (10g) en agua o jugo de frutas por las mañanas.',
    specs: {
      'Peso Neto': '350 gramos',
      'Origen': 'Perú / Italia',
      'Vitamina C': 'Natural de Camu Camu',
      'Conservantes': 'Sin conservantes'
    }
  },

  'colageno-magnesio-zinc': {
    id: 'colageno-magnesio-zinc',
    name: 'COLÁGENO CON MAGNESIO Y ZINC',
    category: 'Colágeno & Estética',
    price: 'S/60.00',
    numericPrice: 60.00,
    image: 'images/colagen_producto2.png',
    badge: 'Fórmula Articular',
    subtitle: 'Triple acción para huesos, músculos y articulaciones activas.',
    description: 'Fórmula especialmente desarrollada para personas deportistas, adultos mayores o personas con desgaste articular. Combina la estructura proteica del colágeno con el efecto relajante del magnesio y el efecto reparador celular del zinc.',
    features: [
      'Colágeno Hidrolizado + Citrato de Magnesio + Gluconato de Zinc',
      'Ideal para personas con actividad física intensa',
      'Previene lesiones musculares y desgaste articular',
      'Sin azúcar ni grasas',
      'Alta solubilidad en bebidas'
    ],
    benefits: [
      'Regenera cartílagos y tejido conectivo desgastado',
      'Disminuye la inflamación articular y el dolor',
      'Aumenta la densidad mineral en huesos',
      'Mejora la recuperación muscular post ejercicio'
    ],
    usage: 'Disolver 1 cucharada (10g) en un vaso de agua por las noches antes de descansar.',
    specs: {
      'Peso Neto': '400 gramos',
      'Magnesio': '200mg por porción',
      'Zinc': '10mg por porción',
      'Azúcar': '0g'
    }
  },

  'colageno-naranja': {
    id: 'colageno-naranja',
    name: 'COLÁGENO PREMIUM SABOR NARANJA',
    category: 'Colágeno & Estética',
    price: 'S/58.00',
    numericPrice: 58.00,
    image: 'images/colagen_producto3.png',
    badge: 'Delicioso Sabor',
    subtitle: 'Sabor refrescante a naranja natural con stevia y sin calorías extras.',
    description: 'Disfruta de tomar tu colágeno diario con un agradable y refrescante sabor a Naranja natural endulzado con stevia. Toda la potencia del colágeno hidrolizado sin sabores residuales.',
    features: [
      'Saborizante natural a naranja peruana',
      'Endulzado con Stevia de hoja natural',
      'Disolución instantánea sin grumos',
      'Aporte completo de péptidos bioactivos de colágeno',
      'Sin calorías vacías'
    ],
    benefits: [
      'Facilidad de consumo diario por su delicioso sabor',
      'Piel más joven, elástica y radiante',
      'Fortalecimiento continuo de cabello y uñas',
      'Salud integral para articulaciones'
    ],
    usage: 'Disolver 1 cucharada en un vaso de agua fría (200ml) y disfrutar como refresco natural.',
    specs: {
      'Peso Neto': '400 gramos',
      'Sabor': 'Naranja Natural',
      'Edulcorante': 'Stevia',
      'Calorías': '< 35 kcal por porción'
    }
  },

  'pack-colageno-plus': {
    id: 'pack-colageno-plus',
    name: 'PACK X3 COLÁGENO PLUS FAMILIAR',
    category: 'Packs & Promociones',
    price: 'S/160.00',
    numericPrice: 160.00,
    image: 'images/colagen_producto4.png',
    badge: 'Ahorro Especial',
    subtitle: 'Pack de 3 frascos de Colágeno Hidrolizado Plus 500gr con descuento exclusivo.',
    description: 'Aprovecha nuestra súper oferta familiar. Incluye 3 frascos de Colágeno Hidrolizado Plus de 500gr cada uno. Ideal para garantizar un tratamiento continuo de 5 meses para 1 persona o para compartir en familia al mejor precio por gramo.',
    features: [
      'Incluye 3 unidades de Colágeno Plus 500gr',
      'Ahorro directo de S/35.00 en comparación a compras individuales',
      'Envío prioritario coordinado vía WhatsApp',
      'Tratamiento continuo para 5 meses',
      'Calidad premium 100% garantizada'
    ],
    benefits: [
      'Garantiza la continuidad del tratamiento para resultados óptimos',
      'Ideal para el consumo de toda la familia',
      'Mejor relación precio / valor en el mercado peruano',
      'Protección integral para piel, cabello, uñas y articulaciones'
    ],
    usage: 'Consumir 1 cucharada (10g) diaria disuelta en agua por cada integrante de la familia.',
    specs: {
      'Contenido del Pack': '3 x Colágeno Plus 500g (Total 1.5 Kg)',
      'Garantía': 'Sellado de seguridad original',
      'Ahorro': 'S/35.00 de descuento incluido',
      'Envío': 'Despacho directo'
    }
  },

  'colageno-capsulas': {
    id: 'colageno-capsulas',
    name: 'COLÁGENO EN CÁPSULAS 100 UNID',
    category: 'Colágeno & Estética',
    price: 'S/45.00',
    numericPrice: 45.00,
    image: 'images/colagen_uno.jpg',
    badge: 'Práctico & Portátil',
    subtitle: 'Cápsulas vegetales de colágeno concentrado con vitamina C para viajes y trabajo.',
    description: 'La forma más práctica de tomar tu suplemento de colágeno estés donde estés. Cápsulas vegetales blandas de fácil digestión y rápida absorción sin necesidad de mezclar con líquidos.',
    features: [
      '100 Cápsulas vegetales de 500mg',
      'Fácil transporte para viajes o la oficina',
      'Absorción rápida y sin sabor',
      'Enriquecido con Vitamina C pura',
      'Libre de gluten y conservantes'
    ],
    benefits: [
      'Facilita la constancia del hábito diario',
      'Promueve la salud cutánea y articular',
      'Ideal para personas con poco tiempo para preparar bebidas',
      'Cápsulas vegetales de fácil digestibilidad'
    ],
    usage: 'Tomar 2 cápsulas por la mañana y 2 cápsulas por la noche con un vaso de agua.',
    specs: {
      'Contenido': '100 Cápsulas Vegetales',
      'Dosis': '4 cápsulas diarias',
      'Ingredientes': 'Colágeno Hidrolizado, Vitamina C',
      'Presentación': 'Frasco HDPE sellado'
    }
  },

  'choco-arandanos': {
    id: 'choco-arandanos',
    name: 'CHOCO ARÁNDANOS SIN AZÚCAR',
    category: 'Snacks Saludables',
    price: 'S/14.00',
    numericPrice: 14.00,
    image: 'images/colagen_producto2.png',
    badge: 'Sin Azúcar',
    subtitle: 'Arándanos deshidratados bañados en fino chocolate 70% cacao y stevia.',
    description: 'La combinación perfecta de dos superalimentos ricos en antioxidantes: arándanos peruanos seleccionados y cacao puro al 70%. Sin azúcar añadida.',
    features: [
      'Arándanos deshidratados naturales',
      'Cobertura 70% Cacao peruano',
      'Endulzado con Stevia natural',
      'Doble poder antioxidante',
      'Sin grasa de palma'
    ],
    benefits: [
      'Protege la salud de las vías urinarias y visión',
      'Potente acción antienvejecimiento celular',
      'Snack dulce saludable para niños y adultos',
      'Bajo en calorías'
    ],
    usage: 'Consumir directo del empaque como snack en cualquier momento del día.',
    specs: {
      'Peso Neto': '120 gramos',
      'Fruta': 'Arándano Peruano',
      'Cacao': '70%',
      'Azúcar': '0g'
    }
  },

  'choco-mani': {
    id: 'choco-mani',
    name: 'CHOCO MANÍ SIN AZÚCAR',
    category: 'Snacks Saludables',
    price: 'S/14.00',
    numericPrice: 14.00,
    image: 'images/colagen_producto3.png',
    badge: 'Proteína Natural',
    subtitle: 'Maní crocante tostado cubierto en chocolate negro 70% cacao y stevia.',
    description: 'El clásico y favorito snack de maní crujiente, ahora en versión 100% saludable sin azúcar añadida, cubierto de auténtico cacao bitter peruano.',
    features: [
      'Maní tostado sin sal añadida',
      'Cacao 70% Fino de aroma',
      'Endulzado con Stevia',
      'Alto contenido de proteína y energía',
      'Sin conservantes'
    ],
    benefits: [
      'Saciante y energético para jornadas de estudio o deporte',
      'Aporta grasas buenas y fibra dietética',
      'Sin picos de glucosa en sangre',
      'Sabor delicioso y crocante'
    ],
    usage: 'Disfrutar como snack energético a cualquier hora del día.',
    specs: {
      'Peso Neto': '130 gramos',
      'Base': 'Maní Seleccionado Tostado',
      'Cobertura': 'Chocolatería 70% Cacao',
      'Azúcar': '0g'
    }
  },

  'bolsa-colageno-manzana': {
    id: 'bolsa-colageno-manzana',
    name: 'BOLSA DE COLÁGENO SABOR MANZANA 500GR',
    category: 'Colágeno & Salud',
    price: 'S/55.00',
    numericPrice: 55.00,
    image: 'images/bolsa_colageno_manzana.jpg',
    badge: 'Formato Económico',
    subtitle: 'Colágeno hidrolizado puro en bolsa doypack con delicioso sabor a manzana verde.',
    description: 'Nuestra presentación en bolsa doypack resellable de 500 gramos te ofrece la máxima frescura y economía. Colágeno hidrolizado bioasimilable enriquecido con vitamina C y camu camu con un refrescante sabor a manzana natural.',
    features: [
      'Empaque doypack hermético con cierre zipper de máxima conservación',
      'Péptidos bioactivos de colágeno de alta absorción',
      'Sabor natural a manzana verde fresca',
      'Enriquecido con Vitamina C y antioxidantes',
      '0% Azúcar añadida y libre de gluten'
    ],
    benefits: [
      'Regenera y da firmeza a la piel, previniendo líneas de expresión',
      'Fortalece cartílagos, tendones y articulaciones',
      'Nutrición intensiva para cabello y uñas quebradizas',
      'Formato rendidor y fácil de transportar'
    ],
    usage: 'Disolver 1 cucharada dosificadora (10g) en un vaso con agua o jugo natural de tu preferencia una vez al día.',
    specs: {
      'Peso Neto': '500 gramos',
      'Presentación': 'Bolsa Doypack Resellable',
      'Sabor': 'Manzana Verde',
      'Porciones': '50 servicios aprox.'
    }
  },

  'caja-colageno-manzana': {
    id: 'caja-colageno-manzana',
    name: 'CAJA DE COLÁGENO SABOR MANZANA (30 SACHETS)',
    category: 'Colágeno & Salud',
    price: 'S/65.00',
    numericPrice: 65.00,
    image: 'images/caja_colageno_manzana.jpg',
    badge: 'Práctico en Sachets',
    subtitle: 'Caja con 30 sobres individuales listos para llevar a la oficina o gimnasio.',
    description: 'La máxima comodidad para tu dosis diaria de colágeno. Cada caja contiene 30 sobres individuales herméticamente sellados con la porción exacta de colágeno hidrolizado sabor manzana para llevar a donde vayas.',
    features: [
      '30 sobres individuales de 10g cada uno',
      'Fácil dosificación exacta sin necesidad de medir',
      'Disolución instantánea en agua fría o tibia',
      'Sabor manzana natural endulzado con stevia',
      'Ideal para llevar en bolso, cartera o mochila'
    ],
    benefits: [
      'Garantiza tu consumo diario sin interrupciones',
      'Mejora la elasticidad e hidratación dérmica',
      'Favorece la regeneración articular y muscular',
      'Higiene y frescura individual en cada toma'
    ],
    usage: 'Verter el contenido de 1 sachet (10g) en 200ml de agua, agitar y beber inmediatamente.',
    specs: {
      'Contenido': '30 sobres x 10g (300g total)',
      'Presentación': 'Caja dispensadora',
      'Sabor': 'Manzana',
      'Calorías por sachet': '< 35 kcal'
    }
  },

  'colageno-fresa': {
    id: 'colageno-fresa',
    name: 'COLÁGENO HIDROLIZADO SABOR FRESA 500GR',
    category: 'Colágeno & Salud',
    price: 'S/50.00',
    numericPrice: 50.00,
    image: 'images/colageno_fresa.jpg',
    badge: 'Favorito',
    subtitle: 'Pura nutrición celular con irresistible aroma y sabor a fresas naturales.',
    description: 'Elaborado con colágeno hidrolizado de máxima pureza y saborizado naturalmente con extracto de fresas. Una experiencia dulce y refrescante sin azúcar agregada que cuidará tu juventud y articulaciones.',
    features: [
      'Extracto natural de fresas silvestres',
      'Péptidos de colágeno tipo I y III',
      'Libre de maltodextrina y edulcorantes artificiales',
      'Excelente solubilidad en agua y batidos',
      'Aporte de vitamina C natural'
    ],
    benefits: [
      'Estimula la síntesis natural de colágeno en el organismo',
      'Disminuye dolores articulares y rigidez matutina',
      'Otorga luminosidad y firmeza al rostro',
      'Cabello más fuerte y resistente a la caída'
    ],
    usage: 'Disolver 1 cucharada colmada (10g) en 200ml de agua fría o smoothie.',
    specs: {
      'Peso Neto': '500 gramos',
      'Sabor': 'Fresa Natural',
      'Azúcar': '0 gramos',
      'Envase': 'Pote con precinto hermético'
    }
  },

  'colageno-manzana': {
    id: 'colageno-manzana',
    name: 'COLÁGENO HIDROLIZADO SABOR MANZANA 500GR',
    category: 'Colágeno & Salud',
    price: 'S/50.00',
    numericPrice: 50.00,
    image: 'images/colageno_manzana.jpg',
    badge: '100% Natural',
    subtitle: 'El clásico sabor a manzana con la mayor concentración de colágeno bioactivo.',
    description: 'Fórmula avanzada de colágeno hidrolizado sabor manzana. Diseñado para regenerar cartílagos, fortalecer huesos y revitalizar la piel de forma natural y deliciosa.',
    features: [
      'Sabor natural a manzana dulce balanceada',
      'Alta concentración de aminoácidos esenciales',
      'Sin colorantes artificiales',
      'Endulzado con extracto de Stevia',
      'Fácil digestión y rápida absorción'
    ],
    benefits: [
      'Aumenta la densidad y resistencia ósea',
      'Hidrata y rejuvenece las capas profundas de la piel',
      'Previene el desgaste de cartílagos en personas activas',
      'Fortalece las uñas desde la raíz'
    ],
    usage: 'Tomar 1 medida (10g) diariamente en el desayuno o antes de dormir.',
    specs: {
      'Peso Neto': '500 gramos',
      'Sabor': 'Manzana',
      'Registro': 'Nutrición Natural',
      'Gluten Free': 'Sí'
    }
  },

  'colageno-mora': {
    id: 'colageno-mora',
    name: 'COLÁGENO HIDROLIZADO SABOR MORA 500GR',
    category: 'Colágeno & Salud',
    price: 'S/50.00',
    numericPrice: 50.00,
    image: 'images/colageno_mora.jpg',
    badge: 'Antioxidante',
    subtitle: 'Poder antioxidante de frutos rojos con colágeno hidrolizado de alta pureza.',
    description: 'Combina los beneficios anti-edad del colágeno con el poder antioxidante de las moras andinas. Ayuda a combatir el estrés oxidativo mientras regenera tejidos conectivos.',
    features: [
      'Aroma y sabor auténtico a mora silvestre',
      'Rico en polifenoles y antioxidantes protectores',
      'Péptidos bioactivos de absorción superior',
      'Cero grasas y cero azúcares añadidos',
      'No altera los niveles de glucosa'
    ],
    benefits: [
      'Protege las células contra el envejecimiento prematuro',
      'Devuelve el brillo y vitalidad a la piel opaca',
      'Mejora la flexibilidad y movilidad en articulaciones',
      'Nutre las fibras capilares finas'
    ],
    usage: 'Disolver 1 cucharada (10g) en agua o yogur descremado.',
    specs: {
      'Peso Neto': '500 gramos',
      'Sabor': 'Mora Silvestre',
      'Antioxidantes': 'Extracto natural de bayas',
      'Porciones': '50 tomas'
    }
  },

  'colageno-pera': {
    id: 'colageno-pera',
    name: 'COLÁGENO HIDROLIZADO SABOR PERA 500GR',
    category: 'Colágeno & Salud',
    price: 'S/50.00',
    numericPrice: 50.00,
    image: 'images/colageno_pera.jpg',
    badge: 'Suave y Digestivo',
    subtitle: 'Suave y refrescante sabor a pera ideal para consumir en cualquier momento.',
    description: 'Una opción suave, ligera y sumamente digestiva. El colágeno hidrolizado sabor pera te brinda todos los aminoácidos para el cuidado articular y estético con un sabor sutil.',
    features: [
      'Sabor suave a pera de agua natural',
      'Digestión ultraligera, no cae pesado',
      'Sin edulcorantes químicos agresivos',
      'Pureza garantizada bajo estándares de calidad',
      'Disolución completa en segundos'
    ],
    benefits: [
      'Fácil incorporación a la rutina diaria',
      'Fortalece ligamentos y alivia la pesadez articular',
      'Otorga firmeza y suavidad a la piel de todo el cuerpo',
      'Ideal para personas con digestión sensible'
    ],
    usage: 'Mezclar 1 medida (10g) en 200ml de agua a temperatura ambiente.',
    specs: {
      'Peso Neto': '500 gramos',
      'Sabor': 'Pera',
      'Digestibilidad': 'Excelente',
      'Azúcar': '0g'
    }
  },

  'unidad-colageno-manzana': {
    id: 'unidad-colageno-manzana',
    name: 'UNIDAD DE COLÁGENO SABOR MANZANA (SACHET)',
    category: 'Colágeno & Salud',
    price: 'S/5.00',
    numericPrice: 5.00,
    image: 'images/unidad_colageno_manzana.jpg',
    badge: 'Muestra / Individual',
    subtitle: 'Sachet individual de 10g para probar o llevar de viaje.',
    description: '¿Quieres probar nuestro colágeno o necesitas llevar tu dosis exacta de viaje? Nuestro sachet individual de colágeno sabor manzana es la opción ideal.',
    features: [
      'Porción exacta de 10 gramos lista para usar',
      'Empaque trilaminado que protege los nutrientes',
      'Disolución instantánea en cualquier vaso de agua',
      'Precio accesible para degustación',
      'Sabor manzana 100% natural'
    ],
    benefits: [
      'Permite probar la calidad y el sabor antes de adquirir el formato grande',
      'Ultra práctico para viajes, trabajo o deporte',
      'Aporte completo de nutrientes en una sola toma'
    ],
    usage: 'Disolver todo el contenido del sobre en 1 vaso con agua (200ml) y consumir.',
    specs: {
      'Peso Neto': '10 gramos',
      'Presentación': 'Sachet monodosis',
      'Sabor': 'Manzana',
      'Uso': '1 servicio'
    }
  }
};

/**
 * Obtener un producto por su ID
 */
function getProductById(productId) {
  if (!productId) return null;
  const cleanId = String(productId).trim().toLowerCase();
  return PRODUCTS_DATA[cleanId] || null;
}

/**
 * Obtener lista de productos por categoría
 */
function getProductsByCategory(categoryName) {
  if (!categoryName) return Object.values(PRODUCTS_DATA);
  return Object.values(PRODUCTS_DATA).filter(p => 
    p.category.toLowerCase().includes(categoryName.toLowerCase())
  );
}
