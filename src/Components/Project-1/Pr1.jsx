import { Herosection } from './herosection';
import './project1.css';
export function Project1  () {
    return (
        <div>
                <nav className='hero container'>
                    <div className="logo">
                        <img src="/images Project-1\brand_logo.png" alt="logo"/>
                    </div>
                    <ul>
                        <li href="#">Menu</li>
                        <li href="#">Location</li>
                        <li href="#">About</li>
                        <li href="#">Contact</li>
                    </ul>

                    <button>Login</button>
                </nav>
                
                <Herosection/>
        </div>
    )
}

