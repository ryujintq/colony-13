import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routing/Routes'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className='h-screen min-h-screen bg-new-world bg-center bg-cover flex flex-col text-white'>
					<Header />
					<Routes />
				</div>
			</Router>
		</Provider>
	)
}

export default App
