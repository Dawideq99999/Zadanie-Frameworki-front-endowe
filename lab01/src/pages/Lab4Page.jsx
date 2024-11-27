
import { Link } from "react-router-dom";

// Komponent z wbudowanymi stylami
function Lab4Page() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Laboratorium 4</h1>
            <div style={styles.content}>
                <p style={styles.description}>
                    Zarządzaj obiektami w Laboratorium 4. Możesz dodać nowy obiekt klikając poniższy przycisk.
                </p>
                <Link to="/lab4/add" style={styles.addButton}>
                    Dodaj obiekt
                </Link>
            </div>
        </div>
    );
}

// Stylizacja w obiekcie JavaScript
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f7fa",
        padding: "20px",
        boxSizing: "border-box",
    },
    heading: {
        fontSize: "2.5rem",
        color: "#2c3e50",
        marginBottom: "20px",
        textAlign: "center",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    description: {
        fontSize: "1.2rem",
        color: "#7f8c8d",
        textAlign: "center",
        marginBottom: "30px",
        maxWidth: "600px",
    },
    addButton: {
        display: "inline-block",
        backgroundColor: "#3498db",
        color: "white",
        fontSize: "1.2rem",
        padding: "15px 30px",
        borderRadius: "5px",
        textDecoration: "none",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s, transform 0.3s",
    },
};

// Dodatkowe style na interakcje
const hoverStyles = {
    ":hover": {
        backgroundColor: "#2980b9",
        transform: "translateY(-3px)",
    },
    ":active": {
        backgroundColor: "#1f6392",
        transform: "translateY(1px)",
    },
};

// Wykorzystanie hover i active w dynamiczny sposób
Object.assign(styles.addButton, hoverStyles);

export default Lab4Page;
