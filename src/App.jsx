import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemList/ItemDetailed/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <div className="content">
      
        <BrowserRouter>
          <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda de tecnología"></ItemListContainer>}></Route>
              <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido a la tienda de tecnología"></ItemListContainer>}></Route>
              <Route path="/product/:productId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            </Routes>
          <Footer></Footer>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
