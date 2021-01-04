import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import * as qs from 'querystring';





class Welcome extends React.Component<IWelcome> {
  componentDidMount () {
    try{

      const parsed = qs.parse(window.location.href);
      console.log(parsed);
    }
    catch (e)
    {}
  }
    render() {
      return (
        <div>
          <Container fluid className="Welcome">
          <Row>
            <Col>{this.props.name}</Col>
            <Col>
              <Button variant="primary">Hit</Button>
            </Col>
          </Row>
        </Container>
        </div>
        
        );
    }
  }
  export default Welcome;