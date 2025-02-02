import  { useState, useContext } from "react";
import { Modal, TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { UserContext } from "../../provider&context/UserProvider";
const Register = () => {
  const { state, dispatch } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8787/api/user/register', {
        email: email,
        password: password
      });
  
      dispatch({ type: "LOGIN", payload: res.data.user });
      setError('');
      setIsOpen(false);
    } catch (e) {
      dispatch({ type: "LOGOUT" });
      setError("המשתמש קיים במערכת.");
      console.log(e);
    }
  };
  if(state.user) return null

  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        הרשמה 
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ ...modalStyle }}>
          <Typography variant="h6">הרשמה</Typography>
          <TextField
            label="מייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="סיסמא"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button variant="contained" onClick={handleLogin}>
            הרשם
          </Button>
        </Box>
      </Modal>
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

export default Register;
