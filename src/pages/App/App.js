import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterSwitch from './RouterSwitch';
import theme from '../../utils';
import { Header, Layout } from '../../components';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Header />
          <RouterSwitch />
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
