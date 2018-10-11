import React, {Component} from 'react';
import User from "./User";

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        fetch("https://gist.githubusercontent.com/Eth3rnit3/0a844206e99184a01d84e2f51ece7b3a/raw/0cf044b2546eb72a173e68ea99dbec152b1895a5/users.json")
            .then(response => response.json())
            .then(response => this.setState({users:response}))
    }

    render() {
        console.log(this.state.users);
        return (
            <div>
                {
                    this.state.users.map((user) => {
                    return <User user={user}/>; //Attention props
                    })
                }
            </div>
        );
    }
}

export default Users;