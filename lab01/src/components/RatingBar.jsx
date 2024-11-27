import PropTypes from 'prop-types';

function RatingBar({ rate }) {
  const filled = '★';  // Wypełniona gwiazdka
  const outlined = '✩';  // Pusta gwiazdka

  // Tworzenie tablicy z gwiazdkami
  const stars = new Array(10).fill(outlined);  // Wszystkie gwiazdki na początku są puste
  stars.fill(filled, 0, rate);  // Zastępujemy pustą gwiazdkę wypełnioną do wskazanej oceny

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

RatingBar.propTypes = {
  rate: PropTypes.number.isRequired,  // Oczekiwany prop - liczba ocen
};

export default RatingBar;
