import React, {useState, useEffect} from "react";
import Top20List from "../components/top20List";

const Top20Container = () => {

    const [Top20, setTop20] = useState([]);

    useEffect(() => {
        getTop20();
    }, [])

    const getTop20 = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json').then(responce => responce.json()).then(top20 => setTop20(top20.feed.entry))

    }

    return(<>
    {Top20.length ? <Top20List top20s={Top20}/> : null}
    </>)

}

export default Top20Container;