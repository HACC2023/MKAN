import React from 'react';
import './style.css';

const Layout = () => {
    
    return (
        <div>
            <header className="header"> {/* Apply the "header" class */}
                <h1>Lahaina Outreach</h1>
            </header>
            <div className="layout-container">
                <aside className="sidebar">
                    <h2>Explore</h2>
                    <ul>
                        <li><a href="#">Link to Page 1</a></li>
                        <li><a href="#">Link to Page 2</a></li>
                        <li><a href="#">Link to Page 3</a></li>
                        {/* Add more links here */}
                    </ul>
                </aside>

                <main className="main-content">
                    <div className="post-list">
                        <div className="post">
                            <h2>Post Title 1</h2>
                            <p>Content of the first post goes here...</p>
                            <p>Comments: 42</p>
                        </div>
                        <div className="post">
                            <h2>Post Title 2</h2>
                            <p>Content of the second post goes here...</p>
                            <p>Comments: 73</p>
                        </div>
                        {/* Add more posts here */}
                    </div>
                </main>

                <aside className="trending">
                    <h2>Trending</h2>
                    <ul>
                        <li><a href="#">Trending Topic 1</a></li>
                        <li><a href="#">Trending Topic 2</a></li>
                        <li><a href="#">Trending Topic 3</a></li>
                        {/* Add more trending topics here */}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default Layout;
