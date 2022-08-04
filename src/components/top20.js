import React from "react";


const Top20Item = ({song}) => {
console.log(song);

    return (<>
    <li>{song.title.label}</li>
    </>)

}


export default Top20Item