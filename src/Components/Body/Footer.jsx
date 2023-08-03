import React from "react";

import { styled } from "styled-components";
export default function Footer({ basketQuantity2 }) {
  return <Foot>{basketQuantity2}</Foot>;
}

const Foot = styled.div`
  width: 100%;
  height: 20px;
`;
