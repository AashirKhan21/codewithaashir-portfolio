import Toggle from './Components/toggle/toggle';
import Intro from './Components/intro/intro';
import About from './Components/about/about';
import ProductList from './Components/productList/productList';
import Contact from './Components/contact/contact';
import { useContext } from 'react';
import { ThemeContext } from './Context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
