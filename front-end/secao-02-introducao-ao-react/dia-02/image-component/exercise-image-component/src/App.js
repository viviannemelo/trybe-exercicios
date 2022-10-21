import './App.css';
import Image from './Image';
import staringCat from './staringCat.jpg';

function App() {
  return (
        <Image source={ staringCat } alternativeText="Cute cat staring" />
  );
}

export default App;
