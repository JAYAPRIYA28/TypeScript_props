import React from "react";

type parentProps = {
    children: React.ReactChild
}

function Parent(props: parentProps){
    return(
        <div>
         {props.children}
        </div>
    )
}

export default Parent;