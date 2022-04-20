import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
export default function NewContent() {
	const {
		state: { id, name, age },
	} = useLocation()

	const navigate = useNavigate()

	function navGo() {
		navigate('/about', {
			replace: true,
			state: {
				path: 'about',
			},
		})
	}

	/* 	// search
	const [search, setSearch] = useSearchParams()
	console.log('search', search.get('id'))

	// locations
	const locations = useLocation()
	console.log('locations', locations.search) */

	// state
	return (
		<div>
			<h3>{id}</h3>
			<h3>{name}</h3>
			<h3>{age}</h3>

			<Button type="primary" onClick={navGo}>
				About
			</Button>
		</div>
	)
}
