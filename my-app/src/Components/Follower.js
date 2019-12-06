import React from "react"

const Follower = props => {
    return (
        <div className='follower'>
            <p>
                <a href={props.userUrl}>{props.userName}</a>
            </p>
        </div>
    )
}

export default Follower
