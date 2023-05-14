/**
 * This function return the HTML Conent of the Login Route
 * @returns 
 */
function Login() {
    return (
        <div>
            <h2>Login Page</h2>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Submit</button>
        </div>
    );
}

export default Login;