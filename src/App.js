import './App.css';
import Mensaje from './Mensaje.js'


const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En el curso' />
      <Mensaje color='yellow' message='De React' />
    </div>
  );
}

export default App;
