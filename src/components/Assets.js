import React, { useContext } from 'react'
import { Context } from "../Context"
import Article from './Article';

function Assets(props) {
    const { data } = useContext(Context);

    return (
        <div className="heading">
            <h1>All Assets 🧾</h1>
            <div className="all__articles">
                {data ? data.map(assets =>
                    <Article data={assets} key={assets.url} />
                ) : "Loading"}
            </div>
        </div>
    )
}

export default Assets;