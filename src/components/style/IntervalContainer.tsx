import { Box } from 'grommet';
import { FC } from 'react';

import theme from './theme';

const IntervalContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    direction="column"
    background={theme.global.colors.brand}
    margin="small"
    pad="small"
    align="center"
  >
    {children}
  </Box>
);

export default IntervalContainer;
