import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { LeftSidebar } from './components/left-sidebar';
import { Main } from './components/main';
import { RightSidebar } from './components/right-sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  );
}

export default App;
