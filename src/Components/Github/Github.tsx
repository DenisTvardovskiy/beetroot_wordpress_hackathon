import React from "react";
import './style.scss';

class Github extends  React.Component<any, any>{
    render() {
        return (
            <section className={"github"}>
                <div className={"container"}>
                    <a href="https://github.com/DenisTvardovskiy/beetroot_wordpress_hackathon/tree/main" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
        );
    }
}

export default Github