import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Contacts({img, name, phone, email}) {
    return(
        <article className = "contact-card">
            <img src={img} alt="Contact Image"/>
            <h3>{name}</h3>
            <div className = "info-group">
                <FaPhone />
                <p>{phone}</p>
            </div>
            <div className = "info-group">
                <CiMail />
                <p>{email}</p>
            </div>
        </article>
    )
}
