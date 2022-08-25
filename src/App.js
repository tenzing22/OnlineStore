import logo from './logo.svg';
import './App.css';
import First from './component/First';
import Second from './component/Second';
import MyRoutes from './MyRoutes';
import { Provider } from 'react-redux';
import store from './component/reducers/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <MyRoutes></MyRoutes>
    </div>
    </Provider>
  );
}

export default App;
