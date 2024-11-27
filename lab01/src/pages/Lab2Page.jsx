import { useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../data/AppContext";
import PersonalInfo from "../components/PersonalInfo";

function Lab2Page() {
  const { id } = useParams(); // Pobranie ID z URL-a
  const { items } = useContext(AppContext); // Pobranie danych z kontekstu

  if (!id) {
    return <h2 style={styles.error}>Brak identyfikatora osoby.</h2>;
  }

  // Znalezienie osoby na podstawie ID
  const person = items.find(item => item.id === parseInt(id));

  if (!person) return <h2 style={styles.error}>Nie znaleziono osoby.</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Laboratorium 2</h1>
      <div style={styles.personInfo}>
        <PersonalInfo
          id={person.id}
          name={person.name}
          eyes={person.eyes} // Dodajemy kolor oczu
          rating={person.rating || 0}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  personInfo: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  error: {
    color: "#e74c3c",
    fontSize: "1.2rem",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8d7da",
    borderRadius: "5px",
    marginTop: "20px",
  },
};

export default Lab2Page;
