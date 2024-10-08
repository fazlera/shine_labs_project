
import './App.css'
import Features from './components/features/Features'
import Banner from './components/home/banner/Banner'
import MarqueeContainer from './components/home/marquee/MarqueeContainer'
import Navbar from './components/home/Navbar/Navbar'
import Potent from './components/Potent/Potent'
import Revive from './components/Revive/Revive'
import RoundedImage from './components/RoundedImage/RoundedImage'
import SleepContainer from './components/sleepContainer/SleepContainer'
import Table from './components/Table/Table'
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
      
      <div>
        <Revive></Revive>
      </div>
      
      <div>
        <Potent></Potent>
      </div>

      <div>
        <RoundedImage></RoundedImage>
      </div>

      <div>
        <Table></Table>
      </div>
      
    </>
  )
}

export default App
