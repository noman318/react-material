import './App.css';
// import MuiButton from './components/MuiButton';
import {MuiTextFields} from './components/MuiTextFields';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      {/* <MuiButton/> */}
      <MuiTextFields />
    </div>
  );
}

export default App;
