import React from 'react'
import { useParams, useMatch } from 'react-router-dom'

export default function Detail() {
  // useParams 用来接受路由参数
  const { id, message } = useParams()
  console.log('useParams', useParams())

  const match = useMatch('/home/messages/detail/:id/:message')
  console.log('match', match)

  return (
    <div>
      <h2>{id}</h2>
      <h2>{message}</h2>
    </div>
  )
}
