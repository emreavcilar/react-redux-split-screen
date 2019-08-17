import React, { Component } from 'react';
import { connect } from "react-redux";

class Header extends Component {

    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="header-block">
                        <div className="logo-block">
                           

                        </div>

                        <div className="info-block">
                            <div className="state-block">
                                {this.props.saveMode === false ?
                                    <img src="../../assets/img/baseline-vertical_split-24px.svg" alt="icon" />
                                    :
                                    <img src="../../assets/img/baseline-save-24px.svg" alt="save" />
                                }
                                <span>Çalışma Alanı 1</span>
                            </div>

                            <div className="short-name-block">
                                <span>EA</span>
                            </div>

                            <div className="name-greeting-block">
                                Merhaba, Hoşgeldin Emre
                                </div>

                        </div>
                    </div>

                </div>

            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    saveMode: state.headerReducer && state.headerReducer.saveMode
});


export default connect(mapStateToProps)(Header);
