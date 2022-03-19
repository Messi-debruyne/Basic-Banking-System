import React from 'react'
import  { Link } from 'react-router-dom'
import './style/Home.css'

function Home() {
  return (
      <>
        <div className="header">
            <Link to='/'>
            <div className="home">
                <p>Sparks Bank</p>
            </div>
            </Link>
            <div className="options">
                <p>About</p>
                <p>Awards</p>
                <p>Contact</p>
            </div>
        </div>

        <div className="main">
            <Link to='user'>
            <span className="user btn">Users</span>
            </Link>
            <Link to='transaction'>
            <span className="transactions btn">Transactions</span>
            </Link>
        </div>

        <div className="footer">
            <span>&#169; copyright 2022</span>
            <span>The Sparks Foundation</span>
        </div>
      </>
    )
}

export default Home