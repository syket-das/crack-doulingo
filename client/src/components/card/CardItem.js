import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './cardItem.css';

const CardItem = () => {
  return (
    <Card style={{ width: '100%' }} className="my-3" >
      <Card.Img variant="top" style={{height: '150px', width: '100%', objectFit: 'cover'}} src="static/images/syket1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
