
import { observer } from "mobx-react";
import { Link, Outlet } from "react-router-dom";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import recipeStore from "../../store/RecipeStors";

const RecipeList = observer(() => {
    return (
        <Box sx={{ display: "flex", height: "100vh", padding: 2, marginTop: "50px" }}>
            {/* רשימת מתכונים */}
            <Box sx={{
                width: '300px',
                borderRight: "1px solid #ddd",
                paddingRight: 2,
                backgroundColor: "#1E1E1E", // רקע כהה לרשימה
                paddingTop: 2,
                borderRadius: '8px',
            }}>
                <Typography variant="h6" gutterBottom sx={{
                    textAlign: 'center', 
                    fontWeight: 'bold', 
                    color: '#FFD700', // צבע זהב לכותרת
                    marginBottom: 2
                }}>רשימת מתכונים</Typography>
                <List>
                    {recipeStore.recipes.map((recipe) => (
                        <ListItem key={recipe.id} sx={{
                            marginBottom: 1,
                            padding: 1,
                            backgroundColor: "#333",
                            borderRadius: '8px',
                            '&:hover': { backgroundColor: "#444" },
                        }}>
                            <ListItemText sx={{ textAlign: 'center' }}>
                                <Link 
                                    to={`/recipes/${recipe.id}`} 
                                    style={{ 
                                        textDecoration: 'none', 
                                        color: '#FFD700', // צבע זהב לכותרת המתכון
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                    }}>
                                    {recipe.title}
                                </Link>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* כאן יוצגו פרטי המתכון */}
            <Box sx={{ flexGrow: 1, paddingLeft: 2 }}>
                <Outlet />
            </Box>
        </Box>
    );
});

export default RecipeList;
