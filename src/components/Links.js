import React from "react";

function Links(props){
    return(
    <div>
        <h3>Links</h3>
        <a href={props.github}>Github link</a>
        <a href={props.linkedin}>LinkedIn link</a>
       </div>
);

}

export default Links;