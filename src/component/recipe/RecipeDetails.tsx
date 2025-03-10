import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Box, Typography, CircularProgress } from "@mui/material";
import recipeStore from "../../store/RecipeStors";
import { Recipe } from "../../mpdels/models";
import { useEffect, useState } from "react";
import { color } from "framer-motion";

const RecipeDetail = observer(() => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true); // מצב טעינה
    const [recipe, setRecipe] = useState<Recipe | undefined>(undefined); // מצב מתכון
    

    useEffect(() => {
        const fetchRecipe = () => {
            recipeStore.getRecipes();
            const foundRecipe = recipeStore.recipes.find((r: Recipe) => r.id === parseInt(id || "0"));
            console.log(foundRecipe);
            setRecipe(foundRecipe);
            setLoading(false);
        };
        fetchRecipe();
    }, [id]);
    useEffect(() => {
        recipeStore.getRecipes();
      }, []);

    if (loading) {

    }

    if (!recipe) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress sx={{ color: "#FFD700" }} />
            </Box>
        );
        // return <Typography sx={{ color: "red" }}>מתכון לא נמצא</Typography>;
    }

    return (
        <Box sx={{
            padding: 3,
            backgroundColor: "#1E1E1E", // רקע כהה
            borderRadius: "8px",
            boxShadow: 3,
            height: "100%",
        }}>
            {/* תמונה של המתכון */}
            {/* <Box sx={{
                width: "100%", 
                height: "300px", 
                backgroundImage: `url(${recipe.imageUrl || 'default-image.jpg'})`, // אם יש תמונה במתכון, הצג אותה
                backgroundSize: "cover", 
                backgroundPosition: "center",
                borderRadius: '8px',
                marginBottom: 2,
            }} /> */}

            <Typography variant="h4" sx={{
                color: "#FFD700", // צבע זהב לכותרת
                fontWeight: "bold",
                marginBottom: 1,
            }}>
                {recipe.title}
            </Typography>

            <Typography variant="body1" sx={{
                color: "#B8A28F", // טקסט בצבע שמנת
                marginBottom: 1,
            }}>
                {recipe.description}
            </Typography>

            <Typography variant="subtitle2" sx={{
                color: "#B8A28F", // צבע שמנת
                marginBottom: 2,
            }}>
                חומרים:<br />
                {/* {recipe.ingredients?.map((ingredient) => (
                <Typography  variant="body1" sx={{ color: "#B8A28F", display: 'block' }}>
                    - {ingredient}
                </Typography>
            ))} */}
            </Typography>
            {recipe.ingredients?.map((ingredient, index) => (
                <Typography key={index} variant="body1" sx={{ color: "#B8A28F", display: 'block' }}>
                    - {ingredient}
                </Typography>
            ))}

            <Typography variant="h6" sx={{ color: "#FFD700", marginBottom: 1 }}>
                הוראות
            </Typography>

            <Typography variant="body1" sx={{
                color: "#B8A28F", // צבע שמנת
                marginBottom: 2,
            }}>
                {recipe.instructions}
            </Typography>

        </Box>
    );
});

export default RecipeDetail;
