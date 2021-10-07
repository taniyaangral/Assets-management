import logo from './logo.svg';
import './App.css';
import {ContextProvider} from "./Context";
import Assets from "./components/Assets";

function App() {
  return (
    <ContextProvider>
      <Assets/>
    </ContextProvider>
  );
}

export default App;
