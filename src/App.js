import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { LeftSidebar } from './components/left-sidebar';
import { Main } from './components/main';
import { RightSidebar } from './components/right-sidebar';

function App() {
  return (
    <div className="App bg-primary">
      <Header />

      <div className='flex items-center justify-between max-w-[1600px] mx-auto flex-wrap gap-x-12'>
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
