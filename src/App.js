import './App.css';
import Hello from './components/Hello'
import Navbar from './components/Navbar';
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
    <h1>react start page</h1>
    <Navbar/>
    <Hello/>
    <Login />
    </div>
  );
}
export default App;