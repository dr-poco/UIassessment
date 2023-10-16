import { MayaLogo } from "crayon-ui-kit";

function Header(){

    const xsStyles = {
        top: '5%', 
        left: '3%'
      };

    return (
    <div className="header-logo">
        <><MayaLogo /><br />
    <p className="aifont" style={window.innerWidth <= 576 ? xsStyles : {}}>
           AI powered personalization engine dedicated to understand human tastes</p></>
    </div>
    )
}

export default Header;