import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import Axios from "axios";
import "./App.css";
import MyCard from "./Card";


function App() {
  const [details, setDetails] = useState({});

const fetchDetails = async () => {
  const {data} = await Axios.get("https://randomuser.me/api/"); //we get the response from api
  //data object hai response ki usko destructure kr liaa direct.
  console.log("RESPONSE: ", data)
  const details = data.results[0]
  setDetails(details)
};
useEffect(()=>{
  fetchDetails()
},[])
  return (
    <Container fuild className="p-4 bg-primary App">
<Row>
  <Col md={4} className="offset-md-4 mt-4">
    <MyCard details={details} />
  </Col>
</Row>
    </Container>
  )
}

export default App; 
