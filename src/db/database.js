export default class Producto {
  constructor() {}

  static listarProductos() {
    return [
      {
        idProducto: 1,
        category: "computadoras",
        title: "Laptop ASUS ZenBook",
        description:
          "Una potente laptop con procesador Intel Core i7, 16 GB de RAM y SSD de 512 GB.",
        details:
          "Pantalla: 14 pulgadas FHD, Procesador: Intel Core i7, RAM: 16 GB, Almacenamiento: SSD 512 GB",
        price: 1000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 2,
        category: "celulares",
        title: "Smartphone Samsung Galaxy S21",
        description:
          "El último modelo de Samsung con pantalla AMOLED de 6.2 pulgadas, cámara triple y 128 GB de almacenamiento.",
        details:
          "Pantalla: 6.2 pulgadas AMOLED, Cámara: Triple 12MP+12MP+64MP, Almacenamiento: 128 GB",
        price: 2000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 3,
        category: "celulares",
        title: "Tableta Apple iPad Pro",
        description:
          "Una tableta potente con pantalla Retina de 12.9 pulgadas, chip M1 y capacidad de 256 GB.",
        details:
          "Pantalla: 12.9 pulgadas Retina, Procesador: Chip M1, Almacenamiento: 256 GB",
        price: 3000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 4,
        category: "computdora",
        title: "Monitor Gaming Acer Predator",
        description:
          "Un monitor de alta frecuencia de actualización, resolución 4K y tecnología G-Sync para una experiencia de juego inmersiva.",
        details:
          "Resolución: 4K, Frecuencia de actualización: 144Hz, Tecnología: G-Sync",
        price: 4000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 5,
        category: "otros",
        title: "Cámara Sony Alpha A7III",
        description:
          "Una cámara mirrorless con sensor full-frame de 24.2 megapíxeles, grabación de video 4K y estabilización de imagen.",
        details:
          "Sensor: Full-frame 24.2 MP, Grabación de video: 4K, Estabilización de imagen: Sí",
        price: 5000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 6,
        category: "accesorios",
        title: "Auriculares Inalámbricos Bose QuietComfort 35 II",
        description:
          "Auriculares con cancelación de ruido, conexión Bluetooth y hasta 20 horas de autonomía.",
        details:
          "Cancelación de ruido: Sí, Conexión: Bluetooth, Autonomía de batería: Hasta 20 horas",
        price: 6000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 7,
        category: "accesorios",
        title: "Teclado mecánico Corsair K95 RGB Platinum XT",
        description:
          "Un teclado mecánico premium con retroiluminación RGB, interruptores Cherry MX y teclas programables.",
        details:
          "Tipo de interruptor: Cherry MX, Retroiluminación: RGB, Teclas programables: Sí",
        price: 7000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 8,
        category: "otros",
        title: "Impresora 3D Creality Ender 3",
        description:
          "Impresora 3D de nivel de entrada con volumen de construcción grande y fácil montaje.",
        details:
          "Volumen de construcción: Grande, Nivel de entrada: Sí, Montaje: Fácil",
        price: 8000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 9,
        category: "accesorios",
        title: "Altavoces Sonos Play:5",
        description:
          "Altavoces inalámbricos de alta fidelidad con tecnología Trueplay para un sonido excepcional.",
        details:
          "Tecnología: Trueplay, Sonido: Alta fidelidad, Conexión: Inalámbrica",
        price: 9000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 10,
        category: "otros",
        title: "Router Mesh TP-Link Deco X60",
        description:
          "Un sistema de red mesh para toda la casa con tecnología WiFi 6 para una conexión rápida y estable.",
        details:
          "Tecnología: WiFi 6, Cobertura: Toda la casa, Conexión: Rápida y estable",
        price: 10000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 11,
        category: "accesorios",
        title: "Mouse Logitech MX Master 3",
        description:
          "Un mouse inalámbrico avanzado con seguimiento de alta precisión y batería de larga duración.",
        details:
          "Seguimiento: Alta precisión, Conexión: Inalámbrica, Batería: Larga duración",
        price: 11000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 12,
        category: "tvs",
        title: "Smart TV LG OLED CX",
        description:
          "Televisor OLED 4K con Dolby Vision, sonido Dolby Atmos y capacidad de control por voz.",
        details: "Resolución: 4K OLED, Dolby Vision: Sí, Sonido: Dolby Atmos",
        price: 12000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 13,
        category: "otros",
        title: "Robot Aspirador iRobot Roomba i7+",
        description:
          "Un robot aspirador inteligente con navegación vSLAM, limpieza personalizada y capacidad de vaciado automático.",
        details:
          "Navegación: vSLAM, Limpieza: Personalizada, Vaciado automático: Sí",
        price: 13000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 14,
        category: "otros",
        title: "Reproductor de Streaming Roku Ultra",
        description:
          "Un reproductor de streaming 4K con soporte HDR, control remoto con botones de acceso directo y búsqueda por voz.",
        details:
          "Resolución: 4K, HDR: Sí, Control remoto: Botones de acceso directo, Búsqueda por voz: Sí",
        price: 14000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 15,
        category: "otros",
        title: "Batería Externa Anker PowerCore+",
        description:
          "Una batería externa de alta capacidad con carga rápida, compatible con dispositivos USB-C y USB-A.",
        details:
          "Capacidad: Alta, Carga rápida: Sí, Compatibilidad: USB-C y USB-A",
        price: 15000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 16,
        category: "computadoras",
        title: "Laptop Dell XPS 15",
        description:
          "Una laptop potente con pantalla táctil 4K, procesador Intel Core i9 y tarjeta gráfica NVIDIA GeForce RTX 3080.",
        details:
          "Pantalla: 15.6 pulgadas 4K táctil, Procesador: Intel Core i9, Tarjeta gráfica: NVIDIA GeForce RTX 3080",
        price: 2500,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 17,
        category: "celulares",
        title: "Smartphone iPhone 13 Pro",
        description:
          "El último modelo de iPhone con pantalla Super Retina XDR, triple cámara y chip A15 Bionic para un rendimiento excepcional.",
        details: "Pantalla: Super Retina XDR, Cámara: Triple, Chip: A15 Bionic",
        price: 1800,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 18,
        category: "accesorios",
        title: "Mouse gaming Razer DeathAdder V2",
        description:
          "Un mouse diseñado para gaming con sensor óptico de 20,000 DPI y switches ópticos Razer para una precisión extrema.",
        details: "Sensor: Óptico 20,000 DPI, Switches: Ópticos Razer",
        price: 100,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 19,
        category: "tvs",
        title: "Smart TV Sony Bravia XR A80J",
        description:
          "Televisor OLED 4K con tecnología Cognitive Processor XR, sonido Acoustic Surface Audio+ y Google TV integrado.",
        details:
          "Resolución: 4K OLED, Procesador: Cognitive Processor XR, Sonido: Acoustic Surface Audio+",
        price: 3000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 20,
        category: "accesorios",
        title: "Teclado inalámbrico Logitech MX Keys",
        description:
          "Un teclado inalámbrico avanzado con retroiluminación ajustable, sensor de proximidad y diseño ergonómico.",
        details:
          "Retroiluminación: Ajustable, Sensor: Proximidad, Diseño: Ergonómico",
        price: 150,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 21,
        category: "computadoras",
        title: "PC Gaming Alienware Aurora R12",
        description:
          "Una PC gaming de alta gama con procesador Intel Core i9 de 11ª generación, tarjeta gráfica NVIDIA GeForce RTX 3090 y refrigeración líquida.",
        details:
          "Procesador: Intel Core i9 de 11ª gen, Tarjeta gráfica: NVIDIA GeForce RTX 3090, Refrigeración: Líquida",
        price: 3500,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 22,
        category: "celulares",
        title: "Smartphone Google Pixel 6 Pro",
        description:
          "Un teléfono inteligente con pantalla OLED de 6.7 pulgadas, cámara triple con tecnología de Google Tensor y almacenamiento de 256 GB.",
        details:
          "Pantalla: 6.7 pulgadas OLED, Cámara: Triple con Google Tensor, Almacenamiento: 256 GB",
        price: 1200,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 23,
        category: "accesorios",
        title: "Silla Gaming Secretlab Titan",
        description:
          "Una silla gaming ergonómica con soporte lumbar ajustable, reposabrazos 4D y estructura de acero reforzado.",
        details:
          "Soporte lumbar: Ajustable, Reposabrazos: 4D, Estructura: Acero reforzado",
        price: 400,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 24,
        category: "tvs",
        title: "Smart TV Samsung Neo QLED QN90A",
        description:
          "Televisor QLED 4K con tecnología Quantum Matrix, sonido Object Tracking Sound+ y sistema operativo Tizen.",
        details:
          "Resolución: 4K QLED, Tecnología: Quantum Matrix, Sonido: Object Tracking Sound+",
        price: 2800,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 25,
        category: "accesorios",
        title: "Ratón ergonómico vertical Anker",
        description:
          "Un ratón ergonómico diseñado para reducir la fatiga de la muñeca y mejorar la comodidad durante largas sesiones de trabajo.",
        details: "Diseño: Ergonómico vertical, Reducción de fatiga: Muñeca",
        price: 50,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 26,
        category: "computadoras",
        title: "PC Todo en Uno HP Envy 32",
        description:
          "Una PC todo en uno con pantalla 4K de 32 pulgadas, procesador Intel Core i7 de 10ª generación y gráficos NVIDIA GeForce RTX 2060.",
        details:
          "Pantalla: 32 pulgadas 4K, Procesador: Intel Core i7 de 10ª gen, Gráficos: NVIDIA GeForce RTX 2060",
        price: 2800,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 27,
        category: "celulares",
        title: "Smartphone OnePlus 10 Pro",
        description:
          "Un teléfono inteligente con pantalla Fluid AMOLED de 6.7 pulgadas, cámara cuádruple Hasselblad y carga ultra rápida.",
        details:
          "Pantalla: 6.7 pulgadas Fluid AMOLED, Cámara: Cuádruple Hasselblad, Carga: Ultra rápida",
        price: 1500,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 28,
        category: "accesorios",
        title: "Mochila para portátil SwissGear 1900",
        description:
          "Una mochila resistente para portátil con compartimentos acolchados, sistema de ventilación Airflow y capacidad para laptops de hasta 17 pulgadas.",
        details:
          "Compartimentos: Acolchados, Sistema: Ventilación Airflow, Capacidad: Hasta 17 pulgadas",
        price: 80,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 29,
        category: "tvs",
        title: "Smart TV TCL 6-Series",
        description:
          "Televisor QLED 8K con Mini LED, Dolby Vision, sonido Dolby Atmos y Roku integrado para acceder a tus aplicaciones favoritas.",
        details:
          "Resolución: 8K QLED, Tecnología: Mini LED, Sonido: Dolby Atmos, Plataforma: Roku",
        price: 3200,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 30,
        category: "accesorios",
        title: "Hub USB-C Anker PowerExpand",
        description:
          "Un hub USB-C con 8 puertos, incluyendo HDMI, USB-A y lector de tarjetas SD, para una conectividad versátil con tu dispositivo USB-C.",
        details: "Puertos: 8, Incluye: HDMI, USB-A, Lector de tarjetas SD",
        price: 60,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 31,
        category: "computadoras",
        title: "Laptop Microsoft Surface Laptop 4",
        description:
          "Una elegante laptop con pantalla táctil PixelSense de 13.5 pulgadas, procesador Intel Core i5 y hasta 16 GB de RAM.",
        details:
          "Pantalla: 13.5 pulgadas PixelSense táctil, Procesador: Intel Core i5, RAM: Hasta 16 GB",
        price: 1800,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 32,
        category: "celulares",
        title: "Smartphone Xiaomi Mi 12",
        description:
          "Un teléfono insignia con pantalla AMOLED de 6.8 pulgadas, cámara triple con sensor principal de 108 MP y carga rápida de 120W.",
        details:
          "Pantalla: 6.8 pulgadas AMOLED, Cámara: Triple 108 MP, Carga rápida: 120W",
        price: 1400,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 33,
        category: "accesorios",
        title: "Bolso para cámara Peak Design Everyday Sling",
        description:
          "Un bolso versátil para cámara con divisores flexibles, acceso rápido y capacidad para una cámara DSLR y varios objetivos.",
        details:
          "Divisores: Flexibles, Acceso: Rápido, Capacidad: DSLR y objetivos",
        price: 120,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 34,
        category: "tvs",
        title: "Smart TV Sony A90J OLED",
        description:
          "Televisor OLED 4K con tecnología XR OLED Contrast Pro, sonido Acoustic Surface Audio+ y Google TV para disfrutar de tus contenidos favoritos.",
        details:
          "Resolución: 4K OLED, Tecnología: XR OLED Contrast Pro, Sonido: Acoustic Surface Audio+",
        price: 3500,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 35,
        category: "accesorios",
        title: "Estación de carga inalámbrica Anker PowerWave",
        description:
          "Una estación de carga inalámbrica con capacidad para cargar varios dispositivos simultáneamente y tecnología de carga rápida.",
        details: "Capacidad: Carga simultánea, Tecnología: Carga rápida",
        price: 70,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 36,
        category: "computadoras",
        title: "PC de Escritorio HP Pavilion",
        description:
          "Una PC de escritorio versátil con procesador Intel Core i5, 8 GB de RAM y disco duro de 1 TB para almacenamiento amplio.",
        details:
          "Procesador: Intel Core i5, RAM: 8 GB, Almacenamiento: 1 TB HDD",
        price: 1200,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 37,
        category: "celulares",
        title: "Smartphone Motorola Edge 30 Pro",
        description:
          "Un teléfono con pantalla OLED de 6.7 pulgadas, cámara cuádruple con sensor principal de 108 MP y carga rápida de 60W.",
        details:
          "Pantalla: 6.7 pulgadas OLED, Cámara: Cuádruple 108 MP, Carga rápida: 60W",
        price: 1000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 38,
        category: "accesorios",
        title: "Maletín para portátil Samsonite Classic",
        description:
          "Un maletín resistente para portátil con compartimentos acolchados y correa para hombro ajustable para mayor comodidad.",
        details: "Compartimentos: Acolchados, Correa: Ajustable",
        price: 50,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 39,
        category: "tvs",
        title: "Smart TV LG NanoCell 90 Series",
        description:
          "Televisor NanoCell 8K con tecnología NanoCell, sonido AI Sound Pro y plataforma webOS para acceder a tus aplicaciones favoritas.",
        details:
          "Resolución: 8K NanoCell, Tecnología: NanoCell, Sonido: AI Sound Pro",
        price: 4000,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 40,
        category: "accesorios",
        title: "Estuche para auriculares CASEMATIX",
        description:
          "Un estuche rígido para auriculares con interior de espuma acolchada para proteger tus auriculares de golpes y arañazos.",
        details: "Interior: Espuma acolchada, Tipo: Rígido",
        price: 20,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 41,
        category: "computadoras",
        title: "Mini PC Intel NUC",
        description:
          "Una mini PC potente con procesador Intel Core i7, 16 GB de RAM y SSD de 512 GB en un factor de forma compacto.",
        details:
          "Procesador: Intel Core i7, RAM: 16 GB, Almacenamiento: SSD 512 GB",
        price: 1500,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 42,
        category: "celulares",
        title: "Smartphone Oppo Find X5 Pro",
        description:
          "Un teléfono con pantalla OLED de 6.7 pulgadas, cámara triple desarrollada en colaboración con Hasselblad y carga rápida de 80W.",
        details:
          "Pantalla: 6.7 pulgadas OLED, Cámara: Triple Hasselblad, Carga rápida: 80W",
        price: 1600,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 43,
        category: "accesorios",
        title: "Mochila para portátil Targus Drifter II",
        description:
          "Una mochila resistente para portátil con compartimentos acolchados y funda para la lluvia para proteger tus dispositivos en cualquier clima.",
        details: "Compartimentos: Acolchados, Funda: Para la lluvia",
        price: 70,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 44,
        category: "tvs",
        title: "Smart TV Hisense U8G Quantum Series",
        description:
          "Televisor ULED 4K con tecnología Quantum Dot, sonido Dolby Atmos y sistema operativo Android TV para disfrutar de contenido multimedia.",
        details:
          "Resolución: 4K ULED, Tecnología: Quantum Dot, Sonido: Dolby Atmos",
        price: 2500,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 45,
        category: "accesorios",
        title: "Base de carga inalámbrica Belkin Boost Up",
        description:
          "Una base de carga inalámbrica con capacidad para cargar dos dispositivos simultáneamente y certificación Qi para una carga segura.",
        details: "Capacidad: Carga simultánea, Certificación: Qi",
        price: 40,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 46,
        category: "computadoras",
        title: "MacBook Air M1",
        description:
          "Una laptop ligera y potente con el chip M1 de Apple, pantalla Retina de 13.3 pulgadas y hasta 16 GB de RAM.",
        details:
          "Chip: Apple M1, Pantalla: 13.3 pulgadas Retina, RAM: Hasta 16 GB",
        price: 1800,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 47,
        category: "celulares",
        title: "Smartphone Vivo X70 Pro+",
        description:
          "Un teléfono con pantalla AMOLED de 6.78 pulgadas, cámara cuádruple con sensor principal de 50 MP y carga rápida de 55W.",
        details:
          "Pantalla: 6.78 pulgadas AMOLED, Cámara: Cuádruple 50 MP, Carga rápida: 55W",
        price: 1300,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 48,
        category: "accesorios",
        title: "Bolso para cámara Lowepro ProTactic BP 450 AW II",
        description:
          "Un bolso versátil para cámara con sistema ActivZone, compartimentos acolchados y cubierta All Weather para protección contra los elementos.",
        details:
          "Sistema: ActivZone, Compartimentos: Acolchados, Cubierta: All Weather",
        price: 150,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 49,
        category: "tvs",
        title: "Smart TV Philips 9000 Series",
        description:
          "Televisor LED 8K con tecnología Ambilight, sonido Dolby Atmos y sistema operativo Android para acceder a una amplia variedad de aplicaciones.",
        details:
          "Resolución: 8K LED, Tecnología: Ambilight, Sonido: Dolby Atmos",
        price: 3800,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
      {
        idProducto: 50,
        category: "accesorios",
        title: "Cargador portátil Anker PowerCore Fusion 10000",
        description:
          "Un cargador portátil 2 en 1 con capacidad de 10000 mAh, que también sirve como adaptador de pared con puertos USB y USB-C.",
        details: "Capacidad: 10000 mAh, Puertos: USB y USB-C",
        price: 60,
        stock: 10,
        pictureUrl: "https://via.placeholder.com/200",
      },
    ];
  }
}
