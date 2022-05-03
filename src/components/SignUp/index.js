import React from 'react'
import { Form, Input, Button } from 'antd'
import { useLocation } from 'react-router-dom'

export default function SignUp() {
	const {
		state: { id },
	} = useLocation()
	console.log(id)

	return (
		<div>
			<Form
				name="basic"
				colon={false}
				labelAlign="right"
				layout={'horizontal'}
				size="small"
			>
				<Form.Item
					label="username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Input your username',
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="password"
					name="password"
					rules={[{ required: true, message: ' Input your password' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
