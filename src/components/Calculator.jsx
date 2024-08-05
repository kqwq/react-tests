import React, { useEffect, useState } from "react";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// Promise need to be monitored with a wrapper. Source: https://stackoverflow.com/a/76742874
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
const DelayedCalculator = wrapPromise(
  sleep(1000).then(() => (
    <div id="calculator">
      <span>Calculator Component</span>
      <input type="text" />
      <table>
        <tbody>
          <tr>
            <td>Clear</td>
            <td>Back</td>
            <td>^</td>
            <td>/</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>*</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td></td>
            <td>0</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
);

// This is how you access the resource
function Calculator() {
  return <div>{DelayedCalculator.read()}</div>;
}

export default Calculator;
