import routers from './routers'
import { NavLink, useRoutes } from 'react-router-dom'
import './App.css'

export default function App() {
	// 匹配路由表 useRoutes
	const element = useRoutes(routers)

	function activeChange({ isActive }) {
		return isActive ? 'isActives hover' : 'isActives'
	}

	return (
		<div className="App">
			<NavLink className={activeChange} to="/home">
				home
			</NavLink>
			<NavLink className={activeChange} to="/about">
				about
			</NavLink>
			<div className="container"> {element} </div>
		</div>
	)
}
