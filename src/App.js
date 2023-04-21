import Register from "./Page/Register/Register";
import Login from "./Page/Login/Login";
import Home from "./Page/Home/Home";
import ItemDetail from "./Page/ItemDetail/ItemDetail";
import Cart from "./Page/Cart/Cart";
import Checkout from "./Page/Checkout/Checkout";
import Button from "./Component/Global/Button/Button";
import Card from "./Component/Global/Card/Card";
import inazuma from "./Utility/img/inazuma.jpg";
import Footer from "./Component/Global/Footer/Footer";
import Header from "./Component/Global/Header/Header";
import TitleBar from "./Component/Global/TitleBar/TitleBar";

function App() {
  return (
    <div className="App">
      <div>
        <Header userText={"Hi, Guest"} placeholder={"Mau khilaf apa hari ini?"} />
      </div>
      <Card img={inazuma} name={"[REVIVE] Taroumaru Thoma Inazuma Plush - Genshin Impact"} status={"Ready-Stock"} price={"500,000"} />

      <Button variant={"bton-outl-danger-sm"} title={"Apply"} onClick={() => console.log("click")} />

      <Footer />

      <TitleBar title={"Order Detailsz"} />
    </div>
  );
}

export default App;
