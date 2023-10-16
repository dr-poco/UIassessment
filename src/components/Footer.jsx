import { CrayonLogo } from "crayon-ui-kit"

function Footer(){
    return(
        <div>
            <div className="footer-shadow">
                <CrayonLogo name="MonogramLogo" size="24" background="light"/>
            </div>
            <p className="footer">
             ©2020 All Rights Reserved by Crayon Data Pte Ltd and it's registered trademark maya.ai 
            </p>
        </div>
    )
}

export default Footer;