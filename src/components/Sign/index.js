import React from 'react'
import { Form, Input } from 'antd'

export default function Sign() {
	return (
		<div>
			<Form>
				<Form.Item
					label="username"
					rules={[{ required: true, message: 'please input your username' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="password"
					rules={[
						{
							required: true,
							message: 'please input your password',
						},
					]}
				>
					<Input />
				</Form.Item>
			</Form>
		</div>
	)
}
