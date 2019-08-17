import React, { Component, Fragment } from 'react';

class Footer extends Component {

    render() {
        return (
            <Fragment>
                <footer>
                    <div className="footer-container">
                        <div className="name-block">
                            <span>Copyright</span>
                        </div>
                        <div className="version-block">
                            <span>V.1.0</span>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}
export default Footer;
