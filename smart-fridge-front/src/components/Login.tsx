import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';

class Login extends React.Component {
  constructor(props:any)
  {
    super(props);
    const cookies = new Cookies();
    cookies.set('myCat', 'Pacman', { path: '/' });
    console.log(cookies.get('myCat')); // Pacman

  }
  async handleGoogleLogin(){

    const qParams = [
      `client_id=717858181087-1mtk11md5mu78li328qq7jocm2ckelth.apps.googleusercontent.com`,
      `redirect_uri=https://lemon-river-09b311a03.azurestaticapps.net`,
      `scope=https://www.googleapis.com/auth/gmail.metadata`,
      `response_type=token`
    ].join("&");
    
    try {
      window.location.assign(`https://accounts.google.com/o/oauth2/auth?${qParams}`);
    } catch (e) {
      console.error(e);
    }
  };
  render() {
      return (
        <div>
          <Container fluid className="Welcome">
          <Row>
              <Button variant="primary" onClick={()=>this.handleGoogleLogin()}>Login using Google</Button>
          </Row>
        </Container>
        </div>
        );
    };
  }
  export default Login;