import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { getTopTabularData, setVisibleStatusTopTabular } from '../../actions/home'
// import * as ReactDOM from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TopLeftComponent extends Component {
    refFilterBlock = null;
    refFilterBtn = null;

    constructor(props) {
        super(props);
        props.dispatch(getTopTabularData())
        this.state = {
            currentData: null,
            currentYear: null,
            toggleFilterBlock: false
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.onWindowClick)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick);
    }

    onWindowClick = (event) => {
        // let filterBtn = ReactDOM.findDOMNode(this.refs.filterBtn);
        // this.filterBlock = ReactDOM.findDOMNode(this.refs.filterBlock)

        if ((this.refFilterBtn && !this.refFilterBtn.contains(event.target)) && (this.refFilterBlock && !this.refFilterBlock.contains(event.target))) {
            this.setState({
                toggleFilterBlock: false
            })
        }
    };


    static getDerivedStateFromProps(props, state) {
        //decoration of data in first run !!! data must be ready !!
        if (state.currentData === null && props.topTabularData && props.topTabularData.byYear) {
            return {
                currentYear: props.topTabularData.byYear[0].year,
                currentData: props.topTabularData.byYear[0].tabularData,
                // selectedFilters: Object.assign({},props.topTabularData.props) 
            }
        }
        return null;
    }

    getSelectedYearData(e) {
        const value = e.target.value;
        this.setState({
            currentData: this.props.topTabularData.byYear.filter((o) => { return o.year === value })[0].tabularData
        });
    }

    openFilter() {
        this.setState({
            toggleFilterBlock: !this.state.toggleFilterBlock
        })
    }

    filterData(item) {
        // SEND TO STORE REDUX
        item.selected = !item.selected;
        this.props.dispatch(setVisibleStatusTopTabular(item))
    }

    render() {
        return (
            <div className="filter-container">
                {this.props.topTabularData &&
                    <Fragment>
                        <div className="filter-header-block">

                            {this.props.topTabularData.byYear &&
                                <div className="select-block">
                                    <select name="year"
                                        defaultValue={this.state.currentYear}
                                        onChange={(e) => { this.getSelectedYearData(e) }}>
                                        <option value="" disabled>Yıl Seçiniz</option>
                                        {
                                            this.props.topTabularData.byYear.map((item, idx) => (
                                                <option value={item.year} key={idx}>{item.year}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            }


                            <div className="top-settings">

                                <div className="filter-btn-block">
                                    <div className="filter-btn">
                                        <img src="../../assets/img/baseline-import_export-24px.svg" alt="export" />
                                    </div>

                                    <div className="filter-btn"
                                        onClick={() => { this.openFilter() }}
                                        ref={(filterBtn)=>{this.refFilterBtn = filterBtn}}
                                    >
                                        <img src="../../assets/img/baseline-settings-20px.svg" alt="settings" />
                                    </div>

                                    <div className="filter-btn">
                                        <img src="../../assets/img/baseline-add-24px.svg" alt="add" />
                                    </div>

                                </div>

                                <ReactCSSTransitionGroup
                                    transitionName="fade"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={300}>

                                    {this.state.toggleFilterBlock === true &&
                                        <div className="filter-block" ref={(filterBlock) => { this.refFilterBlock = filterBlock }}>
                                            {(this.props.topTabularData && this.props.topTabularData.props) &&
                                                <Fragment>
                                                    {this.props.topTabularData.props.map((item, idx4) => (
                                                        <div key={idx4}>
                                                            <input
                                                                onChange={(e) => { this.filterData(item) }}
                                                                name={item.title}
                                                                type="checkbox"
                                                                value={item.selected}
                                                                id={item.title}
                                                                checked={item.selected}
                                                            />
                                                            <label htmlFor={item.title}>{item.title}</label>
                                                        </div>
                                                    ))}
                                                </Fragment>
                                            }
                                        </div>
                                    }

                                </ReactCSSTransitionGroup>
                            </div>

                        </div>

                        <div className="filter-result-block">
                            {(this.props.topTabularData && this.props.topTabularData.props) &&
                                <div className="table-row first">
                                    {this.props.topTabularData.props.map((propItem, idx2) => (
                                        <Fragment key={idx2}>
                                            {propItem.selected === true &&
                                                <div >
                                                    <span>{propItem.title}</span>
                                                </div>
                                            }
                                        </Fragment>
                                    ))}
                                </div>
                            }

                            {(this.state && this.state.currentData) &&
                                <Fragment>
                                    {this.state.currentData.map((dataItem, idx3) => (
                                        <div className="table-row" key={idx3}>
                                            {/* STOREDAKI PROPS DATASININ DURUMUNA GORE */}
                                            {
                                                this.props.topTabularData.props.filter(x => x.title === 'ID').map(x => x.selected)[0] === true &&
                                                <div>
                                                    <span>{dataItem.id}</span>
                                                </div>
                                            }

                                            {
                                                this.props.topTabularData.props.filter(x => x.title === 'Kontrat').map(x => x.selected)[0] === true &&
                                                <div>
                                                    <span>{dataItem.kontrat}</span>
                                                </div>
                                            }

                                            {
                                                this.props.topTabularData.props.filter(x => x.title === 'Teklif').map(x => x.selected)[0] === true &&
                                                <div>
                                                    <span>{dataItem.teklif}</span>
                                                </div>
                                            }

                                            {
                                                this.props.topTabularData.props.filter(x => x.title === 'Data').map(x => x.selected)[0] === true &&
                                                <div>
                                                    <span>{dataItem.data}</span>
                                                </div>
                                            }





                                        </div>
                                    ))}

                                </Fragment>

                            }


                        </div>
                    </Fragment>
                }
            </div>

        );
    }
}
const mapStateToProps = (state) => ({
    topTabularData: (state.homeReducer && state.homeReducer.topTabularData) ? state.homeReducer.topTabularData : {}
});
export default connect(mapStateToProps)(TopLeftComponent);