import { Button, Grommet, Nav, Page, PageContent, PageHeader } from 'grommet';
import { Moon, Sun } from 'grommet-icons';
import { FC, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import AppBar from './components/style/AppBar';
import theme from './components/style/theme';

const App: FC = () => {
  const [dark, setDark] = useState(false);
  return (
    <Grommet theme={theme} full themeMode={dark ? 'dark' : 'light'}>
      <Page>
        <AppBar>
          <h1>APP page</h1>
          <Button
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
          />
        </AppBar>

        <PageContent>
          <PageHeader title="Create your timer" />

          <Nav direction="row" pad="medium">
            <Link to={'list'}>List</Link>
            <Link to={'new'}>Add new</Link>
          </Nav>

          <Outlet />
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default App;
