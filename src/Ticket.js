import React from "react";
import { addToCart } from "./actions";
import styled from "styled-components";
import format from "date-fns/format";
import { connect } from "react-redux";

import { isInShoppingCart } from "./reducer";

export const TicketStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
`;

const SelectableTicketStyle = TicketStyle.extend`
    cursor: pointer;
    &:hover {
        background: rgba(219, 112, 147, 0.3);
    }
`;

const SelectedTicketStyle = TicketStyle.extend`
    cursor: default;
    background: rgba(219, 112, 147, 0.3);
`;

const ThumbStyle = styled.div`
    width: 250px;
`;

const TicketMeta = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 20px;
`;
