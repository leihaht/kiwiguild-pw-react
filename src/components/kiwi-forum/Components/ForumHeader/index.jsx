import React from 'react';

const ForumHeader = () => (
    <header className="Hero WelcomeHero">
        <div className="container">
            <button className="Hero-close Button Button--icon Button--link hasIcon" type="button"><i className="icon fa fa-times Button-icon"></i></button>
            <div className="containerNarrow">
                <h2 className="Hero-title">Welcome to the Flarum Community</h2>
                <div className="Hero-subtitle">
                Get support using and extending Flarum, the next-generation forum software that makes online discussion fun. New here? Please <a href="http://flarum.org/docs/faq">read the FAQ</a> before posting.
                </div>
            </div>
        </div>
    </header>
);

export default ForumHeader;
