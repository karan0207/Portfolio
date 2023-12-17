import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/index.js";
import { About, Contact, Home, Projects } from "./pages/index.js";

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
     
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    
    </main>
  );
};

export default App;
