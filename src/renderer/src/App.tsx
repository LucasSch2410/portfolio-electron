import { ToastContainer } from "react-toastify"
import AllRoutes from "./routes/AllRoutes"
import 'react-toastify/dist/ReactToastify.css';
import { MouseProvider } from "./context/mouseContext";


function App(): JSX.Element {

  return (
    <>
        <ToastContainer />
        <MouseProvider>
            <AllRoutes />
        </MouseProvider>   
    </>
  )
}

export default App
