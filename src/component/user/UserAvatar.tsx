import React, { useContext } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { UserContext } from "../../provider&context/UserProvider";


const UserAvatar: React.FC = () => {
  const { state } = useContext(UserContext);
  console.log(state.user);
  if (!state.user) return null;

  return (
    <Box display="flex" alignItems="center">
      <Avatar>{state.user.firstName?.charAt(0)}</Avatar>
      <Typography sx={{ mx: 2 }}>{state.user.firstName}</Typography>
    </Box>
  );
};

export default UserAvatar;
