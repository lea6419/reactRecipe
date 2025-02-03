import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, Modal } from '@mui/material';
import { useContext, useState } from 'react';
import { UserContext } from '../../provider&context/UserProvider';
import { Recipe } from '../../mpdels/models';
import recipeStore from '../../store/RecipeStors';
const AddRecipe = () => {
  const { state } = useContext(UserContext);
  const [ingredients, setIngredients] = useState(['']);
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState('');
  const validateRecipe = Yup.object().shape({
    title: Yup.string().required("שם המתכון הוא שדה חובה"),
    description: Yup.string().required("תיאור המתכון הוא שדה חובה"),
    ingredients: Yup.array().of(Yup.string().required("שדה מוצר הוא שדה חובה"))
      .min(2, "יש להוסיף לפחות שתי מוצרים")
  });
  const { register, handleSubmit, formState: { errors } } = useForm<Recipe>({
    resolver: yupResolver(validateRecipe)
  });
  const onSubmit: SubmitHandler<Recipe> = async (data) => {
    data.authorId = state.user?.id; // קבלת authorId מה-state
    data.ingredients = ingredients;
    console.log(data);

    try {
      console.log(state.user?.id);
      await recipeStore.addRecipe(data);
      setIsOpen(false);
    } catch (e) {
      console.error(e);
      setError('שגיאה בשרת');
    }
  };
  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };
  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };
  if (!state.user) {
    return <Typography variant="h6" color="error">עליך להתחבר כדי להוסיף מתכון.</Typography>;
  }
  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h4" gutterBottom>הוסף מתכון</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('title')}
              label="שם המתכון"
              variant="outlined"
              fullWidth
              error={!!errors.title}
              helperText={errors.title?.message}
              margin="normal" />
            <TextField
              {...register('description')}
              label="תיאור המתכון"
              variant="outlined"
              fullWidth
              error={!!errors.description}
              helperText={errors.description?.message}
              margin="normal" />
            <TextField
              {...register('description')}
              label="אופן ההכנה "
              variant="outlined"
              fullWidth
              error={!!errors.description}
              helperText={errors.description?.message}
              margin="normal" />
            {ingredients.map((ingredient, index) => (
              <TextField
                key={index}
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                label={`מוצר ${index + 1}`}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.ingredients?.[index]}
                helperText={errors.ingredients?.[index]?.message} />
            ))}
            <Button type="button" variant="outlined" onClick={handleAddIngredient}>הוסף מוצר</Button>
            <Button type="submit" variant="contained" color="primary">הוסף מתכון</Button>
          </form>
        </Box>
      </Modal>
      <Typography variant="h6" color="error">{error}</Typography>
    </>
  );
};
const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default AddRecipe;
