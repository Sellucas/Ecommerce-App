import { Provider } from 'react-redux';
import { Pages } from './components/home/pages/Pages';
import store from './controller/store';
import './style/main.scss';

function App() {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  );
}

export default App;
