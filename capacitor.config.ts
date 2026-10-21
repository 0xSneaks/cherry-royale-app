import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fun.cherry.royale',
  appName: 'Cherry Royale',
  webDir: 'www',
  server: {
    url: 'https://cherry-royale-cherry.vercel.app',
    cleartext: false,
  },
  android: {
    backgroundColor: '#0b0409',
  },
};

export default config;
