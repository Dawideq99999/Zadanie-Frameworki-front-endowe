import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import AppContext from "../data/AppContext";
import { useParams } from "react-router-dom";

function EditForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { items, dispatch } = useContext(AppContext);
    const { id } = useParams();

    const itemToEdit = items.find((item) => item.id === parseInt(id, 10));

    useEffect(() => {
        if (itemToEdit) {
            reset(itemToEdit);
        }
    }, [itemToEdit, reset]);

    if (!itemToEdit) {
        return <p style={styles.error}>User not found</p>;
    }

    const onSubmit = (data) => {
        dispatch({
            type: "edit",
            id: parseInt(data.id, 10),
            updatedFields: data,
        });
        alert("Record updated successfully!");
    };

    // Funkcje walidacyjne dla Imienia i Nazwiska
    const nameValidation = (name) => {
        if (!/^[A-Z]/.test(name)) {
            return "Imię musi zaczynać się z wielkiej litery";
        }
        if (/[^a-zA-Z\s]/.test(name)) {
            return "Imię nie może zawierać cyfr ani znaków specjalnych";
        }
        return true;
    };

    const surnameValidation = (surname) => {
        if (!/^[A-Z]/.test(surname)) {
            return "Nazwisko musi zaczynać się z wielkiej litery";
        }
        if (/[^a-zA-Z\s]/.test(surname)) {
            return "Nazwisko nie może zawierać cyfr ani znaków specjalnych";
        }
        return true;
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                <h2 style={styles.heading}>Edytuj dane</h2>

                <label htmlFor="id" style={styles.label}>ID</label>
                <input type="text" value={itemToEdit.id} readOnly style={styles.input} />

                <label htmlFor="name" style={styles.label}>Imię</label>
                <input
                    {...register("name", {
                        required: "Imię jest wymagane",
                        maxLength: { value: 20, message: "Imię nie może być dłuższe niż 20 znaków" },
                        minLength: { value: 2, message: "Imię nie może być krótsze niż 2 znaki" },
                        validate: nameValidation, // Walidacja Imienia
                    })}
                    style={styles.input}
                />
                {errors.name && <p style={styles.errorText}>{errors.name.message}</p>}

                <label htmlFor="surname" style={styles.label}>Nazwisko</label>
                <input
                    {...register("surname", {
                        required: "Nazwisko jest wymagane",
                        maxLength: { value: 20, message: "Nazwisko nie może być dłuższe niż 20 znaków" },
                        minLength: { value: 2, message: "Nazwisko nie może być krótsze niż 2 znaki" },
                        validate: surnameValidation, // Walidacja Nazwiska
                    })}
                    style={styles.input}
                />
                {errors.surname && <p style={styles.errorText}>{errors.surname.message}</p>}

                <label htmlFor="birth" style={styles.label}>Data urodzenia</label>
                <input
                    type="date"
                    {...register("birth", {
                        required: "Data urodzenia jest wymagana",
                    })}
                    style={styles.input}
                />
                {errors.birth && <p style={styles.errorText}>{errors.birth.message}</p>}

                <label htmlFor="eyes" style={styles.label}>Kolor oczu</label>
                <select
                    {...register("eyes", {
                        required: "Kolor oczu jest wymagany",
                    })}
                    style={styles.select}
                >
                    <option value="blue">Niebieski</option>
                    <option value="green">Zielony</option>
                    <option value="brown">Brązowy</option>
                    <option value="grey">Szary</option>
                    <option value="black">Czarny</option>
                    <option value="amber">Bursztynowy</option>
                </select>
                {errors.eyes && <p style={styles.errorText}>{errors.eyes.message}</p>}

                <label htmlFor="rating" style={styles.label}>Ocena</label>
                <input
                    type="number"
                    min="0"
                    max="10"
                    {...register("rating", {
                        required: "Ocena jest wymagana",
                        valueAsNumber: true,
                        min: { value: 0, message: "Ocena musi wynosić przynajmniej 0" },
                        max: { value: 10, message: "Ocena nie może być wyższa niż 10" },
                    })}
                    style={styles.input}
                />
                {errors.rating && <p style={styles.errorText}>{errors.rating.message}</p>}

                <button type="submit" style={styles.submitButton}>Zapisz</button>
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
    select: {
        padding: "10px",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
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
    errorText: {
        color: "#e74c3c",
        fontSize: "0.9rem",
    },
    error: {
        color: "#e74c3c",
        fontSize: "1.2rem",
        textAlign: "center",
    },
};

export default EditForm;
