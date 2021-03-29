import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Product from './components/Product';
import Dashboard from './components/DashBoard';
import ProductList from './components/ProductList';
import Registration from './components/Registration';
import NavigationBar from './components/NavigationBar';
import { SingleProduct } from './components/SingleProduct';

import './App.css';

const App = () => (
  <Router>
    <NavigationBar />
    <Container>
      <Row>
        <Col lg={12} style={{ marginTop: '20px' }}>
          <Switch>
            <Route path='/' exact component={Welcome} />
            <Route path='/add' exact component={Product} />
            <Route path='/product' exact component={ProductList} />
            <Route path='/product/:id' exact component={SingleProduct} />
            <Route path='/registration' exact component={Registration} />
            <Route path='/login' exact component={Login} />
            <Route path='/dashboard' exact component={Dashboard} />
          </Switch>
        </Col>
      </Row>
    </Container>
    <Footer />
  </Router>
);

export default App;
