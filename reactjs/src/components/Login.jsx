import React from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

class Login extends React.Component {
  state = {
    username: 'admin',
    password: 'admin',
  };

  handleFormSubmit = async event => {
    event.preventDefault();

    const endpoint = 'http://localhost:8085/login';

    axios.post(endpoint, this.state).then(res => {
      localStorage.setItem('authorization', res.data.token);
      return this.handleDashboard();
    });
  };

  handleDashboard() {
    axios.get('http://localhost:8085/dashboard').then(res => {
      if (res.data === 'success') {
        this.props.history.push('/dashboard');
      } else {
        alert('Authentication failure');
      }
    });
  }

  render() {
    const { username, password } = this.state;

    return (
      <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
        {props => (
          <div style={props}>
            <Card className={'border border-dark bg-dark text-white cards'}>
              <Card.Header align='center'>
                <h2>Login</h2>
              </Card.Header>
              <Form onReset={this.resetUser} onSubmit={this.submitUser}>
                <Card.Body>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        required
                        autoComplete='off'
                        type='text'
                        name='username'
                        value={username}
                        onChange={this.userChange}
                        placeholder='Enter Username'
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        autoComplete='off'
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.userChange}
                        placeholder='Enter Password'
                      />
                    </Form.Group>
                  </Form.Row>
                </Card.Body>
                <Card.Footer align='right'>
                  <Button size='sm' variant='success' type='submit'>
                    Login
                  </Button>
                  <Button size='sm' variant='info' type='reset'>
                    Reset
                  </Button>
                </Card.Footer>
              </Form>
            </Card>
          </div>
        )}
      </Spring>
    );
  }
}

export default Login;
