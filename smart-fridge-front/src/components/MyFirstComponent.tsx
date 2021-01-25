import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import * as qs from 'querystring';
import Cookies from 'universal-cookie';
// GRPC_WEB CODE
import { HelloReply,HelloRequest } from "../grpc/greet_pb";
import {GreeterClient} from '../grpc/GreetServiceClientPb';



const API_GRPC = 'https://smartfirdge.azurewebsites.net'



class Welcome extends React.Component<IWelcome> {
  componentDidMount () {
    try{

      const parsed = qs.parse(window.location.href);
      console.log(parsed);
      const cookies = new Cookies();
      console.log(cookies.get('myCat')); // Pacman

      var echoService = new GreeterClient(API_GRPC,null,null);
      var request = new HelloRequest();
      request.setName( "Artek");
      
      echoService.sayHello(request, {}, function(err: any, response: HelloReply) {
        if(err){
          console.log("sorr",err);
        }
        console.log("yuppe",response.getMessage());
      });

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