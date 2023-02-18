import Drinkapi from "./components/Drinkapi";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Drink2api from "./components/Drink2api";
import Descrizione from "./components/Descrizione";



function App() {
  return <Router>
            <Routes>
              <Route path='/' element={<Drinkapi />} />
              <Route path='/drink2' element={<Drink2api />} />
              <Route path='/descrizione' element={<Descrizione />} />
            </Routes>

  </Router>
}

export default App;
