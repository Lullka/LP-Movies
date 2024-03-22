import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Browse from "./pages/browse";
import { Header } from "./assets/components/Header";
import { CardPortifolio } from "./assets/components/portifolioCard";
import { Watch } from "./pages/watch";
import { Search } from "./pages/search";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <CardPortifolio/>
      <Routes>
        <Route path="/" element={<Navigate to='/browse'/>}/>
        <Route path="/Browse" element={<Browse/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/watch/:id" element={<Watch/>}/>
        <Route path="*" element={<h1>aaa</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;