import React from 'react';
import { Box, Container } from '@material-ui/core';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box p={3}>{children}</Box>
    </Container>
  );
};

export default Layout;
