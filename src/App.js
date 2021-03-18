import Header from './Header.js'
import Footer from './Footer.js'

function App() {
  var name = "Lindsay"
  return (
    <div>
      <Header number="one"/>
      <h2>I'm {name}</h2>
      <Footer />
    </div>
  );
}

export default App;
