import Topbar from "./components/Topbar"
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import {BrowserRouter, Route,Routes, } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import NewProduct from "./pages/NewProduct";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
// const admin=true;
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
  <BrowserRouter>
   <ThemeProvider theme={darkTheme}>
    <Routes>
     <Route exact path="/login" element={<Login />} />
    </Routes>
  {admin && (
      <>
      <Topbar/>
     <Box bgcolor={"background.default"} color={"text.primary"}>
     <Stack direction="row" spacing={2} justifyContent="space-between" >
      <Sidebar setMode={setMode} mode={mode}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList/>} />
            <Route path="/user/:userId" element={<User/>} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/product/:productId" element={<Product/>} />
            <Route path="/newproduct" element={<NewProduct/>} />
          </Routes>
      </Stack>
       </Box>
       </>
    )}
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
