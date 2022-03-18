import logo from './logo.svg';
import './App.css';
import Fish from "./Fish";

function App() {
  const name = 'Shark'
  const sayHello = () => {
    console.log('Hello!')
  };
  return (
    <div className="App">
 <Fish name={name} sayHello={sayHello}/>
    </div>
  );
}

export default App;
