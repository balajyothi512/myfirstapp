import logo from './logo.svg';
import './App.css';
import Demo from './components/demo'
import J from './components/jyothi'
import ClassBasedCom from './components/classBasedComponent'
import HooksInc from './components/hooksinc'

function App() {
  return (
    <div className="App">
      <h1>Hello Nec</h1>
      <Demo></Demo>
      <Demo />
      <Demo />
      <J name="jyothi">nec</J>
      <J name="siri">nec</J>
      <home />
      <ClassBasedCom name="demo" />
      <h1>Hooks Concept</h1>
      <HooksInc />
    </div>
  );
}

let Home=()=>{
  return(
    <h1>This is my Home Component </h1>
  );
}

export default App;
