import React, { useContext, useState } from "react";
import { Modal, TextField, Button, Box, Typography } from "@mui/material";

import axios from "axios";
import { UserContext } from "../../provider&context/UserProvider";


const UserUpdateForm: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(state.user || {});

  const handleUpdate = async () => {
    try {
      console.log(userDetails);
        const res = await axios.put('http://localhost:8787/api/user', userDetails, {
            headers: {  
                'user-id': state.user?.id // ודא שה-id נשלח כאן
            }
           
        });
        console.log(res);
        console.log(userDetails);
        dispatch({ type: "UPDATE", payload:userDetails });
    } catch (e) {
        console.log(e);
    }
    setIsOpen(false);
};


  const handleOpen = () => {
    setUserDetails(state.user || {}); // עדכן את המידע כאשר פותחים את המודאל
    setIsOpen(true);
  };
  if (!state.user) return null;
  return (
    
    <>
 
      <Button variant="contained" onClick={handleOpen}>
        עדכון פרטי משתמש
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ ...modalStyle }}>
          <Typography variant="h6">עדכון פרטים</Typography>
          <TextField
            label="שם פרטי"
            value={userDetails.firstName || ''}
            onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="שם משפחה"
            value={userDetails.lastName || ''}
            onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="אימייל"
            value={userDetails.email || ''}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            fullWidth
            margin="normal"
          />
       
          <TextField
            label="כתובת"
            value={userDetails.address || ''}
            onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="טלפון"
            value={userDetails.phone || ''}
            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleUpdate}>
            שמור
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

export default UserUpdateForm;
