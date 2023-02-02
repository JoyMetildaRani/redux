// App.js
import { Provider } from 'react-redux';
import Home from './screens/home';
import { store } from './redux/store';
 
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}