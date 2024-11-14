export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            return state.map(person =>
                person.id === action.id
                    ? { ...person, name: action.newName, eyes: action.newEyes }  // Zaktualizuj nazwę i kolor oczu
                    : person
            );
        case "rate":
            return state.map(person =>
                person.id === action.id
                    ? { ...person, rating: action.rating }  // Zaktualizuj ocenę
                    : person
            );
        case "delete":
            return state.filter(person => person.id !== action.id);  // Usuń osobę o podanym ID
        default:
            return state;  // Zwróć stan niezmieniony w przypadku innych akcji
    }
}
