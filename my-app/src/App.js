import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { METHODS } from "http"
import axios from "axios"
import Users from "./Components/Users"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            user: [],
        }
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/drcrystalm`)

            .then(res => {
                // console.log(res)
                this.setState({
                    name: res.data.name,
                    user: res.data.login,
                    bio: res.data.bio,
                    company: res.data.company,
                    location: res.data.location,
                    followers: res.data.followers,
                })
            })
            .catch(err => console.log(err, "This is no good"))
    }

    // componentDidUpdate() {
    //     axios
    //         .get(`https://api.github.com/users/drcrystalm/followers`)

    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 followerName: res.data.login,
    //             })
    //         })

    //         .catch(err => console.log(err, "Error from componentDidUpdate"))
    // }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>User Card of {this.state.name}</h1>
                <h3>"{this.state.bio}"</h3>
                <p>
                    {this.state.name} lives in {this.state.location} .{" "}
                    {this.state.name} works for {this.state.company} , check out
                    her work on GitHub under {this.state.user} .
                </p>
                <ul>
                    <li>
                        {this.state.user} has {this.state.followers} followers.
                    </li>
                </ul>
                <Users name={this.state.followerName} />
            </div>
        )
    }
}

export default App
