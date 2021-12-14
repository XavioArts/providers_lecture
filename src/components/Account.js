import React, { Component, useContext } from "react";
import { Card, } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

{/* <AccountConsumer>
    {value => <Component}
</AccountConsumer> */}

// const Account = () => (
//     <AccountConsumer>
//         {(value) => 
//   (<Card>
//     <Card.Content>
//       <Card.Header>{value.username}</Card.Header>
//       <Card.Meta>
//         Date Joined: {value.dateJoined}
//       </Card.Meta>
//     </Card.Content>
//     <Card.Content>
//       <p>Membership Level: {value.membershipLevel}</p>
//     </Card.Content>
//   </Card>)}
//   </AccountConsumer>
// )

//this is the new way with hooks!
const Account = () => {
    const account = useContext(AccountContext);
  return (<Card>
    <Card.Content>
      <Card.Header>{account.username}</Card.Header>
      <Card.Meta>
        Date Joined: {account.dateJoined}
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Membership Level: {account.membershipLevel}</p>
    </Card.Content>
  </Card>)
}

export default Account;