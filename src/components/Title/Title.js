import { Box, Grow, Typography } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';

const Title = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box>
        <Typography variant="h3" component="h1" color="secondary" gutterBottom>
          Climatic Changes
        </Typography>
      </Box>
      <Box pl={2} pb={1}>
        <Grow in={true} {...{ timeout: 1000 }}>
          <PublicIcon style={{ fontSize: 60 }} />
        </Grow>
      </Box>
    </Box>
  );
};

export default Title;
