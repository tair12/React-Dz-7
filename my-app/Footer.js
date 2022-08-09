import React from 'react';
import {Navlink} from "react- router- dom";

function Footer(props) {
    return (
        <ul>
            <li>
                <Navlink to ="/" > Home page  </Navlink>
            </li>
            <li>
                <Navlink to ="/" > Form page  </Navlink>
            </li>
            <li>
                <Navlink to ="/" > main page  </Navlink>
            </li>
                <Navlink to ="/" > about page  </Navlink>
            </li>
        </ul>
    );
}

export default Footer;