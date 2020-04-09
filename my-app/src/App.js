import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { METHODS } from "http"
import axios from "axios"
import UserCard from "./Components/UserCard"
import Followers from "./Components/Followers"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            user: [],
            followerName: [],
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

        axios
            .get(`https://api.github.com/users/drcrystalm/followers`)

            .then(res => {
                console.log(res)
                this.setState({
                    followerName: res.data.login,
                })
            })

            .catch(err => console.log(err, "Error from componentDidUpdate"))
    }

    render() {
        //console.log(this.state)
        return (
            <div>
                <UserCard
                    name={this.state.name}
                    bio={this.state.bio}
                    location={this.state.location}
                    company={this.state.company}
                    user={this.state.user}
                    followers={this.state.followers}
                />

                {/* <Followers
                    followers={this.state.followerName}
                    name={this.state.name}
                /> */}
            </div>
        )
    }
}

export default App
