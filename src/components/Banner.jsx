import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container">
            <div className="banner">
                <h1>Artixx is the best way to learn </h1>
                <div className="buttons">
                    <Link to={"/register"}>
                        <button button className="blob-btn">Start Now
                            <span className="blob-btn__inner">
                                <span className="blob-btn__blobs">
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                    <br />
                    {/* ... */}
                </div>
            </div>
        </div >
    );
};

export default Banner;
