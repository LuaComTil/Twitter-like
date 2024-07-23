import { useState } from "react";
import Header from "./components/Header"
import FeedPage from "./FeedPage"
import Login from "./components/Login";
import { AuthProvider } from "./Context/AuthContext";


const App: React.FC = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const openLogin = () => setIsLoginVisible(true);
  const closeLogin = () => setIsLoginVisible(false);

  return (
    <>
      <AuthProvider>
        <Header onLoginClick={openLogin}/>
        <FeedPage/>
        <Login visible={isLoginVisible} onClose={closeLogin} />
      </AuthProvider>
    </>
  )
}

export default App
