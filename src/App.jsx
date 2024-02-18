import './App.css';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemList/ItemDetailed/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <>
    <div className="content">
        <BrowserRouter>
          <CartContextProvider>
            <NavBar></NavBar>
              <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda de tecnología"></ItemListContainer>}></Route>
                <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido a la tienda de tecnología"></ItemListContainer>}></Route>
                <Route path="/product/:productId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                <Route path='/cart' element={<Cart></Cart>}></Route>
              </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </div>
        <Footer></Footer>
    </>
  );
}

export default App;
