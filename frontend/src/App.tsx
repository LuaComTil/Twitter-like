import { useState } from "react";
import Header from "./components/Header"
import Feed from "./components/Feed"
import Login from "./components/Login";
import { AuthProvider } from "./Context/AuthContext";
import Register from "./components/Register";


const App: React.FC = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const openLogin = () => setIsLoginVisible(true);
  const closeLogin = () => setIsLoginVisible(false);

  const openRegister = () => setIsRegisterVisible(true);
  const closeRegister = () => setIsRegisterVisible(false);

  return (
    <>
      <AuthProvider>
        <Header onLoginClick={openLogin} onRegisterClick={openRegister}/>
        <Feed/>
        <Login visible={isLoginVisible} onClose={closeLogin}/>
        <Register visible={isRegisterVisible} onClose={closeRegister}/>
      </AuthProvider>
    </>
  )
}

export default App
