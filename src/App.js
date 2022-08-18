import logo from './logo.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import NavbarComponent from './components/navbar/NavbarComponent'
import FooterComponent from './components/footer/FooterComponent'

export default function App() {
	return (
		<>
      <NavbarComponent />
        <main>
          <h1 className='text-center fw-bold my-5'>CONTENT</h1>
        </main>
			<FooterComponent />
    </>
	)
}
