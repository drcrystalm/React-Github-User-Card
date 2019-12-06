import React from "react"

const UserCard = props => {
    return (
        <div>
            <h1>User Card of {props.name}</h1>
            <h3>"{props.bio}"</h3>
            <p>
                {props.name} lives in {props.location} . {props.name} works for
                {props.company} , check out her work on GitHub under{" "}
                <strong>{props.user}</strong> .
            </p>
            <ul>
                <li>
                    {props.user} has {props.followers} followers.
                </li>
            </ul>
        </div>
    )
}

export default UserCard
