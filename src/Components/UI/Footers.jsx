import {CiLocationOn} from "react-icons/ci";
import {IoMdCall} from "react-icons/io";
import {MdOutlineEmail} from "react-icons/md";
import footerData from "../../api/footerApi.json";
import {NavLink} from "react-router-dom";
const Footers = () => {
    const footer = {
        CiLocationOn:<CiLocationOn/>,
        IoMdCall:<IoMdCall/>,
        MdOutlineEmail:<MdOutlineEmail/>
    }
return(
   <footer className="footer-section">
    <div className="container grid grid-three-cols">
{footerData.map((data,index)=>{
    const {icon,title,details,add}= data;
    return (
        <div key={index} className="footer-contact">
<div className="icon"> {footer[icon]}</div>
<div className="footer-contact-text">

<p>{title}</p>
<NavLink to={add}>
<p>{details}</p>
</NavLink>
</div>
            </div>
    )
})}
        </div>
     <div className="copyright-area">
        <div className="container">
            <div className="grid grid-two-cols">
                <div className="copyright-text">
                    <p>Copyright &copy; {new Date().getFullYear()} Explore World All Rights Reserved.
                           <NavLink to="/" target="_blank">Abhishek Gadmale</NavLink>
                    </p>
                 
                </div>
                <div className="footer-menu">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/socal">Socials</NavLink></li>
                        <li><NavLink to="https://github.com/AbhishekGadmale/Explore_World.git" target="_blank">Source Code</NavLink></li>
                        <li><NavLink to="/contact" target="_blank">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
     </div>

   </footer>
)}
export default Footers;

