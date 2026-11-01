import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories.jsx';
import CategoryDetail from './components/CategoryDetail.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';
import RecipeList from './components/RecipeList.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-shell">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes" element={<RecipeList />} />
                        <Route path="/recipes/:id" element={<RecipeDetail />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/categories/:categoryName" element={<CategoryDetail />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
