import { useState } from 'react';  // Importowanie useState
import FlexContainer from '../components/FlexContainer';
import { data } from '../data/module-data';
import PersonalInfo from '../components/PersonalInfo';

function Lab1Page() {
  // Inicjalizacja stanu dla ocen wszystkich użytkowników
  const [ratings, setRatings] = useState(
    data.map(person => ({
      id: person.id,
      rating: person.rating || 0,  // Ustawienie początkowej oceny
    }))
  );

  // Funkcja zmieniająca ocenę dla konkretnego użytkownika
  const handleRateIncrease = (id) => {
    setRatings(prevRatings =>
      prevRatings.map(person =>
        person.id === id
          ? { ...person, rating: Math.min(person.rating + 1, 10) }  // Zwiększamy ocenę, ale nie przekraczamy 10
          : person
      )
    );
  };

  return (
    <div>
      <h1>Laboratorium 1</h1>

      <FlexContainer
        data={data}
        element={({ id, name }) => (
          <div key={id}>
            <PersonalInfo
              id={id}
              name={name}
              birth="2000-01-01"
              eyes="Blue"
              initialRating={ratings.find(person => person.id === id)?.rating || 0}
              onRate={handleRateIncrease}  // Przekazujemy funkcję do obsługi zmiany oceny
            />
          </div>
        )}
      />
    </div>
  );
}

export default Lab1Page;
