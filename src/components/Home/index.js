import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Button, Badge, Avatar, Rate } from 'antd'

export default function Home() {
  const navigate = useNavigate()

  function activeChange({ isActive }) {
    return isActive ? 'isActives hover' : 'isActives'
  }

  function back() {
    navigate(-1)
  }

  function foward() {
    navigate(1)
  }


  function signUp() {
    navigate('/signUp', {
      replace: true,
      state: {
        id: 'asdgasdf23412341234134sad',
      },
    })

    function rateChange(value) {
      console.log('评分：', value)
    }

    return (
      <div>
        <h1>Home Page</h1>
        <Button onClick={back} style={{ marginRight: 5 }} type="primary" danger>
          后退
        </Button>
        <Button onClick={foward} style={{ marginRight: 5 }} type="primary" danger>
          前进
        </Button>
        <Button onClick={signUp}>sign up</Button>

        <Rate allowHalf onChange={rateChange}></Rate>

        <Badge count={1000} overflowCount={9999} offset={[1, 1]} showZero>
          <Avatar shape="square" size="large" />
        </Badge>

        <NavLink to="news" className={activeChange}>
          News
        </NavLink>
        <NavLink to="messages" className={activeChange}>
          Message
        </NavLink>

        <NavLink to="/sign" className={activeChange}>
          sign
        </NavLink>
        <Outlet />
      </div>
    )
  }
