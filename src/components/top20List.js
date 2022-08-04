import React from "react";
import Top20Item from "./top20";

const Top20List = ({top20s}) => {


    const top20Items = top20s.map((top20, index) => {

        return <Top20Item song={top20} key={index} />
    })

    return(<>
    <ol>
        {top20Items}
    </ol>
    </>)
}

export default Top20List;