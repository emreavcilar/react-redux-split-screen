import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { getBottomTabularData, setNewItemToBottomTabular} from '../../actions/home'

class BottomLeftComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormEnabled: false
        }

        props.dispatch(getBottomTabularData())
    }

    addNewRow(e) {
        e.preventDefault();
        const form = e.target;
    
        const newData = {
            title: form.title.value,
            count: form.count.value,
            type: form.type.value
        }

        this.props.dispatch(setNewItemToBottomTabular(newData))  
    }

    render() {
        return (
            <Fragment>
                {(this.props.bottomTabularData && this.props.bottomTabularData.length > 0) &&
                    <div className="form-content-container">

                        <div className="table-container" role="table">
                            {
                                this.props.bottomTabularData.map((item, idx) => (
                                    <div className="table-row" key={idx}>
                                        <div>
                                            <span>
                                                {item.title}
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                {item.count}
                                            </span>
                                        </div>
                                        <div>
                                            <span>{item.type}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="add-new-item-block">
                            {this.state.isFormEnabled === true &&
                                <form onSubmit={(e)=>{this.addNewRow(e)}}>
                                    <input type="text" name="title" placeholder="Başlık" required />
                                    <input type="text" name="count" placeholder="Adet" required />
                                    <input type="text" name="type" placeholder="Tip" required />
                                    <input type="submit" />
                                </form>
                            }
                            <button onClick={() => {
                                this.setState({
                                    isFormEnabled: !this.state.isFormEnabled
                                })
                            }}>
                                {this.state.isFormEnabled === false ?
                                    'Yeni Ekle'
                                    :
                                    'Kapat'
                                }



                            </button>
                        </div>
                    </div>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    bottomTabularData: (state.homeReducer && state.homeReducer.bottomTabularData) ? state.homeReducer.bottomTabularData : []
});
export default connect(mapStateToProps)(BottomLeftComponent);