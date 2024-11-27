import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1Page from './pages/Lab1Page';
import Lab2Page from './pages/Lab2Page';
import Lab3Page from './pages/Lab3Page'; // Import nowego Lab3Page
import NotFound from './pages/NotFound';
import { data } from './data/module-data';
import AppReducer from './data/AppReducer'; // Importuj funkcję reduktora
import AppContext from './data/AppContext'; // Importuj kontekst

const menuItems = [
  { id: 1, label: "Home", url: "/home", urlPattern: "/home", element: <Home /> },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1Page /> },
  { id: 3, label: "Laboratorium 2", url: "/lab2/:id", urlPattern: "/lab2/:id", element: <Lab2Page /> },
  { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3", element: <Lab3Page /> }
];

function App() {
  // Tworzenie stanu globalnego za pomocą reduktora
  const [state, appDispatch] = useReducer(AppReducer, data);

  return (
    // Dodanie kontekstu aplikacji
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map(item => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
}

export default App;
