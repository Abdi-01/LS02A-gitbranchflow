import logo from './logo.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import NavbarComponent from './components/navbar/NavbarComponent'
import FooterComponent from './components/footer/FooterComponent'
import Headline from './components/headline';
import LeftSideCard from './components/LeftSideBar';

export default function App() {
  return (
    <>
      <NavbarComponent />
      <main>
        <Headline />
      <div className='container'>
        <LeftSideCard />
      </div>
      </main>
      <FooterComponent />
    </>
  )
}
