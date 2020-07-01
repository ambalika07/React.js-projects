import React from 'react';
import { connect } from 'react-redux';
//import { fetchUser } from '../action';

class UserHeader extends React.Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        const user = this.props.users.find(user => user.id === this.props.userId);
        // const { user } = this.props;

        if (!user) {
            return <div>Loading...</div>;
        }

    return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state) => {
    return {users: state.users };
};
// Alt way to use the below function that includers props
// const mapStateToProps = (state, ownProps) => {
//     return { users: state.users.find(user => user.id === ownProps.userId)}
// };

export default connect(mapStateToProps, /*{ fetchUser }*/)(UserHeader);