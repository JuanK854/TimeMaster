import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/templates/MainLayout';
import TimerPage from './pages/TimerPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<TimerPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
