import { AuthProvider } from "./Context/AuthContext";
import HomePage from "./pages/HomePage";


const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <HomePage/>
      </AuthProvider>
    </>
  )
}

export default App
