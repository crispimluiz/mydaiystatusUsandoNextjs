import react from 'react'
import Link from 'next/link'//next controla os links

const NavBar = () => {
    return (
        //hover é quando o mouse passa em cima
        <div className = 'bg-gray-500 py-4 text-center'>
            <Link href='/create-status'>
                <a className= 'p-2 hover:underline hover:text-red-800'>Como estou</a>
            </Link>
            <Link href='/app'>
                <a className= 'p-2 hover:underline hover:text-red-800'>APP</a>
            </Link>
            <Link href='/entrar'>
                <a className= 'p-2 hover:underline hover:text-red-800'>Entrar</a>
            </Link>
        </div>
    )
}
export default NavBar
