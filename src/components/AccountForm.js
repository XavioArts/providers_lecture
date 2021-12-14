import React, { useContext, useState } from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

const AccountForm = (props) => {
  
  //handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  const account = useContext(AccountContext);
  const [username, setUsername] = useState(account.username);
  const [membershipLevel, setMembershipLevel] = useState(account.membershipLevel);


  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedAccount = {username: username, membershipLevel: membershipLevel};
    account.updateAccount(updatedAccount);
  }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Edit Username"
          type="text"
          name="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={(e)=>setMembershipLevel(e.target.value)}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
}

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];

export default AccountForm;