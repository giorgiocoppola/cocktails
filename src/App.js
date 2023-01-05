import Drinkapi from "./components/Drinkapi";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Drink2api from "./components/Drink2api";



function App() {
  return <Router>
            <Routes>
              <Route path='/' element={<Drinkapi />} />
              <Route path='/drink2' element={<Drink2api />} />
            </Routes>

  </Router>
}

export default App;
