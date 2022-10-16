import {
  MantineProvider,
  NotificationsProvider,
  LightTheme,
  Global,
} from '@pankod/refine-mantine';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './app/app';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <MantineProvider
      theme={LightTheme}
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
    >
      <Global styles={{ body: { WebkitFontSmoothing: 'auto' } }} />
      <NotificationsProvider position="top-right">
        <App />
      </NotificationsProvider>
    </MantineProvider>
  </StrictMode>
);
