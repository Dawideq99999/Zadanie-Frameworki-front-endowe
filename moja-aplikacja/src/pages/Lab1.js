import React from 'react';
import { data } from '../data/module-data'; // Importuj dane
import PersonProfile from '../components/PersonProfile'; // Importuj komponent PersonProfile

const Lab1 = () => {
    return (
        <div>
            <h2>Laboratorium 1</h2>
            <div className="profiles">
                {data.map(person => (
                    <PersonProfile key={person.id} person={person} />
                ))}
            </div>
        </div>
    );
};

export default Lab1;
