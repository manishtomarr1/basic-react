import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button, CardText } from "reactstrap";

const CardItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2, mb-1">
      <CardImg top height="250" width="250" src={product.smallImage}></CardImg>
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondry">
          price: RS {product.productPrice}
        </CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          buy now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardItem;
