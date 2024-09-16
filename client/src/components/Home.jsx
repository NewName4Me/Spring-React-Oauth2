import React from "react";

const Home = () => {

    const googleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };

    const githubLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/github";
    };


    return (
        <div>
            <h2>OAuth Demo</h2>
            <button onClick={googleLogin}>Login con Google</button>
            <button onClick={githubLogin}>Login con Github</button>
        </div>
    );
};

export default Home;