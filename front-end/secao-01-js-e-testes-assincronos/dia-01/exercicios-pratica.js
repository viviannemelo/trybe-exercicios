// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} está a ${value} ${measurementUnit} de distância do Sol`;

// const MEASUREMENT_UNIT = 'quilômetros';

// const mars = {
//   name: 'Marte',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: MEASUREMENT_UNIT,
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C
// //A, B e C.
// //A, C e B.

// //3)
// const getPlanet = () => {
//     const mars = {
//       name: 'Mars',
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: 'kilometers',
//       },
//     };
//     setTimeout(() => console.log('Returned planet: ', mars), 4000)
//   };
  
//   getPlanet(); // Imprime Marte depois de 4 segundos

//4)
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const sendMarsTemperature = () => {
//   const temperaturaAtual = getMarsTemperature();
//   setTimeout(() =>
//   console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`), messageDelay());
// }

// sendMarsTemperature();

//5 e 6
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

// const greet = (temperature) =>
//   console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// const error = (erro) => console.log(`Error getting temperature: ${erro}`);

// const sendMarsTemperature = (callback, errorMessage) => {
//   const currentTemp = getMarsTemperature();
//   setTimeout(() => {
//     if (callback(currentTemp), messageDelay());
//     else (errorMessage('Robot is busy'));
//   }, messageDelay());
// }

// // sendMarsTemperature(temperatureInFahrenheit);
// // sendMarsTemperature(greet);
// sendMarsTemperature(temperatureInFahrenheit, error);
// sendMarsTemperature(greet, error);

// 7)
// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// it('uppercase "test" to equal "TEST"', (done) => {
//   uppercase('test', (strUpperCase) => {
//     try {
//       expect(strUpperCase).toBe('TEST');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });