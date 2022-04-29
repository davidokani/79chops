import React from "react";
import './footer.css';

const footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1*/}
                    <div className="col">
                        <h4>CONTACT</h4>
                        <ul className="list-unstyled">
                            <li>342-420-6969 </li>
                            <li>Abuja, Nigeria</li>
                            <li>React Js Street, sidehustle capston 79</li>
                        </ul>
                    </div>
                    {/* Column 2*/}
                    <div className="col">
                        <h4>SOCIAL MEDIA</h4>
                        <ul className="list-unstyled">
                            <li>Instagram</li>
                            <li>Telegram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    {/* Column 3*/}
                    <div className="col">
                        <h4>TEAM DEVELOPERS</h4>
                        <ul className="list-unstyled">
                            <li>David Okani</li>
                            <li>Jamiu .I Babatunde</li>
                            <li>Oluwatomilola Faith</li>
                            <li>Jumoke .N</li>
                            <li>Seun David</li>
                            <li>More...</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row"><p className="col-sm">
                    &copy;{new Date().getFullYear()} 79Chops All rights reserved | Terms of service | Privacy rights</p>
                </div>
            </div>
        </div>

    )
}

export default footer;