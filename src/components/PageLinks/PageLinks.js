import { Box, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const PageLinks = () => {
  const links = [
    {
      to: '/',
      name: 'Home',
    },
  ];
  const Route = ({ children }) => (
    <Typography color="secondary" component="span" variant="body1">
      {children}
    </Typography>
  );
  return (
    <Box textAlign="center" p={3}>
      {links.map(({ to, name }, index) => (
        <Box key={index} component="span" pl={2} pr={2}>
          <Link component={RouterLink} to={to}>
            <Route>{name}</Route>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default PageLinks;
