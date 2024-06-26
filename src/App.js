import logo from './logo.svg';
import './App.css';
import './Header.css'
import './Content.css'
import './Footer.css'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
