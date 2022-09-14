# **Instalar paquetes**
### Por consola ejecutar `yarn install`

# **Archivos de entorno**
## Crear archivo .env en la raiz del proyecto con la variable:
REACT_APP_API_ENDPOINT="https://api.openweathermap.org/data/2.5/"
REACT_APP_OPEN_WEATHER_API_KEY="API_KEY_GENERADO"

# Mejoras pendientes
- En el primer componente que muestra el clima actual, contra el lado derecho, mi primer intención fue poner las siguientes 3 o 4 temperas pero la api no lo permitia. Mi Segunda intención fue poner el mapa, que si lo permitía openWeather, pero no alcance a realizarlo.
- Mejorar imagenes
- Mejorar Tipado y nombres.
- Manejo del git:
  - Commits más chicos y mas especificos.
- Mejorar estilos.
- Resolver TODOs.
- Realizar test unitarios, de integración y e2e.

# Notas
- El doble renderizado es en modo desarrollo por el StrictMode
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
