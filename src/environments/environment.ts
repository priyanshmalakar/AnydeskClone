export const AppConfig = {
  production: false,
  environment: 'LOCAL',
  appName: 'remotecontrol-desktop',
  api: (window as any)['env']?.API_URL || 'http://localhost:3000',
};
