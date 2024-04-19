import Card from './Card.jsx';
import Navbar from './Navbar'
import Footer from './Footer'
import './App.css';
function App(){
    return(
        <div>
            <Navbar />
            <div className='container'>
               <Card />
               <Card />
               <Card />
        </div>
        <Footer />
        </div>
        
    );

}
export default App;
