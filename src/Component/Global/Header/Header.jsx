import { useRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
//import image
import logo from "./../../../Utility/img/kyou.id_logo.png";
import mascot_img from "./../../../Utility/img/mascot.png.webp";
import cart_icon from "./../../../Utility/img/cart.png";
import user_icon from "./../../../Utility/img/dummy_face.png";
import magnify_icon from "./../../../Utility/img/magnify.png";
import "./css/Header.css";

function Header({ userText, placeholder, cartIconOnClick, userIconOnClick, onKeyDown }) {
  const inputRef = useRef();

  // const mockFunc = (event) => {
  //   if (event.key === "Enter") {
  //     console.log("TEST");
  //   }
  // };

  return (
    <div>
      <div className="header-parent">
        <div className="first-container">
          <div>
            <HamburgerIcon />
          </div>

          {/* IMAGE CONTAINER */}
          <div className="logo-container">
            <img data-testid="logo" src={logo} className="logo" />
          </div>

          {/* FORM CONTAINER */}
          <div className="form-container">
            <input data-testid="search-input" type="text" className="form-control" id="search-input" placeholder={placeholder} ref={inputRef} onKeyDown={onKeyDown} />
          </div>
        </div>

        <div className="second-container">
          {/* CART CONTAINER */}
          <div className="cart-container">
            <img data-testid="cart" src={cart_icon} className="cart" onClick={cartIconOnClick} />
          </div>

          {/* MAGNIFY CONTAINER */}
          <div className="magnify-container">
            <img data-testid="magnify" src={magnify_icon} className="magnify" />
          </div>

          {/* USER CONTAINER */}
          <div className="user-container">
            <div className="user-img-container">
              <img data-testid="user" src={user_icon} className="user-img" onClick={userIconOnClick} />
            </div>

            <div className="user-text-container">
              <p data-testid="user-text" className="user-text">
                {userText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>hello world</div>
    </div>
  );
}

export default Header;
