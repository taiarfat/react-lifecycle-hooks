import logo from './logo.svg';
import './App.css';
import ClassList from './components/ClassList'
import FunctionList from './components/FunctionList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassList />
        {/* <FunctionList /> */}
      </header>
    </div>
  );
}

export default App;
