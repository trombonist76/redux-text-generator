import './App.css';
import Content from './components/Content';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Form />
        <Content />
      </div>
    </div>
  );
}

export default App;
