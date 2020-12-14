import React, {Component} from 'react';

import {
    Card,
    CardDeck
} from 'react-bootstrap'
import './footer.css';

class Footer extends Component{
    render(){
        return <div id="background">
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>About</Card.Title>
                        <Card.Text>
                            A passionate learner from Tamkang University
                        </Card.Text>
                    </Card.Body>
                <Card.Footer>
                <small className="text-muted">Dec, 2020</small>
            </Card.Footer>
        </Card>
    <Card>
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
        </Card.Text>
        </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Card>
    <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    </CardDeck>
        </div>
    }
}

export default Footer;