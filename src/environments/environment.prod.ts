export const environment = {
  production: true,
  tenant: '207fad3e-ddcc-4e76-ac3d-001fcae96b28',
  clientId: 'b8b7387f-1bf2-444c-b19b-333a00d701c6',
  extraQueryParameter: 'nux=1', // This is optional
  endpoints: {
    "http://localhost:4200/api": 'b8b7387f-1bf2-444c-b19b-333a00d701c6', // Note, this is an object, you could add several things here
    "https://staticwebapi.azurewebsites.net/WeatherForecast":"9f191287-dd57-4c61-8394-a4a3ea3d3c1a"
}
};
