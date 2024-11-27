

function Home() {
    const containerStyle = {
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '10px',
        fontFamily: 'Arial, sans-serif',
    };

    const subtitleStyle = {
        fontSize: '1.5rem',
        color: '#34495e',
        fontStyle: 'italic',
        marginTop: '10px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Laboratorium 01</h1>
            <h2 style={subtitleStyle}>Dawid Dlubacz</h2>
        </div>
    );
}

export default Home;
