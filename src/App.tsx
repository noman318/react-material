import './App.css';
import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiRating } from './components/MuiRating';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiCheckBox } from './components/MuiCheckBox';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiSelect } from './components/MuiSelect';
// import MuiButton from './components/MuiButton';
// import {MuiTextFields} from './components/MuiTextFields';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      {/* <MuiButton/> */}
      {/* <MuiTextFields /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckBox /> */}
      {/* <MuiSwitch />
      <MuiRating /> */}
      <MuiAutocomplete  />
    </div>
  );
}

export default App;
