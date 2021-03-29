import React from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops';

import { getUsers } from '../api/api';
import MyToast from './MyToast';

class Registration extends React.Component {
  initialState = {
    username: '',
    password: '',
    email: '',
  };

  state = {
    ...this.initialState,
    show: false,
  };

  async componentDidMount() {
    const data = await getUsers();
    this.setState({ users: data });
  }

  userChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitUser(event) {
    event.preventDefault();
    const { show, ...user } = this.state;

    axios.post('http://localhost:8085/users/add', user).then(response => {
      if (response.data !== null) {
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: true }), 3000);
      } else {
        this.setState({ show: false });
      }
    });

    this.setState(this.initialState);
  }

  resetUser = () => this.setState(this.initialState);

  render() {
    const { username, password, email } = this.state;

    return (
      <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
        {props => (
          <div style={props}>
            <div style={{ display: this.state.show ? 'block' : 'none' }}>
              <MyToast children={{ show: this.state.show, message: 'Registration Completed.' }} />
            </div>
            <Card className={'border border-dark bg-dark text-white cards'}>
              <Card.Header align='center'>
                <h2>Registration</h2>
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
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        autoComplete='off'
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.userChange}
                        placeholder='Enter Email'
                      />
                    </Form.Group>
                  </Form.Row>
                </Card.Body>
                <Card.Footer align='right'>
                  <Button size='sm' variant='success' type='submit'>
                    Registry
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

export default Registration;
