import React from "react";
import Barcode from "react-barcode";
import {
  Img,
  Row1,
  Row2,
  Row3,
  Row4,
  Row5,
  Row6,
  Row7,
  Row8,
  Wrapper,
} from "./style";

import logo from "../../../assets/savoz-logo.svg";

const printOptions = {
  width: 2,
  height: 100,
  format: "CODE128",
  displayValue: true,
  fontOptions: "",
  font: "monospace",
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
};
export default class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Row1>
          <p>{`ORDER: #${this.props.savozOrder.customerOrderNumber}`}</p>
        </Row1>
        <Img>
          <img src={logo}></img>
        </Img>

        <Row3>
          <p>{this.props.savozOrder.customerName}</p>
        </Row3>
        <Row4>
          <p>{this.props.savozOrder.customerAddress}</p>
        </Row4>
        <Row5>
          <p>{`${this.props.savozOrder.customerCity}, ${this.props.savozOrder.customerProvince}`}</p>
        </Row5>
        <Row6>
          <p>{this.props.savozOrder.customerPostalCode}</p>
        </Row6>

        <Row7>
          <p>{`SHIP DATE: ${this.props.savozOrder.deliveryDate}`}</p>
        </Row7>
        <Row8>
          <p>{`TOTAL CASES: ${this.props.savozOrder.totalCases}`}</p>
        </Row8>
      </Wrapper>
    );
  }
}
