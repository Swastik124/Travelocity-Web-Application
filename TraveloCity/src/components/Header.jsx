import React, { useState, useEffect } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom'; // <-- for navigation

function Home() {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedName = localStorage.getItem('firstname');
        if (storedName) {
            setUserName(storedName);
        } else {
            setUserName('');
        }
    }, []);

    const handleSignIn = () => {
        navigate('/SignIn');
    };

    const handleSignOut = () => {
        localStorage.clear();
        setUserName('');
        navigate('/SignIn');
    };

    return (
        <div className="homeContainer">
            <header>
                <div className="header-left">
                    <span className="logo-text">
                        <span className="star">✦</span>
                        travelocity
                    </span>
                    <span className="powered">Powered by Expedia</span>
                </div>
                <div className="header-right">
                    <button className="app-btn">Get the app</button>
                    <span className="lang-select">🌐 English</span>
                    <span className="header-link">List your property</span>
                    <span className="header-link">Support</span>
                    <span className="header-link">Trips</span>
                    {userName ? (
                        <button onClick={handleSignOut} className="header-link sign-btn">
                            Sign out
                        </button>
                    ) : (
                        <button onClick={handleSignIn} className="header-link sign-btn">
                            Sign in
                        </button>
                    )}
                </div>
            </header>
            {/* Other content */}
        </div>
    );
}

export default Home;
