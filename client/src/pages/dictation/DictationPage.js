import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const DictationPage = () => {
  const dicts = [1, 2, 3, 4, 5];
  console.log(dicts);
  return (
    <>
      <div className="" style={{backgroundColor: '#F8F9F9'}}>
        <Container className="">
          <Row className="mx-auto">
            {dicts.map((card) => (
              <Col sm={12} md={12} lg={12} xl={12}>
                <Accordion className="m-3">
                  <Accordion.Item eventKey="1">

                    <Accordion.Header>
                    <div className='me-4'>
                            {'1'} .
                        </div>
                        <div className='flex-1'>
                      Accordion Item #1Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="d-flex">
                       
                      
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DictationPage;
