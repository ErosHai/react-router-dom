import React from 'react'
import { Button, message, Space } from 'antd'
import { useParams, useLocation } from 'react-router-dom'

export default function About() {
	// params
	const params = useParams()

	// state
	const { state } = useLocation()
	console.log('state', state)

	const info = () => {
		message.info('This is a normal message', 5)
	}

	const success = () => {
		message.success('Success', 2)
	}

	const loading = () => {
		message.loading('Loading...', 2).then(() => {
			message.success('Loading is finished', 2)
		})
	}

	const error = () => {
		message.error('ERROR', 2)
	}

	const warning = () => {
		message.warning('Warning', 2)
	}

	const style = {
		margin: '5px',
	}
	return (
		<div>
			<h1>This is About</h1>
			<Space direction="vertical">
				<Button type="primary" style={style} onClick={info}>
					message
				</Button>
				<Button type="primary" style={style} onClick={success}>
					success
				</Button>
				<Button type="primary" style={style} onClick={loading}>
					loading
				</Button>
				<Button onClick={error}>error</Button>
				<Button onClick={warning}>warning</Button>
			</Space>
		</div>
	)
}
