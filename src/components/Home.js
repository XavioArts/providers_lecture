import React, { useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";

const Home = () => {

    const account = useContext(AccountContext)

    return (
        <div>
            <h1>Home</h1>
            <p>username: {account.username}</p>
        </div>
    );
};

export default Home;