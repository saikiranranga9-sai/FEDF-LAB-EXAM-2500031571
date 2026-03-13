
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./exam/EventNavBar"
import EventRegistation from "./exam/EventRegistation"
import Home from "./exam/Home";
import EventUsers from "./exam/EventUsers"
import Apidemo from "./exam/Apidemo";



function App() {

  return (
    <BrowserRouter>

    <Navbar/>

    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/" element={<EventRegistation/>} />
    <Route path="/eventusers" element={<EventUsers/>} />
    <Route path="/apidemo" element={<Apidemo/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;