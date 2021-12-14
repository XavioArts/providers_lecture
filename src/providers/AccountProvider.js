import React from "react";

// set up the inital context (use this with the useContext hook)
export const AuthContext = React.createContext();

// Create a consumer (older pre hook way of doing things)
export const AccountConsumer = AuthContext.Consumer;