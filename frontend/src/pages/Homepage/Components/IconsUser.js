import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Icons() {
    return (
        <>
            <a href="/cart"><FontAwesomeIcon icon={faCartShopping} className="icons" /></a>
            <a href="/"><FontAwesomeIcon icon={faUser} className="icons" /></a>
        </>
    );
}

export default Icons;