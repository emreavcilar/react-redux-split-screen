import React, { Component } from 'react';
import { connect } from "react-redux";
import Split from 'react-split';
import TopLeftComponent from '../components/topLeftComponent'
import TopRightComponent from '../components/topRightComponent'
import BottomLeftComponent from '../components/bottomLeftComponent'
import BottomRightComponent from '../components/bottomRightComponent'
import { setHeaderToSaveMode } from '../../actions/header'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topVerticalPos: [],
            bottomVerticalPos: [],
            horizontalPos: []
        };
    }
    onVerticalTopDragEnd(e) {
        this.setState({
            topVerticalPos: e
        });

        this.props.dispatch(setHeaderToSaveMode(true))
    }
    onVerticalBottomDragEnd(e) {
        this.setState({
            bottomVerticalPos: e
        })
        this.props.dispatch(setHeaderToSaveMode(true))
    }
    onHorizontalDragEnd(e) {
        this.setState({
            horizontalPos: e
        })
        this.props.dispatch(setHeaderToSaveMode(true))
    }

    render() {
        return (
            <div className="main-container">

                <Split
                    cursor="col-resize"
                    direction="vertical"
                    onDragEnd={(e) => { this.onHorizontalDragEnd(e) }}
                    sizes={[50, 50]}
                    style={{height:'100%'}}
                >
                    {/* <div> */}

                        <div className="split split-vertical content">
                            <Split
                                cursor="row-resize"
                                onDragEnd={(e) => { this.onVerticalTopDragEnd(e) }}
                                sizes={[70, 30]}
                                style={{minHeight:'44vh', height:'100%'}} 
                            >
                                <div className="split split-horizontal content">
                                    <TopLeftComponent />
                                </div>
                                <div className="split split-horizontal content">
                                    <TopRightComponent posVals={this.state} />
                                </div>
                            </Split>
                        </div>

                    {/* </div> */}

                    {/* <div> */}

                        <div className="split split-vertical content">
                            <Split
                                cursor="row-resize"
                                direction="horizontal"
                                onDragEnd={(e) => { this.onVerticalBottomDragEnd(e) }}
                                sizes={[70, 30]}
                                style={{minHeight:'44vh', height:'100%'}} 
                            >
                                <div className="split split-horizontal content">
                                    <BottomLeftComponent />
                                </div>
                                <div className="split split-horizontal content">
                                    <BottomRightComponent />
                                </div>
                            </Split>
                        </div>

                    {/* </div> */}

                </Split>




            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    bottomTabularData: (state.homeReducer && state.homeReducer.bottomTabularData) ? state.homeReducer.bottomTabularData : []
});
export default connect(mapStateToProps)(Home);
