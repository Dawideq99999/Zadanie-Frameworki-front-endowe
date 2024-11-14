import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import RatingBar from './RatingBar';  // Importowanie komponentu RatingBar

function PersonalInfo({ id, name, birth, eyes, initialRating, onEdit, onDelete }) {
  const [rating, setRating] = useState(initialRating);

  // Funkcja obsługująca zmianę oceny
  const handleRate = () => {
    if (rating === 10) {
      setRating(0);  // Resetujemy ranking do 0, jeśli jest 10
    } else {
      setRating(rating + 1);  // Zwiększamy ranking o 1
    }
  };

  // Funkcja obsługująca edycję
  const handleEdit = () => {
    if (onEdit) {
      onEdit(id);  // Wywołanie funkcji onEdit z id, aby można było edytować
    }
  };

  // Funkcja obsługująca usuwanie
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);  // Wywołanie funkcji onDelete z id, aby usunąć
    }
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

        {/* Komponent RatingBar, wyświetla gwiazdki */}
        <RatingBar rate={rating} />

        {/* Przycisk do zmiany oceny */}
        <Button variant="primary" onClick={handleRate}>Rate</Button>
        
        {/* Przycisk do edycji */}
        <Button variant="secondary" onClick={handleEdit} style={{ marginLeft: '10px' }}>Edit</Button>
        
        {/* Przycisk do usuwania */}
        <Button variant="danger" onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</Button>
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
  onEdit: PropTypes.func,  // Funkcja do obsługi edycji
  onDelete: PropTypes.func,  // Funkcja do obsługi usuwania
};

export default PersonalInfo;
