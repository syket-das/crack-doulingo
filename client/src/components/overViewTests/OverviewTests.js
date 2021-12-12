import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardItem from '../card/CardItem';
import './overviewTests.css';
const OverViewTests = () => {
  const cards = [1, 2, 3, 4, 5,];
  return (
    <div className='bg-dark p-4' >
      <h3 className="text-center pt-4 text-light fw-bold fs-3">Overview</h3>
      <Row className='mx-auto'>
        {cards.map((card) => (
          <Col sm={12} md={6} lg={4} xl={4}>
            <CardItem />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OverViewTests;
