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
				<div className='min-h-screen bg-gray-100 flex flex-col'>
					<Header />
					<Routes />
				</div>
			</Router>
		</Provider>
	)
}

export default App
