# Crediby

Crediby es una interfaz web interactiva para previsualizar y personalizar una tarjeta de crédito o débito. Permite introducir los datos de una tarjeta, detectar visualmente si pertenece a Visa o Mastercard, cambiar el tema de color y girar la tarjeta para consultar su reverso y el CVV.

> Proyecto frontend construido con React y Vite. No procesa pagos ni envía los datos introducidos a un servidor.

## Funcionalidades

- Previsualización en tiempo real de los datos de la tarjeta.
- Formateo automático del número de tarjeta en grupos de cuatro dígitos.
- Detección visual de tarjetas Visa y Mastercard según sus primeros dígitos.
- Validación del formato de la fecha de vencimiento y del CVV.
- Giro interactivo entre el frente y el reverso de la tarjeta.
- Selección entre cinco temas visuales: midnight, ocean, violet, emerald y sunset.
- Diseño adaptable para distintos tamaños de pantalla.

## Tecnologías

- React 19
- Vite
- JavaScript (ES Modules)
- CSS
- ESLint

## Requisitos previos

Antes de instalar el proyecto, asegúrate de tener instalado:

- Node.js 20 o superior
- npm, incluido con Node.js
- Git, si vas a clonar el repositorio

Puedes comprobar las versiones instaladas con:

```bash
node --version
npm --version
git --version
```

## Instalación local

1. Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/devmattiel20/Crediby.git
cd crediby
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre en el navegador la URL que muestre Vite, normalmente:

```text
http://localhost:5173
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con Vite. |
| `npm run build` | Genera la versión optimizada para producción en `dist/`. |
| `npm run preview` | Sirve localmente la build de producción. |
| `npm run lint` | Ejecuta ESLint para revisar el código. |

## Comprobar la build de producción

Para crear y revisar la versión de producción localmente:

```bash
npm run build
npm run preview
```

Después, abre la dirección que indique Vite en la terminal.

## Estructura principal

```text
src/
├── assets/                    # Recursos gráficos
├── components/
│   ├── CardForm/              # Formulario de datos de la tarjeta
│   ├── CreditCard/            # Frente, reverso y giro de la tarjeta
│   ├── ThemeSelector/         # Selector de temas visuales
│   ├── Footer.jsx
│   └── Header.jsx
├── App.jsx                    # Componente principal
├── App.css                    # Estilos de la aplicación
└── main.jsx                   # Punto de entrada de React
```

## Notas de privacidad

Crediby funciona como una demostración visual. Los datos introducidos se almacenan únicamente en el estado de la aplicación mientras la página está abierta. No introduzcas datos reales de tarjetas en entornos públicos o de demostración.

## Autor

**Matthew Bettin** - [@devmattiel20](https://github.com/devmattiel20)

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
