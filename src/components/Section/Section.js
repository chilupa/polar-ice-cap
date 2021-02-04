import { Box } from '@material-ui/core';

const Section = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default Section;
