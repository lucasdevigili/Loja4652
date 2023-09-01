import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function UserIcon() {
    return (
        <>
            <a href="/Cart"><FontAwesomeIcon icon={faCartShopping} className="userIcon" /></a>
            <a href="/"><FontAwesomeIcon icon={faUser} className="userIcon" /></a>
        </>
    )
}

export default UserIcon