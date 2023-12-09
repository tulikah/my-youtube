import { Provider} from "react-redux"
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import store from "./components/utils/store";


function App() {
  return (
    <Provider store={store}>
    <div>
      <Header />
      <Body />

      {/* {
        Header
        Body
          -SideNavBar
            -MenuItems
          -MainContaner
           -VideoContainer
              -VideoWatchContainer
           -ButtonListContainer 

      } */}
    </div>
    </Provider>
  );
}

export default App;
