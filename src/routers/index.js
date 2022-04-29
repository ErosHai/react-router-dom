import Home from '../components/Home'
import About from '../components/About'
import News from '../components/Home/News'
import Messages from '../components/Home/Messages'
import Detail from '../components/Home/Messages/Detail'
import NewContent from '../components/Home/News/NewContent'
import Sign from '../components/Sign'
import { Navigate } from 'react-router-dom'

export default [
	{
		path: '/home',
		element: <Home />,
		children: [
			{
				path: '/home/news',
				element: <News id={'new_id'} />,
				children: [
					{
						path: 'newContent',
						element: <NewContent />, // search传参不需要占位
					},
				],
			},
			{
				path: '/home/messages',
				element: <Messages />,
				children: [
					{
						path: 'detail/:id/:message', // params传参需要携带参数要占位
						element: <Detail />,
					},
				],
			},
		],
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/sign',
		element: <Sign />,
	},
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
]
