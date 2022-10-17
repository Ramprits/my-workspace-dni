import { Refine, ReadyPage, ErrorComponent } from '@pankod/refine-core';
import { Layout, notificationProvider } from '@pankod/refine-mantine';
import routerProvider from '@pankod/refine-react-router-v6';
import dataProvider from '@pankod/refine-simple-rest';
import { authProvider } from '../authProvider';
import { environment } from '../environments/environment';
import { AuthPage } from '../pages';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Refine
      authProvider={authProvider}
      LoginPage={AuthPage}
      Layout={Layout}
      routerProvider={routerProvider}
      dataProvider={dataProvider(environment.API_URL)}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      resources={[
        {
          name: 'posts',
          list: NxWelcome,
        },
      ]}
    />
  );
}

export default App;
