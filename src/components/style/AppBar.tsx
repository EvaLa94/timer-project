import { Header } from 'grommet';
import { FC } from 'react';

const AppBar: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Header
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    justify="around"
  >
    {children}
  </Header>
);

export default AppBar;
