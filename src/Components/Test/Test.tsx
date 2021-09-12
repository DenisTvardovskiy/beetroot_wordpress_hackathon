import React from "react";
import './style.scss';
import Popup from "../Popup/Popup";

class Test extends  React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            showPopUp:false
        }
    }

    render() {
        return (
            <div className={"test"} onClick={()=>this.setState({showPopUp:!this.state.showPopUp})}>
                {this.state.showPopUp ? <Popup /> : this.state.showPopup}
            </div>
        );
    }
}

export default Test;