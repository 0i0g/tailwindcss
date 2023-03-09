import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/redux/store';
import Router from './routes/routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
