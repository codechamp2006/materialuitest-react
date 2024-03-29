import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Material-ui">
      <Checkbox variant="contained" color="secondary"></Checkbox>
      <Button variant="contained" color="secondary"> Hello World </Button>
      <Button variant = "contained" color = "primary"> Click me </Button>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React LOL
        </a>
      </header>
    </div>
  );
}

function doctorize(name){
  return `Dr. ${name}`;
}

function yell(name){
  return `Hey, ${name}`;
}

export default App;
