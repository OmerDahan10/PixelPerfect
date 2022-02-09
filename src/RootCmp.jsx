import './styles/main.scss';
import { Routes,Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import { Header } from './cmps/Header';

export function RootCmp() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
       <Routes>
          <Route element = {<HomePage/>} path='/'/>
       </Routes>
      </main>
    </div>
  );
}


