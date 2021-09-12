import React from "react";
import './style.scss';

class Header extends  React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
        }
    }

    handleInput(e: any){
        let key = e.target.value.toLowerCase();
        console.log(key)
    }

    render() {
        return (
            <section className="header">
                <header>
                    <nav className="navigation">
                        <div className="container desktop" id="search">
                            <input type="text" onInput={this.handleInput} placeholder="Search country info..."/>
                                <div>
                                    <i className="fas fa-times"></i>
                                </div>
                        </div>
                        <div className="container mobile">
                            <div className="menu-el">
                                <i className="fas fa-th"></i>
                            </div>
                            <div className="menu-el"><span>covid map</span></div>
                            <div className="menu-el">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </nav>
                </header>
            </section>
        );
    }
}

export default Header