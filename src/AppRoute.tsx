
import { Routes, Route } from 'react-router-dom';
import About from './component/about'; 
import Home from './component/home';
import RecipeDetail from './component/recipe/RecipeDetails';
import AddRecipe from './component/recipe/addRecipe';
import RecipeList from './component/recipe/RecipeList';
const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<RecipeList />}>
            <Route path=":id" element={<RecipeDetail />} /> {/* כאן מוגדר כ-child */}         
        </Route>
        <Route path="/addRecipe" element={<AddRecipe />}></Route>
    </Routes>

    );
};

export default AppRoutes;
