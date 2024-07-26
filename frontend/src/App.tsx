import { AuthProvider } from "./Context/AuthContext";
import FeedPage from "./pages/FeedPage";


const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <FeedPage/>
      </AuthProvider>
    </>
  )
}

export default App
