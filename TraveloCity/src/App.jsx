import React from 'react'
import { Route,Routes,Link} from 'react-router-dom';
import Home from "./components/Home"
 import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
import DestinationDetails from './components/DestinationDetails'
import PerfectTrip from './components/PerfectTrip';
// import Navbar from './components/Navbar'


function App() {
  return (
        <div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path='/SignIn' element={<SignIn/>}/>
              <Route path="/DestinationDetails" element={<DestinationDetails />} />
              <Route path='/PerfectTrip' element={<PerfectTrip/>}/>
              {/* <Route path="/Header" element={<Header />} />
              <Route path="/Footer" element={<Footer />} /> */}
              {/* <Route path="/Navbar" element={<Navbar />} /> */}
            </Routes>
          
        </div>
        )

}
export default App;

