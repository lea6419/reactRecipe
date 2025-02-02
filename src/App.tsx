
import {  CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./provider&context/UserProvider";
import AppRoutes from "./AppRoute";
import AppLayout from "./component/layot/AppLayot";
import UserControls from "./component/user/UserControllers";
import theme from "./theme";
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles
  styles={{
    body: {
      // backgroundImage: "url('/images/1.png')",
      backdropColor: "rgba(0, 0, 0, 0.5)",  
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    },
  }}
/>
    <BrowserRouter>
      <UserProvider>
        <AppLayout >
        <UserControls/>
        </AppLayout>
        <AppRoutes/>
      </UserProvider>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
