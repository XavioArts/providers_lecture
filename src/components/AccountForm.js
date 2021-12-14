import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = { username: this.props.username, membershipLevel: this.props.membershipLevel, };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { username, membershipLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Edit Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

// known has a higher order component HOC
const ConnectedAccountForm = (props) => {
    // note: since this is a funcitonal component we could juse use the useContext hook here

    return (
        <AccountConsumer>
            {value => (
                <AccountForm {...props} username={value.username} membershipLevel={value.membershipLevel} />
            )}
        </AccountConsumer>
    );
};

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];

export default ConnectedAccountForm;