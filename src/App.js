import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PicPart from './components/PicPart/PicPart';

function App() {
    return (
        <div className='App'>
            <Header />
            <Main />
            <PicPart />
            <About />
        </div>
    );
}

export default App;
