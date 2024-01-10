import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import './App.css';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="content">
        <ItemListContainer greeting="Bienvenido a la tienda de tecnología">
        </ItemListContainer>
      </div>
    </>
  );
}

export default App;
