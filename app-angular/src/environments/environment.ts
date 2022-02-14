// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  moviesRestApi: 'https://61bcb65ed8542f0017824994.mockapi.io/api/',
  // cartRestApi : 'http://localhost:3000/api/cart',
  // loginRestApi: 'http://localhost:3000/api/login',
  // registerApi : 'http://localhost:3000/api/register'
  loginRestApi: 'http://localhost:3000/auth/login',
  registerApi : 'http://localhost:3000/auth/register',
  cartRestApi : 'http://localhost:3000/cart'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
