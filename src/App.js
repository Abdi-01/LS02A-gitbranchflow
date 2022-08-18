import logo from './logo.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import NavbarComponent from './components/navbar/NavbarComponent'
import FooterComponent from './components/footer/FooterComponent'
import Headline from './components/headline';
import LeftSideCard from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

export default function App() {
  return (
    <>
      <NavbarComponent />
      <main>
        <Headline />
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <LeftSideCard />
            </div>
            <div className='col-4'>
              <RightSideBar />
            </div>

          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  )
}
