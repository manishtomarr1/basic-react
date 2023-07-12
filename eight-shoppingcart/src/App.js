import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Container, Row, Col } from "reactstrap";

import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    //step 1.
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
      //find krega k element item added hai yah nhi hai.
    });

    if (isAlreadyAdded !== -1) {
      //matlab agar kuch find hoga toh uska index dededa wrna -2 dega jb kuch nhi milega array m similar
      toast("already added in cart", {
        type: "error",
      });
    }
    setCartItem([...cartItem, item]); //cartItem same rhega bs item add hoga.
  };

  const buyNow = () => {
    //jaise hi buy now click hoga toh array empty ho jaiga -- step 2
    setCartItem([]);
    toast("purchase complete", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    //step 3
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
    //matlab naya array milega wo sb item honge jinki id single item ki id se nhi milegi.
  };

  return (
    <Container fluid>
      <div>
        <Row>
        
          <Col md="8">
            <BuyPage addInCart={addInCart} />
          </Col>
          <Col md="4">
            <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
          </Col>
        </Row>
        </div>
    </Container>
  );
}

export default App;
