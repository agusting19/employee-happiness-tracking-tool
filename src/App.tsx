import { Provider } from 'react-redux';
import store from './redux/store';
import { LayoutContainer } from './styled-components';
import { Navbar } from './components';
import { Home } from './pages';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
