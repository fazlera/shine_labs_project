
import './App.css'
import Features from './components/features/Features'
import Banner from './components/home/banner/Banner'
import MarqueeContainer from './components/home/marquee/MarqueeContainer'
import Navbar from './components/home/Navbar/Navbar'
import SleepContainer from './components/sleepContainer/SleepContainer'
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

      <div>
        <Features></Features>
      </div>

      <div>
        <SleepContainer></SleepContainer>
      </div>
      
      
      
    </>
  )
}

export default App
