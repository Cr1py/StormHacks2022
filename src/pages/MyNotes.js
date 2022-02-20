import React from 'react'
import './MyNotes.scss';

function MyNotes() {
    
    return (
        <div>
            <section>
                <h1 className='header'>My Notes</h1>
            </section>
            <section>
                <div className='notes'>
                    <h1>Stormhacks</h1>
                    <p>Noteshelf </p>
                    <p>Our submission for stormhacks 2022!!!</p>
                </div>
                <div className='notes'>
                    <h1>Test Run</h1>
                    <p>Testing, testing 123</p>
                </div>
            </section>
        </div>

    )
}

export default MyNotes