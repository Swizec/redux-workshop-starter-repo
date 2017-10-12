import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
    font-size: 14px;
    outline: 0;
    padding: 0.5em 2em;
    color: #fff;
    background-color: #6496c8;
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px #27496d;
    cursor: pointer;
    &:hover {
        background-color: #417cb8;
    }
    &:active {
        background-color: #417cb8;
        box-shadow: 0 2px #27496d;
        transform: translateY(5px);
    }
    &[disabled] {
        background-color: lightgrey;
        box-shadow: 0 2px darkgrey;
    }
`;

const Button = ({ onClick, label, ...rest }) => (
    <ButtonStyle onClick={onClick} {...rest}>
        {label}
    </ButtonStyle>
);

const Input = styled.input`
    font-size: 14px;
    line-height: 1em;
    outline: 0;
    white-space: normal;
    padding: 0.5em 2em 0.5em 1em;
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
    border: 1px solid rgba(34, 36, 38, 0.35);
    border-radius: 0.3rem;
    transition: box-shadow 0.1s ease, width 0.1s ease;
    box-shadow: none;
    width: 450px;
    &:hover {
        border-color: #96c8da;
        box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    }
`;

const NarrowInput = Input.extend`
    width: 200px;
`;

export { Button, Input, NarrowInput };
