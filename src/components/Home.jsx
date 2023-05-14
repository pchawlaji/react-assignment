import { Link } from 'react-router-dom';

/**
 * This function return the HTML Conent of the Home Page
 * @returns 
 */
function Home() {
    return (
        <div>
            {/* Render your main components here */}
            <h1>Welcome to My App!</h1>
            <ul>
                <li><Link to={`/login`}>Login</Link></li>
                <li><Link to={`/SignUp`}>Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default Home