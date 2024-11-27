import { useContext, useState } from "react";
import AppContext from "../data/AppContext";

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const dispatch = useContext(AppContext).dispatch;

    const id = Math.floor(Math.random() * 100000);

    // Funkcja walidacji dla imienia i nazwiska
    const validateName = (name) => {
        const regex = /^[A-Z][a-zA-Z]*$/; // Imię zaczynające się od wielkiej litery, tylko litery
        if (!regex.test(name)) {
            return "Imię musi zaczynać się od wielkiej litery i nie zawierać cyfr ani znaków specjalnych.";
        }
        return true;
    };

    const validateSurname = (surname) => {
        const regex = /^[A-Z][a-zA-Z]*$/; // Nazwisko zaczynające się od wielkiej litery, tylko litery
        if (!regex.test(surname)) {
            return "Nazwisko musi zaczynać się od wielkiej litery i nie zawierać cyfr ani znaków specjalnych.";
        }
        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const err = [];
        const data = new FormData(e.target);

        const username = data.get("username").trim();
        const surname = data.get("surname").trim();
        const email = data.get("email").trim();
        const passwordField = data.get("passwordField").trim();
        const confirmPassword = data.get("confirmPassword").trim();

        // Walidacja imienia i nazwiska
        const nameValidationResult = validateName(username);
        if (nameValidationResult !== true) {
            err.push(nameValidationResult);
        }

        const surnameValidationResult = validateSurname(surname);
        if (surnameValidationResult !== true) {
            err.push(surnameValidationResult);
        }

        // Walidacja emaila
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            err.push("Podaj poprawny adres e-mail.");
        }

        // Walidacja hasła
        if (passwordField.length < 3) {
            err.push("Hasło musi zawierać co najmniej 3 znaki.");
        }

        if (passwordField !== confirmPassword) {
            err.push("Hasła muszą się zgadzać.");
        }

        if (err.length !== 0) {
            setErrors(err);
            return;
        }

        setErrors([]);
        setSending(true);

        await new Promise((res) => setTimeout(res, 1000)); // Symulacja fetch

        dispatch({
            type: "add",
            data: {
                id,
                username,
                surname,
                email,
                password: passwordField,
            },
        });

        setSending(false);

        for (let key of data.keys()) {
            e.target[key].value = "";
        }
    };

    return (
        <div style={styles.container}>
            {errors.length > 0 && (
                <div style={styles.errors}>
                    {errors.map((error, index) => (
                        <span key={index} style={styles.errorText}>
                            {error}
                        </span>
                    ))}
                </div>
            )}

            <form onSubmit={onSubmit} style={styles.form}>
                <h2 style={styles.heading}>Formularz</h2>

                <label htmlFor="id" style={styles.label}>Id</label>
                <input
                    name="id"
                    value={id}
                    readOnly
                    style={styles.input}
                />

                <label htmlFor="username" style={styles.label}>Imię</label>
                <input
                    name="username"
                    required
                    minLength="1"
                    maxLength="20"
                    placeholder="Imię"
                    style={styles.input}
                />

                <label htmlFor="surname" style={styles.label}>Nazwisko</label>
                <input
                    name="surname"
                    required
                    minLength="1"
                    maxLength="20"
                    style={styles.input}
                />

                <label htmlFor="email" style={styles.label}>E-mail</label>
                <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@doe.com"
                    style={styles.input}
                />

                <label htmlFor="passwordField" style={styles.label}>Hasło</label>
                <input
                    name="passwordField"
                    type="password"
                    required
                    style={styles.input}
                />

                <label htmlFor="confirmPassword" style={styles.label}>Potwierdź hasło</label>
                <input
                    name="confirmPassword"
                    type="password"
                    required
                    style={styles.input}
                />

                <button disabled={isSending} type="submit" style={styles.submitButton}>
                    {isSending ? "Wysyłanie..." : "Zapisz"}
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#333",
        fontSize: "1.8rem",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    label: {
        fontSize: "1rem",
        color: "#333",
    },
    input: {
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
    },
    submitButton: {
        padding: "12px",
        fontSize: "1.1rem",
        backgroundColor: "#3498db",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    errors: {
        backgroundColor: "#f8d7da",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "20px",
    },
    errorText: {
        color: "#721c24",
        fontSize: "1rem",
        marginBottom: "5px",
    },
};

export default CreateForm;
