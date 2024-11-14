// src/components/PersonalInfo.jsx
import PropTypes from 'prop-types'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PersonalInfo({ id, name, birth, eyes, rating }) {
    const handleEdit = () => {
        alert(`Edytowanie: ${name}`);
    };

    const handleDelete = () => {
        alert(`Usuwanie: ${name}`);
    };

    const handleRate = () => {
        alert(`Ocena dla ${name}: ${rating}`);
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Id: {id}</ListGroup.Item>
                    <ListGroup.Item>Data urodzin: {birth}</ListGroup.Item>
                    <ListGroup.Item>Kolor oczu: {eyes}</ListGroup.Item>
                    <ListGroup.Item>Ocena: {rating}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={handleEdit}>Edit</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
                <Button variant="success" onClick={handleRate}>Rate</Button>
            </Card.Body>
        </Card>
    );
}

PersonalInfo.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired,
    eyes: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default PersonalInfo;
