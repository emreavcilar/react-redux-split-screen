import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

class BottomRightComponent extends Component {
    render() {
        return (
            <Fragment>
                <div>Hello World !!!</div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    homeData: (state.homeReducer && state.homeReducer.success) ? state.homeReducer.success : {}
});
export default connect(mapStateToProps)(BottomRightComponent);