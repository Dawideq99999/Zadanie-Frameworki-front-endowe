import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import RatingBar from './RatingBar';  // Komponent RatingBar

function PersonalInfo({ id, name, birth, eyes, initialRating, dispatch }) {
    const [rating, setRating] = useState(initialRating);  // Lokalny stan oceny

    // Obsługa zmiany oceny (zwiększenie)
    const handleRate = () => {
        const newRating = rating === 10 ? 0 : rating + 1;  // Zwiększamy ocenę, ale nie przekraczamy 10
        setRating(newRating);  // Aktualizujemy lokalny stan

        // Dispatchujemy akcję do reduktora, aby zaktualizować globalny stan
        dispatch({
            type: "rate",  // Akcja zmiany oceny
            id: id,        // Przekazujemy id osoby, której ocena jest zmieniana
            rating: newRating,  // Przekazujemy nową wartość oceny
        });
    };

    // Obsługa edycji
    const handleEdit = () => {
        const newName = prompt("Enter new name:", name);
        const newEyes = prompt("Enter new eye color:", eyes);

        if ((newName && newName !== name) || (newEyes && newEyes !== eyes)) {
            dispatch({
                type: "edit",  // Typ akcji do edycji
                id: id,
                newName: newName || name,  // Jeśli nowa nazwa jest pusta, używamy starej
                newEyes: newEyes || eyes,  // Jeśli nowy kolor oczu jest pusty, używamy starego
            });
        }
    };

    // Obsługa usuwania
    const handleDelete = () => {
        dispatch({
            type: "delete",  // Typ akcji do usuwania
            id: id,  // Przekazujemy ID osoby
        });
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Id: {id}</ListGroup.Item>
                    <ListGroup.Item>Data urodzin: {birth}</ListGroup.Item>
                    <ListGroup.Item>Kolor oczu: {eyes}</ListGroup.Item>
                </ListGroup>

                {/* Komponent RatingBar, wyświetlający ocenę */}
                <RatingBar rate={rating} />

                {/* Przycisk do zmiany oceny */}
                <Button variant="primary" onClick={handleRate}>Rate</Button>
                
                {/* Przycisk do edycji */}
                <Button 
                    variant="secondary" 
                    onClick={handleEdit} 
                    style={{ marginLeft: '10px' }}
                >
                    Edit
                </Button>
                
                {/* Przycisk do usuwania */}
                <Button 
                    variant="danger" 
                    onClick={handleDelete} 
                    style={{ marginLeft: '10px' }}
                >
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
}

PersonalInfo.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired,
    eyes: PropTypes.string.isRequired,
    initialRating: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,  // Dodanie dispatch jako właściwości
};

export default PersonalInfo;
