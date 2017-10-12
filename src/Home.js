import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const P = styled.p`
    width: 550px;
    margin: 0 auto;
    padding-bottom: 1em;
`;

const Home = () => (
    <div>
        <h1>A Redux Example App</h1>
        <P>
            This app uses the StubHub API to fetch a list of upcoming events in
            San Francisco. The events are searchable using Downshift. Clicking
            an event adds it to the shopping cart.
        </P>
        <P>
            The shopping cart can be checked out via a form built with
            redux-form. The form remembers your values for future purchases.
        </P>
        <P>
            Past purchases are stored in a Redux form, but we only show a count
        </P>
        <Link to="/events">Click here to get started</Link>
    </div>
);

export default Home;
