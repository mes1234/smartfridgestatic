import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
// GRPC_WEB CODE
import { RandomizerRequest,RandomizeReply } from "../grpc/streamdata_pb";
import {StreamerClient} from '../grpc/StreamdataServiceClientPb';
import { ClientReadableStream } from 'grpc-web';




const API_GRPC = 'https://smartfirdge.azurewebsites.net'
// const API_GRPC = 'https://localhost:5001'


class Generator extends React.Component<IWelcome> {
   

  /**
   *
   */
  constructor(props:IWelcome) {
    super(props);
    this.handleRandom = this.handleRandom.bind(this);
    this.getRandomValues = this.getRandomValues.bind(this);
  }
  state =  {val : 0};

  handleRandom(event:RandomizeReply) {
    this.setState({
      val : event.getMessage()
    })
  }

  getRandomValues()
  {
    var echoService = new StreamerClient(API_GRPC,null,null);
    var request = new RandomizerRequest();
    request.setStart(1);
    request.setStop(10);
    request.setCount(10000);
    var stream = echoService.sayHello(request, {}) as ClientReadableStream<RandomizeReply>;
          stream.on('data', this.handleRandom);
  }

  render() {
      return (
        <div>
          <Container fluid className="Generator">
          <Row>
            <Col>{this.state.val}</Col>
            <Col>
              <Button variant="primary" onClick={this.getRandomValues}>Hit</Button>
            </Col>
          </Row>
        </Container>
        </div>
        
        );
    }
  }
  export default Generator;