# AI7 Life - Aplicación de Metas de Hidratación

Aplicación móvil desarrollada con React Native, Expo y NativeWind para la gestión de metas personales, enfocada inicialmente en el seguimiento de hidratación diaria.

## Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil multiplataforma
- **Expo** - Plataforma para desarrollo y despliegue de aplicaciones React Native
- **Expo Router** - Sistema de navegación basado en archivos
- **NativeWind** - Tailwind CSS para React Native
- **TypeScript** - Superset tipado de JavaScript
- **expo-linear-gradient** - Componente para gradientes lineales

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Expo Go (aplicación móvil para pruebas) o un emulador Android/iOS

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/JOHN2713/ai7-life-pantalla.git
cd ai7-life-pantalla
```

2. Instalar las dependencias:
```bash
npm install
```

## Ejecución del Proyecto

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Esto abrirá Expo DevTools en tu navegador. Desde ahí puedes:

- Escanear el código QR con la aplicación Expo Go (Android/iOS)
- Presionar `a` para abrir en emulador Android
- Presionar `i` para abrir en simulador iOS
- Presionar `w` para abrir en navegador web

### Otros comandos disponibles

```bash
npm run android    # Ejecutar en Android
npm run ios        # Ejecutar en iOS
npm run web        # Ejecutar en navegador web
npm run lint       # Verificar código con ESLint
npm run format     # Formatear código con Prettier
```

## Estructura del Proyecto

```
nativewind/
├── app/                                    # Directorio de rutas (Expo Router)
│   ├── _layout.tsx                        # Layout principal
│   ├── index.tsx                          # Pantalla de inicio
│   ├── details.tsx                        # Pantalla de detalles
│   └── crear-meta-hidratacion.tsx         # Pantalla de creación de meta de hidratación
├── assets/                                 # Recursos estáticos (imágenes, fuentes)
├── components/                             # Componentes reutilizables
│   ├── Button.tsx                         # Componente de botón
│   ├── Container.tsx                      # Contenedor con SafeAreaView
│   ├── EditScreenInfo.tsx                 # Componente informativo
│   └── ScreenContent.tsx                  # Contenido de pantalla
├── global.css                             # Estilos globales de NativeWind
├── tailwind.config.js                     # Configuración de Tailwind CSS
├── tsconfig.json                          # Configuración de TypeScript
├── package.json                           # Dependencias del proyecto
└── README.md                              # Documentación del proyecto
```

## Funcionalidades Implementadas

### Pantalla de Crear Meta de Hidratación

Ubicada en `app/crear-meta-hidratacion.tsx`, esta pantalla permite:

- Definir un nombre personalizado para el reto de hidratación
- Establecer una meta diaria de vasos de agua (con control deslizante visual)
- Seleccionar la duración del reto (3, 7, 14, 21 o 30 días)
- Visualizar un resumen de la meta en una tarjeta con gradiente

La interfaz incluye:
- Header personalizado con indicadores de progreso
- Formulario interactivo con inputs y selectores
- Diseño responsive adaptado a diferentes tamaños de pantalla
- Estilos organizados usando NativeWind (Tailwind CSS)

## Estilos con NativeWind

El proyecto utiliza NativeWind para aplicar estilos mediante clases de Tailwind CSS. Los estilos se definen en objetos al final de cada componente:

```typescript
const styles = {
  container: 'flex-1 bg-white',
  button: 'bg-[#00AC83] rounded-full py-4',
  // ...
}
```

Esto permite mantener la consistencia visual y facilitar el mantenimiento del código.

## Navegación

El proyecto utiliza Expo Router, que implementa navegación basada en el sistema de archivos:

- `/` - Pantalla principal (index.tsx)
- `/details` - Pantalla de detalles
- `/crear-meta-hidratacion` - Pantalla de creación de meta

## Configuración de Desarrollo

### ESLint y Prettier

El proyecto incluye configuración de ESLint y Prettier para mantener la calidad del código:

```bash
npm run lint      # Verificar errores de código
npm run format    # Formatear automáticamente el código
```

### TypeScript

El proyecto está completamente tipado con TypeScript. La configuración se encuentra en `tsconfig.json`.

## Contribución

1. Crear una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realizar los cambios y hacer commit: `git commit -m "feat: descripción del cambio"`
3. Subir los cambios: `git push origin feature/nueva-funcionalidad`
4. Crear un Pull Request

## Licencia

Proyecto privado - AI7 Life

## Contacto

Para consultas o soporte, contactar al equipo de desarrollo.
