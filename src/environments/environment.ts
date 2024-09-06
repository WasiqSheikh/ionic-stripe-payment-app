// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe: {
    publishablekey: 'pk_test_51PjEKM08DLUKpffB2Jr13jRCDRal7gyAUxxOpT68DEdyDKpGm1F3c7BlhCDU4MqosdVWbXE6R59aC2jhGSREhRFb00mxxdYSgr',
    secretKey: 'sk_test_51PjEKM08DLUKpffBJmxWVpSKaAKnKMtfuJ6htIRGIl5WRLlOwPh2GVlfMVOXTxCdxgEn3AqQYWYPnWHZUfLaBO5w00uuCQWXUu',
  },
  api: 'http://192.168.100.173:3000/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
