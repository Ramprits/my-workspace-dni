import { Refine, ReadyPage, ErrorComponent } from '@pankod/refine-core';
import { notificationProvider } from '@pankod/refine-mantine';
import dataProvider from '@pankod/refine-simple-rest';
import routerProvider from '@pankod/refine-react-router-v6';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
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
