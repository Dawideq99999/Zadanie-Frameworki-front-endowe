
import PropTypes from 'prop-types'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PersonInfo({ id, name, birth, eyes }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Id: {id}</ListGroup.Item>
                    <ListGroup.Item>Data urodzin: {birth}</ListGroup.Item>
                    <ListGroup.Item>Kolor oczu: {eyes}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

// Definiowanie typów propsów
PersonInfo.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired,
    eyes: PropTypes.string.isRequired,
};

export default PersonInfo;
