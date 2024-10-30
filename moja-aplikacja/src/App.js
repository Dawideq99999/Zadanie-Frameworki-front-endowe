// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import NotFound from './pages/NotFound';



const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/", element: <Home /> },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1 /> },
  { id: 3, label: "Laboratorium 2", url: "/lab2/1", urlPattern: "/lab2/:id", element: <Lab2 /> },
];

function App() {
  return (
    <RootLayout items={menuItems}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab1" element={<Lab1 />} />
        <Route path="/lab2/:id" element={<Lab2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
