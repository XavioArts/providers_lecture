import React from "react";

// set up the inital context (use this with the useContext hook)
export const AccountContext = React.createContext();

// Create a consumer (older pre hook way of doing things)
export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
    state = {
        username: "bitchjuice",
        membershipLevel: "Gold",
        dateJoined: "12/12/21",
        updateAccount: (account) => this.updateAccount(account),
    }

    updateAccount = (account) => {
        this.setState({username: account.username, membershipLevel: account.membershipLevel})
    }

    render() {
        return (<AccountContext.Provider value={this.state} >
            {this.props.children}
        </AccountContext.Provider>);
    };
};

export default AccountProvider;