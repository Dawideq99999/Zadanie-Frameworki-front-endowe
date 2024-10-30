
import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/module-data'; // Importuj dane

const Lab2 = () => {
    const { id } = useParams();
    const person = data.find(person => person.id === parseInt(id)); // Szukaj osoby na podstawie id

    if (!id) {
        return <div>Brak identyfikatora osoby.</div>;
    }

    if (!person) {
        return <div>Nie znaleziono osoby o tym identyfikatorze.</div>;
    }

    return (
        <div>
            <h2>Profil osoby {person.name}</h2>
            {/* Wyświetl inne szczegóły profilu osoby */}
        </div>
    );
};

export default Lab2;
