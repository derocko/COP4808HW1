import React from "react";

const Event = (props) => {
    return (
            <td className={'Event '}>
                <h4>{props.name}</h4>
                <h5>{props.location}</h5>
                <h6>{props.games}</h6>
            </td>
        )
}

export default Event;