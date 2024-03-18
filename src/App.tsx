import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Browse from "./assets/components/browse";
import { Header } from "./assets/components/Header";
import { CardPortifolio } from "./assets/components/portifolioCard";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <CardPortifolio/>
      <Routes>
        <Route path="/" element={<Navigate to='/browse'/>}/>
        <Route path="/Browse" element={<Browse/>}/>
        <Route path="*" element={<h1>aaa</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;