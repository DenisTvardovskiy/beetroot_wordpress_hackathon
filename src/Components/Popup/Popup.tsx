import React from "react";
import './style.scss';

class Popup extends  React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'svgMap-tooltip svgMap-active'}>
                <div className={"dark-bg"}></div>
                <div className={'svgMap-tooltip-content-wrapper'}>
                    <div className="container">
                        <div className="message-heading">
                            <div>
                                <h3>Going to</h3>
                                <h3 className="text-dark">TEXT</h3>
                            </div>
                            <div id="hide-info">
                                <p>close</p>
                            </div>
                        </div>
                        <div className="overview two-per-row-no-margin">
                            <div className="grid-el">
                                <h5>Overview</h5>
                                <ul>
                                    TEXT
                                </ul>
                            </div>
                            <div className="grid-el">
                                <h5>Covid-19 Statistics</h5>
                                <div className="two-per-row-no-margin">
                                    <div className="grid-el">
                                        <h6>NEW CASES:</h6>
                                        <h5>TEXT</h5>
                                    </div>
                                    <div className="grid-el">
                                        <h6>TOTAL CASES:</h6>
                                        <h5>TEXT</h5>
                                    </div>
                                    <div className="percent-value">
                                        <div className="text-caption">
                                            <i className="fas fa-caret-down"></i>
                                            <p>TEXT (last 7 days)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="content-list">
                            <h5>Local Restrictions &amp; Policies</h5>
                            <ul className="polices-list">
                                TEXT
                            </ul>
                        </div>

                        <div className="enter">
                            <h5>Can you enter?</h5>
                            <p>TEXT</p>
                        </div>

                        <div className="enter-element">
                            <h5>What to expect in TEXT</h5>
                            TEXT
                        </div>

                        <div className="more-info">
                            <h6>For further information visit:</h6>
                            <a href="#" target="_blank" rel="nofollow">TEXT</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Popup;