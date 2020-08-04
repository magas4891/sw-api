import React from "react";

const LoginPage = ({ isLoggedIn, onLogin }) => {

    return(
        <div className="jumbotron">
            { !isLoggedIn && <p>Login to see secret page!</p>}
            <button
                className="btn btn-primary"
                onClick={onLogin} >
                { isLoggedIn ? 'Logout' : 'Login' }
            </button>
        </div>
    );
};

export default LoginPage;