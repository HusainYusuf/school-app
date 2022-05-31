import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css'
import Header from './component/header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
function App() {
  return (
    <Router>
        <div className="container dark">
          <div className="app">
          <Header/>
          <Routes>
            <Route path = "/" element = {<NotesListPage/>} exact/>
            <Route path = 'note/:id' element = {<NotePage/>} />
          </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;