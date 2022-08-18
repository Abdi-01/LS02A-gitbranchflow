import logo from './logo.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import NavbarComponent from './components/navbar/NavbarComponent'
import FooterComponent from './components/footer/FooterComponent'
import LSN02 from './components/headline';

export default function App() {
  return (
    <>
      <NavbarComponent />
      <main>
        <LSN02 />
      </main>
      <FooterComponent />
    </>
  )
}
