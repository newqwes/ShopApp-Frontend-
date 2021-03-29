import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { getProduct } from '../api/api';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

class ProductList extends React.Component {
  state = {
    games: [],
  };

  async componentDidMount() {
    const data = await getProduct();
    this.setState({ games: data });
  }

  render() {
    const { games } = this.state;

    return (
      <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
        {props => (
          <Card className={'border border-dark bg-dark text-white cards'} style={props}>
            <Card.Header align='center'>
              <h2>Game Catalog</h2>
            </Card.Header>
            <Card.Body>
              <Container>
                <Row>
                  {games.length === 0 ? (
                    <Col align='center'> Games Available.</Col>
                  ) : (
                    games.map(({ id, filename, name, price, genre }) => (
                      <NavLink
                        to={'/product/' + id}
                        style={{
                          backgroundImage: 'url(' + filename + ')',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          textDecoration: 'none',
                        }}
                        className='games'
                        key={id}>
                        <div className='inside'>
                          <p className='name'>{name}</p>
                          <p className='name'>{price}$</p>
                          <p>{genre}</p>
                        </div>
                      </NavLink>
                    ))
                  )}
                </Row>
              </Container>
            </Card.Body>
          </Card>
        )}
      </Spring>
    );
  }
}

export default ProductList;
