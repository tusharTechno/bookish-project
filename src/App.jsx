import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProtectedRoutes from "./lib/ProtectedRoutes";
import LoginPage from "./Pages/LoginPage";
import { AuthProvider } from "./context/AuthProvider";
import Register from "./Pages/Register";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster
        theme="system"
        className="bg-popover text-popover-foreground border-popover"
      />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Register />} />

            <Route path="/" element={<ProtectedRoutes />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
