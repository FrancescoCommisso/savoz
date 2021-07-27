import React, { Component, useEffect, useState } from "react";
import PackingLabels from "../PackingLabels";
import { Button, Input, Wrapper } from "./style";

const LabelForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerProvince, setCustomerProvince] = useState("");
  const [customerPostalCode, setCustomerPostalCode] = useState("");
  const [customerOrderNumber, setCustomerOrderNumber] = useState("");
  const [totalCases, setTotalCases] = useState("");
  const [deliveryDate, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [error, setError] = useState(true);
  const [savozOrder, setSavozOrder] = useState({});

  useEffect(() => {
    setError(true);
    const field = [
      customerAddress,
      customerCity,
      customerName,
      customerProvince,
      customerPostalCode,
      customerOrderNumber,
      totalCases,
      deliveryDate,
    ];
    if (!field.some((i) => !i)) {
      setSavozOrder(() => ({
        customerAddress,
        customerCity,
        customerName,
        customerProvince,
        customerPostalCode,
        customerOrderNumber,
        totalCases,
        deliveryDate,
      }));

      setError(false);
    }
  }, [
    customerAddress,
    customerCity,
    customerName,
    customerProvince,
    customerPostalCode,
    customerOrderNumber,
    totalCases,
  ]);

  return (
    <Wrapper>
      <h1>Savoz Label Printer</h1>
      <Input
        onChange={(e) => {
          setCustomerName(e.target.value);
        }}
        placeholder="Customer Name"
      ></Input>
      <Input
        onChange={(e) => {
          setCustomerAddress(e.target.value);
        }}
        placeholder="Customer Address"
      ></Input>
      <Input
        onChange={(e) => {
          setCustomerCity(e.target.value);
        }}
        placeholder="Customer City"
      ></Input>
      <Input
        onChange={(e) => {
          setCustomerProvince(e.target.value);
        }}
        placeholder="Customer Province"
      ></Input>
      <Input
        onChange={(e) => {
          setCustomerPostalCode(e.target.value);
        }}
        placeholder="Customer Postal Code"
      ></Input>
      <Input
        onChange={(e) => {
          setCustomerOrderNumber(e.target.value);
        }}
        setCustomerOrderNumber
        placeholder="Savoz Order Number"
      ></Input>
      <Input
        onChange={(e) => {
          setTotalCases(e.target.value);
        }}
        type="number"
        placeholder="Total Cases"
      ></Input>

      {!error && (
        <PackingLabels
          savozOrder={savozOrder}
          totalCases={totalCases}
        ></PackingLabels>
      )}
    </Wrapper>
  );
};

export default LabelForm;
