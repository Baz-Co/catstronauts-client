import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

let clientURI = "http://localhost:4000";
if(process.env.NODE_ENV === 'production') {
  clientURI = "https://catstronauts-server-production-4002.up.railway.app/";
}


const client = new ApolloClient({
  uri: clientURI,
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
