// import logo from './logo.svg';

import Accordion from './components/Accordion'
import Link from './components/Link'

function App() {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <div>
      <Link to='/accordion'>Go to Button Page</Link>
      
    </div>
  );
}

export default App;
