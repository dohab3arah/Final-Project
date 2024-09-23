import "./styling/headerStyle.css";
export default function Header(){
    return(
        <div className="header">
            <div className="container">
                <div className="logo">
                    <a href="#"><i class="fa-solid fa-plane"></i></a>
                    <p>My Dream Place</p>
                </div>
            </div>
            <p></p>
        </div>
    );
}