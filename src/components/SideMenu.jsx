import $ from "jquery"

import hamburger from "../images/hamburger.png"
import bg1 from "../images/bg1.jpg"
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.png"

function SideMenu() {

    function sidemenuAnimation() {
        $(".sidemenu").toggleClass("showSideMenu")
    }

    function changeBackground(img, name) {
        $("div.bg").css("background-image", `url(${img})`)
        window.localStorage.setItem("bg", name)
    }

    return (
        <>
            <div className="btn-sidemenu" onClick={sidemenuAnimation}>
                <img src={hamburger} alt="hamburger" />
            </div>
            <div className="sidemenu">
                <div className="img-bg-container">
                    <img src={bg1} alt="bg1" onClick={() => changeBackground(bg1, "0")}/>
                </div>
                <div className="img-bg-container">
                    <img src={bg2} alt="bg2" onClick={() => changeBackground(bg2, "1")}/>
                </div>
                <div className="img-bg-container">
                    <img src={bg3} alt="bg3" onClick={() => changeBackground(bg3, "2")}/>
                </div>
            </div>
        </>
    )
}

export default SideMenu;