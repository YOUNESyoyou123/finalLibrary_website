import React from "react";
import { ReactDOM } from "react";

function EventsSection (props)
{
        return(
            <div className="py-2 px-3 border">
             <h1 className="  w- py-2 "><span >Title:</span> {props.item.title} </h1>  
             <p className="py-2">Date: {props.item.date}</p>
             <p className="py-2">location: {props.item.location}</p>

            </div>
        )
}
export default EventsSection