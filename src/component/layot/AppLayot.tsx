// src/layout/AppLayout.js
import React from 'react';
import { Box } from '@mui/material';
import Header from '../header';


const AppLayout = ({children }:{ children: React.ReactNode}) => {
    return (
      <><div style={{ position: 'absolute', top: 20, right: 20 }}>
        <Header />
      </div><Box sx={{ padding: 2 }}>
          {children}

        </Box></>
        // </Box>
    );
};

export default AppLayout;
