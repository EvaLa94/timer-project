import { Box } from 'grommet';
import { FC } from 'react';

import theme from './theme';

const SectionContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    direction="row"
    border={{ color: theme.global.colors.brand, size: 'medium' }}
    margin="small"
    pad={{ horizontal: 'small', vertical: 'xsmall' }}
    gap="medium"
  >
    {children}
  </Box>
);

export default SectionContainer;
