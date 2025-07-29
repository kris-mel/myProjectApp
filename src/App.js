import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Tehnologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <div className="App">
        <ul>
          <a href='#s'>HTML</a>
          <a href='#s'>HTML1</a>
          <a href='#s'>HTML2</a>
          <a href='#s'>HTML3</a>
        </ul>
      </div>
    </div>
  );
}

const Tehnologies = () => {
  return (
    <div>
      <div className="App">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>REACT</li>
        </ul>
      </div>
    </div>
  );
}

export default App;