import React from "react";

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Row,
  Col
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container>
      <h1 className="text-success">your cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>price: {item.productPrice}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/*    if evertyhing is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-c ">
          <CardHeader>grand total</CardHeader>
          <CardBody>
            your amount or {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <button color="success" onClick={buyNow}>
                pay
            </button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning"> cart is empty</h1>
      )}
    </Container>
  );
};

export default Cart;