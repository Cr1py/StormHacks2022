import React from 'react'
import title from '../img/noteshelf.png'
import logo from '../img/logo.png'
import './home.scss'

function Home() {
    return (
        <div>
            <section>
            <div>
                <img src={title} className='title'/>
                <div className="start">
                    <form action='/addnotes'>
                    <button className='button'>Let's Start</button>
                    </form>
                </div>
            </div>
            <div>
                <img src={logo} className='logo'/>
            </div>
            </section>
        </div>

    )
}

export default Home