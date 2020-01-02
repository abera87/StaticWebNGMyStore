// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tenant: '207fad3e-ddcc-4e76-ac3d-001fcae96b28',
  clientId: 'b8b7387f-1bf2-444c-b19b-333a00d701c6',
  extraQueryParameter: 'nux=1', // This is optional
  endpoints: {
    "http://localhost:4200/api": 'b8b7387f-1bf2-444c-b19b-333a00d701c6', // Note, this is an object, you could add several things here
    "https://staticwebapi.azurewebsites.net/WeatherForecast":"9f191287-dd57-4c61-8394-a4a3ea3d3c1a"
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
