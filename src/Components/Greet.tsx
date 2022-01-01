import React from "react";

type GreetProps = {
    name: string
    slot: {
        countList:number
    }
    persons: {
      first: string
      last: string
    }[]

    solution? : "loading" | "success" | "error"

}


function Greet(props: GreetProps){
    
    var message = "error";
    if(props.solution === "loading"){
        message = "loading the screen"
    }else if(props.solution === "success"){
        message = "successfully fetch the data"
    }else if(props.solution === "error"){
        message = "error to fetch the data"
    }

    return(
     <div>
    

         <h2>hello {props.name} count {props.slot.countList}</h2>
          

         <div>{props.persons.map(person => {
             return(
                 <div key={person.first}>{person.first} {person.last}</div>
             )
         })}</div>
         {message}
     </div>
    )
}

export default Greet;
