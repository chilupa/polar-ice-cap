import { Box, Divider } from '@material-ui/core';
import PageLinks from '../PageLinks';
import Title from '../Title';

const Header = () => {
  return (
    <Box textAlign="center">
      <Title />
      <Box pt={4}>
        <Divider />
      </Box>
    </Box>
  );
};

export default Header;
