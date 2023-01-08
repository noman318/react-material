import './App.css';
import { MuiSelect } from './components/MuiSelect';
// import MuiButton from './components/MuiButton';
// import {MuiTextFields} from './components/MuiTextFields';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      {/* <MuiButton/> */}
      {/* <MuiTextFields /> */}
      <MuiSelect />
    </div>
  );
}

export default App;
