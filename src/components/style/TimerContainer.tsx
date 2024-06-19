import { Box } from 'grommet';
import { FC } from 'react';

const TimerContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    direction="column"
    background="lightblue"
    margin="small"
    pad="small"
    round="medium"
  >
    {children}
  </Box>
);

export default TimerContainer;
