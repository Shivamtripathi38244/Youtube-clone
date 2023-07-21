import {AppContext} from "./context/contextapi";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header"
import Feed from "./components/Feed"
import LeftMenuItem from "./components/LeftMenuItem"
import LeftNav from "./components/LeftNav"
import SearchResult from "./components/SearchResult"
import SuggestionVedioCard from "./components/SuggestionVedioCard"
import VedioCard from "./components/VedioCard"
import VedioDetails from "./components/VedioDetails"

const  App=()=>{
    return(
        <>
       <AppContext>
          <BrowserRouter>
          <div className="flex flex-col h-full">
          <Header/>
                <Routes>
                    <Route path="/" element={<Feed/>}/>
                    <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
                    <Route path="/video/:id" element={<VedioDetails/>}/>
                </Routes>
            
          </div>
          </BrowserRouter>
       </AppContext>
        </>
    )
}
export default App;