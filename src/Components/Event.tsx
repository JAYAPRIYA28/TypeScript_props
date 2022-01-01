import React from "react";

type handle = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
    styles: React.CSSProperties
}

function Event(props: handle){
    return(
        <div>
          <button onClick={(event)=>props.handleClick(event,1)}>click</button>
          <input onChange={props.handleChange}></input>
          <h1 style={props.styles}>hello</h1>
        </div>
    )
}

export default Event;