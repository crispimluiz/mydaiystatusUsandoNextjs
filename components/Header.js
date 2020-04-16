import react from 'react'
import NavBar from '../components/NavBar.js'

const Header = () => {
return (
        <div className = 'bg-gray-200'>
            <h1>
                <img className='h-24 mx-auto py-4' src='/logo.png' alt='Vírus!!!' />
            </h1>
            <NavBar />
        </div>
        
    )
}

export default Header
