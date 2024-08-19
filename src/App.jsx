
import './App.css'
import Banner from './components/home/banner/Banner'
import MarqueeContainer from './components/home/marquee/MarqueeContainer'
import Navbar from './components/home/Navbar/Navbar'
function App() {
 
  return (
    <>
      <div>
      <Navbar></Navbar>
      <Banner></Banner>
      </div>
      <div>
        <MarqueeContainer></MarqueeContainer>
      </div>
      
      
      
    </>
  )
}

export default App
