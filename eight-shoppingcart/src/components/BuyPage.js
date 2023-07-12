import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Col, Row, CardText } from "reactstrap";
import { random, commerce } from "faker";
import CartItem from "./CartItem";

const apiKey = "INSERT_YOUR_API_KEY/-HERE";

const url =
  "https://www.pexels.com/photo/fashion-people-woman-relaxation-17027029/";

const localurl = "https://mocki.io/v1/0cf16507-2522-4fbc-9347-2e53a3f0eb60";
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => { // this is only ork when we have the api key or the url
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey,
  //       },
  //     });
  //     //axios get request bhej rha hai or response "responce" variable mae save hora hai
  //   };

  const fetchPhotos = async () => {
    //const response = await Axios.length(localUrl);
    //responce.data ma esb response ata hai
    //toh hmne destructured kr lia

    const { data } = await Axios.get(localurl);

    const { photos } = data; //again destructure from data kyuki photo uske andr json object hai.
    console.log(photos);
    const allProduct = photos.map((photo) => ({
      //kyuki photos mae 6 photo hai acc. to our localurl
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),

      productPrice: commerce.price(),

      id: random.uuid(),
    }));
    setProduct(allProduct);
    console.log(">>>>>>>>>", allProduct);
  };

  useEffect(() => {
    fetchPhotos([]);
  }, []); //jaise hi page load hoga fetch photo run hoga or photos mae data aa jaiga or hum photos ko show kr skte hai abd evertyhing else.

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>

      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
