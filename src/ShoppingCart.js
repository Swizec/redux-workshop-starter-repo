import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route, withRouter } from "react-router";
import { Link } from "react-router-dom";

import { TicketList } from "./Tickets";
import { TicketStyle, Ticket } from "./Ticket";
import { Button, ManagedInput } from "./FormElements";
import { removeFromCart } from "./actions";
import CheckoutForm from "./CheckoutForm";
