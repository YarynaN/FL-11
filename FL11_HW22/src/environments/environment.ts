// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAxAtf2R1XacieopvYxQ15AEGQCHmw_7CM',
    authDomain: 'fl11-hw22-angular-newsblog.firebaseapp.com',
    databaseURL: 'https://fl11-hw22-angular-newsblog.firebaseio.com',
    projectId: 'fl11-hw22-angular-newsblog',
    storageBucket: 'fl11-hw22-angular-newsblog.appspot.com',
    messagingSenderId: '168905655692',
    appId: '1:168905655692:web:e77b47b390b7b2787b82a9'
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


// service firebase.storage {
//   match /b/{bucket}/o {
//   match /{allPaths=**} {
//     allow read, write: if request.auth != null;
//   }
// }
// }
