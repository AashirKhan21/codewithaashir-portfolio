import Intro from './Components/intro/intro';
import About from './Components/about/about';
import ProductList from './Components/productList/productList';
import Contact from './Components/contact/contact';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
