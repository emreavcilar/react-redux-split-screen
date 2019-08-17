import React, { Component } from 'react';
import { connect } from "react-redux";

class TopRightComponent extends Component {

    render() {
        return (
            <div className="settings-container">
                <div className="settings-block">
                    <p className="title">Ayarlar</p>
                    <p>
                        <span><strong>Yatay Pencere Değerleri : </strong></span>
                        {this.props.posVals.horizontalPos.length > 0 &&
                            <span>
                                {this.props.posVals.horizontalPos[0]} , {this.props.posVals.horizontalPos[1]}
                            </span>
                        }
                    </p>

                    <p>
                        <span><strong>Üst Dikey Pencere Değerleri : </strong></span>
                        {this.props.posVals.topVerticalPos.length > 0 &&
                            <span>
                                {this.props.posVals.topVerticalPos[0]} , {this.props.posVals.topVerticalPos[1]}
                            </span>
                        }
                    </p>

                    <p>
                        <span><strong>Alt Dikey Pencere Değerleri : </strong></span>
                        {this.props.posVals.bottomVerticalPos.length > 0 &&
                            <span>
                                {this.props.posVals.bottomVerticalPos[0]} , {this.props.posVals.bottomVerticalPos[1]}
                            </span>
                        }
                    </p>



                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    homeData: (state.homeReducer && state.homeReducer.success) ? state.homeReducer.success : {}
});
export default connect(mapStateToProps)(TopRightComponent);
