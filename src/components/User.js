import React, {Component} from 'react';
import { Dialog } from 'react-desktop/macOs';


class User extends Component {
    render() {
        return (
            <Dialog
                title={this.props.user.name}
                message= {this.props.user.email}
                plop={this.props.user.username}
                icon={this.renderIcon()}
            />
        );
    }
    renderIcon() {
        return (
            <img
                src="https://stickers-muraux-enfant.fr/12359/papier-peint-geant-dark-vador-star-wars-.jpg"
                width="52"
                height="52"
            />
        );

    }

}

export default User;