import { useReducer } from 'react';
import FlexContainer from '../components/FlexContainer';
import { data } from '../data/module-data';  // Importujemy dane
import PersonalInfo from '../components/PersonalInfo';
import AppReducer from '../data/AppReducer';  // Importujemy reducer

function Lab1Page() {
    // Inicjalizujemy reducer z początkowym stanem (danymi)
    const [items, dispatch] = useReducer(AppReducer, data);

    return (
        <div>
            <h1>Laboratorium 1</h1>

            <FlexContainer
                data={items}  // Przekazujemy zaktualizowaną listę osób
                element={(item) => (
                    <PersonalInfo
                        key={item.id}  // Przekazujemy klucz
                        id={item.id}
                        name={item.name}
                        birth="2000-01-01"
                        eyes={item.eyes}
                        initialRating={item.rating || 0}
                        dispatch={dispatch}  // Przekazujemy dispatch do PersonalInfo
                    />
                )}
            />
        </div>
    );
}

export default Lab1Page;
