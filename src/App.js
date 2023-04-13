import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import WishList from "./components/WishList";


function App() {
  return (
    <div>
      <Provider store={store}>
     <Header />
      <Home />
     <Footer />
     <Cart />
     <WishList />
     </Provider>
    </div>
  );
}

export default App;
