import type { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  appId: 'speedyapp.ng',
  appName: 'speedy-app',
  webDir: 'dist',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    SplashScreen: {
      "launchShowDuration": 2000,
      "backgroundColor": "#d13520",
      "showSpinner": false,
      "androidSpinnerStyle": "small",
      "iosSpinnerStyle": "small",
      "splashFullScreen": true,
      "splashImmersive": true,      
    }
  },
};

export default config;
