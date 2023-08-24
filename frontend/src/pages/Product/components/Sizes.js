import React from "react";
import { Size } from "../../../components/Sizes/Index";

function Sizes(props) {
    return (
        <div id="size">
            <Size>
                <button className="size">
                    {props.size} {/* This will render the size value */}
                </button>
                    <p>oi</p>
            </Size>
        </div>
    );
}

export default Sizes;