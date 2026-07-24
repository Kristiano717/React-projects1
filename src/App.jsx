import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx'
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
function App() {
  return (
    <>
      <Student name="krish" age={20} />
      <Student name="Daksh" age={19} />
      <Header />
      <Footer />
      <Food/>
      <Card/>
      <Button/>
    </>
  );
}

export default App;
