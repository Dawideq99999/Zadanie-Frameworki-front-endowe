import { useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../data/AppContext";
import PersonalInfo from "../components/PersonalInfo";

function Lab2Page() {
  const { id } = useParams(); // Pobranie ID z URL-a
  const { items } = useContext(AppContext); // Pobranie danych z kontekstu

  if (!id) {
    return <h2>Brak identyfikatora osoby.</h2>;
  }

  // Znalezienie osoby na podstawie ID
  const person = items.find(item => item.id === parseInt(id));

  if (!person) return <h2>Nie znaleziono osoby.</h2>;

  return (
    <>
      <h1>Laboratorium 2</h1>
      <ul>
        <PersonalInfo
          id={person.id}
          name={person.name}
          eyes={person.eyes} // Dodajemy kolor oczu
          rating={person.rating || 0}
        />
      </ul>
    </>
  );
}

export default Lab2Page;
