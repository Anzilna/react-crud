import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addstudents from './components/Addstudents';
import Navbar from './components/Navbar';
import Read from './components/Read';
import Teacher from './components/Teacher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<Read />}></Route>
          <Route path='/add' element={<Addstudents data={{ id: '', name: '', grade: '' }} method="post" />}></Route>
          {/* <Route path='/teachers' element={<Teacher></Teacher>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
