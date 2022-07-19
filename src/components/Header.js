import React,{useState}from 'react';
import './styles/Header.css'
import { Link } from 'react-router-dom'
import { MenuOutlined } from '@material-ui/icons'
import {Data} from './Data';

const Header = () => {

    const[open,setOpen] = useState(false)
    const showMenu = () => {
        setOpen(!open)
    }
    return (
        <div className='header'>
            <nav>
                <div className='logo'>
                   <a href='https://www.starlabs.dev/'> <h1>Starlabs   </h1></a>
                </div>
                <ul className='ul-items'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/skills'>Skills</Link>
                    </li>
                  
                     <li>
                        <Link to='/project'>Projects</Link>
                    </li>
                   

                    <div className='hamburger-menu'>
                        <MenuOutlined className='menu'onClick={showMenu} />
                    </div>
                </ul>

            </nav>
            <nav className={open ? 'slider active' : 'slider'}>
                <ul className='slider-ul' onClick={showMenu}>
                    {Data.map((item,index)=>{
                        return(
                            <li key={index} className={item.className}>
                              <Link to={item.path}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>

        </div>
    )
}


export default Header;