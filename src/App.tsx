import React from 'react';
import LoginModal from "./components/bb/LoginModal";
import { UserProvider } from "./components/bb/UserProvider";
import UserUpdateForm from "./components/bb/UserUpdateForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./components/bb/registeri";
import Header from "./components/bb/header";
import Home from "./components/bb/home";
import About from "./components/bb/about";
import UserAvatar from "./components/bb/UserAvatar";
import Box from '@mui/material/Box'; // ייבוא Box

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
          <div style={{ position: 'absolute', top: 20, left: 20 }}>
            <UserAvatar /> {/* הכנס את ה-UserAvatar כאן */}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 20, left: 100 }}> {/* שינוי המיקום */}
            <Box sx={{ display: 'flex', gap: 1 }}> {/* הוספת Box עם gap */}
              <Register />
              <LoginModal />
            </Box>
            <UserUpdateForm />
          </div>
          <div style={{ position: 'absolute', top: 20, right: 20 }}>
            <Header />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
