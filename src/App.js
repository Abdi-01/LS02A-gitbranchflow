import logo from './logo.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import NavbarComponent from './components/LSN-01/NavbarComponent'
import FooterComponent from './components/LSN-01/FooterComponent'

export default function App() {
	return (
		<>
      <NavbarComponent />
        <main>
          <h1>CONTENT</h1>
        </main>
			<FooterComponent />
    </>
	)
}
