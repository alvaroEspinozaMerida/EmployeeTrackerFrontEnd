import React, {Component} from "react";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees:[]
        }
    }

    render() {
        return (
            <div>
                <footer className="Footer">
                    <span className="text-muted">All Rights Reserved 2020 @JavaGuides</span>
                </footer>
            </div>
        );
    }
}

export default Footer;