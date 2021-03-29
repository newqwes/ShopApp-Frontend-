import { Navbar, Col, Container } from 'react-bootstrap';

let fullYear = new Date().getFullYear();

const Footer = () => (
  <Navbar fixed='bottom' bg='dark' variant='dark'>
    <Container>
      <Col lg={12} className='text-center text-muted'>
        <div>
          {fullYear}-{fullYear + 1},All Rights Reserved by Gamer's Shop
        </div>
      </Col>
    </Container>
  </Navbar>
);

export default Footer;
