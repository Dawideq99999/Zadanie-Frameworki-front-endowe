import { useContext } from "react";
import AppContext from "../data/AppContext";
import FlexContainer from "../components/FlexContainer";
import PersonalInfo from "../components/PersonalInfo";

function Lab1Page() {
  const { items } = useContext(AppContext); // Pobranie danych z kontekstu

  return (
    <div>
      <h1>Laboratorium 1</h1>
      <FlexContainer
        data={items}
        element={(item) => (
          <PersonalInfo
            key={item.id}
            id={item.id}
            name={item.name}
            eyes={item.eyes} // Dodajemy kolor oczu
            rating={item.rating || 0}
          />
        )}
      />
    </div>
  );
}

export default Lab1Page;
