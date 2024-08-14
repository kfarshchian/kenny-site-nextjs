"use client";
import React from "react";
import "./MortgageCalculator.scss";
import { Container, Stack, Button } from "@mui/material";
import { useState, useRef } from "react";

function MortgageCalculator() {
  const [topFields, settopFields] = useState([]);
  let [paymentField, setPaymentField] = useState([]);

  let homePrice = parseFloat(topFields.homePrice);
  let downPayment = parseFloat(topFields.downPayment);
  let rate = parseFloat(topFields.estimatedRate);
  let tax = parseFloat(topFields.propertyTax);
  let insurance = parseFloat(topFields.homeInsurance);
  let pmi = parseFloat(topFields.PMI);
  let hoa = parseFloat(topFields.HOA);

  function nanCheck(p, n, i) {
    return Math.round((p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
  }

  function monthlyPayment(p, n, i) {
    return Math.round((p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
  }

  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    settopFields((values) => ({ ...values, [name]: value }));
  }

  const submit = (e) => {
    let p = homePrice - downPayment;
    let n = 360;
    let i = rate / 100 / 12;
    let monthly = monthlyPayment(p, n, i);
    let monthlyTax = tax / 12;
    let monthlyInsurance = insurance / 12;

    if (isNaN(pmi)) pmi = 0;
    if (isNaN(monthlyTax)) monthlyTax = 0;
    if (isNaN(monthly)) monthly = 0;
    if (isNaN(tax)) tax = 0;
    if (isNaN(hoa)) hoa = 0;
    if (isNaN(monthlyInsurance)) monthlyInsurance = 0;

    let allPayment = monthlyTax + monthlyInsurance + pmi + hoa;
    let totalPayment = monthly + allPayment;
    setPaymentField((Math.round(totalPayment)))
    // Math.round(totalPayment)

    console.log(totalPayment);
  };
  return (
    <>
      <Container>
        <form>
          <div id="CenterDiv">
            <div className="CustomerInfo">
              <Stack
                id="customerInfoStack"
                direction={{ xs: "column", sm: "row" }}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
              >
                <div>
                  <div id="labelDivCurrent">
                  <h2 id="stackMortgageCalculator">Mortgage Calculator Utah</h2>
                    <label>
                      Home Price:
                      <input
                        id="inputSection"
                        name="homePrice"
                        value={topFields.homePrice || ""}
                        onChange={(e) => handleForm(e)}
                        className="Value"
                        placeholder="$"
                        // type="number"
                        required
                      />
                    </label>
                    <div id="labelDivCurrent">
                      <label>
                        Down Payment
                        <input
                          id="inputSection"
                          name="downPayment"
                          value={topFields.downPayment || ""}
                          onChange={(e) => handleForm(e)}
                          className="Value"
                          placeholder="$"
                          // type="number"
                          required
                        />
                      </label>
                      <div id="labelDivCurrent"></div>
                      <label>
                        Estimated Rate
                        <input
                          id="inputSection"
                          name="estimatedRate"
                          value={topFields.estimatedRate || ""}
                          onChange={(e) => handleForm(e)}
                          className="Value"
                          placeholder="%"
                          // type="number"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div id="labelDivCurrent">
                    <label>
                      Property Tax (yearly):
                      <input
                        id="inputSection"
                        className="propertyTax"
                        name="propertyTax"
                        value={topFields.propertyTax || ""}
                        onChange={(e) => handleForm(e)}
                        placeholder="$"
                      />
                    </label>
                  </div>
                </div>
                <div id="rightSideCalc">
                  <div id="labelDivCurrent">
                    <label>
                      Home Insurance (yearly)
                      <input
                        id="inputSection"
                        name="homeInsurance"
                        value={topFields.homeInsurance || ""}
                        onChange={(e) => handleForm(e)}
                        className="homeInsurance"
                        placeholder="$"
                      />
                    </label>
                  </div>
                  <div id="labelDivCurrent">
                    <label>
                      Private Mortgage Insurance (monthly)
                      <input
                        id="inputSection"
                        name="PMI"
                        value={topFields.PMI || ""}
                        onChange={(e) => handleForm(e)}
                        className="PMI"
                        placeholder="$"
                      />
                    </label>
                  </div>
                  <div id="labelDivCurrent">
                    <label>
                      Homeowners Association (monthly)
                      <input
                        id="inputSection"
                        name="HOA"
                        value={topFields.HOA || ""}
                        onChange={(e) => handleForm(e)}
                        className="HOA"
                        placeholder="$"
                      />
                    </label>
                  </div>
                  <div id="monthlyPayment">
                    <h2>Monthly Payment:</h2> <h2 id="paymentField">{paymentField}</h2>
                  </div>
                </div>
                <div></div>
              </Stack>
            </div>
          </div>
          <div id="SolarInfo">
            <div id="CenterDiv">
              <Stack
                direction={{ xs: "column", sm: "row" }}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
              ></Stack>
            </div>
          </div>
          <div id="Debts">
            <div id="CenterDiv">
              <Stack
                direction={{ xs: "column", sm: "row" }}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
              ></Stack>
            </div>
          </div>
          <Button
            id="Submit"
            onClick={submit}
            sx={{ color: "#039487", fontSize: "15px" }}
          >
            Calculate
          </Button>
        </form>
      </Container>
    </>
  );
}

export default MortgageCalculator;
