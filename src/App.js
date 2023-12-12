import { Provider } from "react-redux"
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import store from "./components/utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "/watch",
          element: <WatchPage />
        }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />

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
