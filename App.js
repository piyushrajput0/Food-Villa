import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header.js";
import Footer from "./src/Footer.js";
import Body from "./src/Body.js";
import About from "./src/About.js";
import Contact from "./src/Contact.js";
import Error from "./src/Error.js";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";
import useOnline from "/utils/useOnline.js";
import Connections from "./src/connections.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./src/Cart.js";
import Loading from "./src/loading.js";

const AppContext = createContext();
const RestaurantMenu = lazy(() => import("./src/RestaurantMenu.js"));

const App = () => {
  const [restaurantlist, setRestaurantlist] = useState([]);
  const [filterdata, setFilterdata] = useState([]);

  const isOnline = useOnline();

  return isOnline == false ? (
    <Connections />
  ) : (
    <Provider store={store}>
      <AppContext.Provider
        value={{ restaurantlist, setRestaurantlist, filterdata, setFilterdata }}
      >
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      </AppContext.Provider>
    </Provider>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/restaurantmenu/:id",
        element: (
          <Suspense fallback={<Loading/>}>
            <RestaurantMenu />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);

export default AppContext;
