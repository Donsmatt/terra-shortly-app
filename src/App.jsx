import Navbar from "./components/Navbar";
// import { BrowserRouter } from "react-router-dom";
// import "./styles/index.scss";
import Header from "./components/Header";
import './styles/variable.scss'

function App() {
  return (
    
      
    <>
      {/* <Navbar links={[
          { to: "/features", label: "Features" },
          { to: "/pricing", label: "Pricing" },
          { to: "/resources", label: "Resources" },
        ]}
        isUser={true}
      /> */}
      <Header/>
      <h1>URL Shortener</h1>
    </>
   
  );
}

export default App;
