import { useContext } from "react";
import AppContext from "../data/AppContext";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import RatingBar from "./RatingBar"; // Komponent RatingBar

function PersonalInfo({ id, name, eyes, rating }) {
  const { dispatch } = useContext(AppContext); // Pobranie dispatch z kontekstu

  // Obsługa zmiany oceny
  const handleRate = () => {
    const newRating = rating === 10 ? 0 : rating + 1;
    dispatch({
      type: "rate",
      id,
      rating: newRating,
    });
  };

  // Obsługa edycji
  const handleEdit = () => {
    const newName = prompt("Enter new name:", name);
    const newEyes = prompt("Enter new eye color:", eyes); // Obsługa zmiany koloru oczu
    if ((newName && newName !== name) || (newEyes && newEyes !== eyes)) {
      dispatch({
        type: "edit",
        id,
        newName: newName || name, // Jeśli nowa nazwa jest pusta, użyj starej
        newEyes: newEyes || eyes, // Jeśli nowy kolor oczu jest pusty, użyj starego
      });
    }
  };

  // Obsługa usuwania
  const handleDelete = () => {
    dispatch({
      type: "delete",
      id,
    });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Id: {id}</ListGroup.Item>
          <ListGroup.Item>Kolor oczu: {eyes}</ListGroup.Item> {/* Wyświetlanie koloru oczu */}
          <ListGroup.Item>Ocena: {rating}</ListGroup.Item>
        </ListGroup>
        <RatingBar rate={rating} />
        <Button variant="primary" onClick={handleRate}>
          Rate
        </Button>
        <Button variant="secondary" onClick={handleEdit} style={{ marginLeft: "10px" }}>
          Edit
        </Button>
        <Button variant="danger" onClick={handleDelete} style={{ marginLeft: "10px" }}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

PersonalInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  eyes: PropTypes.string.isRequired, // Wymagane pole
  rating: PropTypes.number.isRequired,
};

export default PersonalInfo;
