import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/templates/MainLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
