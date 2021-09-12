import React from "react";
import './style.scss';

class MapLegend extends  React.Component<any, any>{
    render() {
        return (
            <section className="map-legend desktop">
                <div className="container">
                    <h5>Map legend</h5>
                    <ul className="legend-list">
                        <li>
                            <div className="circle red"></div>
                            <p>High infection</p>
                        </li>
                        <li>
                            <div className="circle orange"></div>
                            <p>Medium infection</p>
                        </li>
                        <li>
                            <div className="circle green"></div>
                            <p>Low infection</p>
                        </li>
                    </ul>
                </div>
            </section>

        );
    }
}

export default MapLegend