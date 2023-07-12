import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  //props.details na likh k details likh liaa

  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        ></img>
        <CardTitle className="text-primary">
          <h1>
            <span>{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default MyCard;
