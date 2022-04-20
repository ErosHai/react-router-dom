import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Row, Col } from 'antd'
import { Link, Outlet } from 'react-router-dom'

export default function News(props) {
	const [newList] = useState([
		{ id: '001', name: 'zhangsan', age: 27 },
		{ id: '002', name: 'lisi', age: 21 },
		{ id: '003', name: 'wangwu', age: 30 },
	])

	return (
		<div>
			{newList.map(item => {
				return (
					<Row key={uuid()} align="middle" justify="center">
						<Col span={12} style={{ textAlign: 'left', paddingLeft: 50 }}>
							{/* 	search 传参
              <Link
								style={{ width: 40 }}
								to={`newContent?id=${item.id}&name=${item.name}&age=${item.age}`}
							>
								姓名
							</Link> */}
							{/* const url = encodeURLComponent(item.name) */}
							{/* state 传参 */}
							{
								<Link
									to="newContent"
									state={{
										id: item.id,
										name: item.name,
										age: item.age,
									}}
									style={{
										padding: 1,
									}}
								>
									姓名:{item.name}
								</Link>
							}
						</Col>
						<Col span={12} style={{ textAlign: 'left' }}>
							年龄：{item.age}
						</Col>
					</Row>
				)
			})}
			<Outlet />
		</div>
	)
}
