import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Messages() {
  const [messages] = useState([
    { id: 0, message: 'msgone' },
    { id: 1, message: 'msgtwo' },
    { id: 2, message: 'msgthree' },
  ])

  return (
    <div>
      {messages.map(item => {
        return (
          <div key={item.id}>
            {
              /* 路由传参 params */
              <Link to={`detail/${item.id}/${item.message}`}>
                {item.message}
              </Link>
            }
          </div>
        )
      })}
      <Outlet />
    </div>
  )
}
