function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-brand">
                    <div className="logo">
                        <span className="logo-icon">P</span>
                        Preppilot
                    </div>

                    <p>
                        AI-powered interview preparation platform
                        built to help students become interview ready.
                    </p>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Platform</h4>
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#practice">Practice</a>
                    </div>

                    <div>
                        <h4>Resources</h4>
                        <a href="#resources">Learning Resources</a>
                        <a href="#companies">Company Prep</a>
                        <a href="#about">About</a>
                    </div>

                    <div>
                        <h4>Account</h4>
                        <a href="/login">Login</a>
                        <a href="/register">Create Account</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Preppilot. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;