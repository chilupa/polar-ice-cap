import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';

const Source = () => (
  <Box textAlign="center">
    <Typography variant="caption" color="textSecondary">
      Source:{' '}
      <Link
        href="http://nsidc.org/arcticseaicenews/"
        target="_blank"
        rel="noopener"
        color="secondary">
        Wikipedia
      </Link>
    </Typography>
  </Box>
);

export default Source;
