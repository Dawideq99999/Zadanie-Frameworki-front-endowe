const fs = require('fs');

const count = Number(process.argv[2]); // Odczyt liczby obiektów
let names = []; // Tablica z imionami

fs.readFile('./src/data/names.txt', 'utf8', (err, data) => {

    if (err) {
        console.error(err);
        return;
    }
    // Podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0); // Zmiana != na !==
    console.log(names);
    
    let content = "export const data = [\n";
    for (let i = 0; i < count; i++) {
        // Losowanie imienia z biblioteki imion
        const name = names[~~((Math.random() * names.length) / 1)];
        // Generowanie daty urodzenia w formacie YYYY-MM-DD
        const birth = `${2000 + Math.floor(Math.random() * 21)}-${("0" + (1 + Math.floor(Math.random() * 12))).slice(-2)}-${("0" + (1 + Math.floor(Math.random() * 28))).slice(-2)}`;
        // Generowanie koloru oczu
        const eyes = ["blue", "brown", "green", "hazel"][Math.floor(Math.random() * 4)];
        
        // Dodanie obiektu do tablicy
        content += `  {\n    id: ${i + 1},\n    name: "${name}",\n    birth: "${birth}",\n    eyes: "${eyes}"\n  },\n`;
    }
    content += "];\n";
    
    // Zapis łańcucha do pliku 
    fs.writeFile('module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});
