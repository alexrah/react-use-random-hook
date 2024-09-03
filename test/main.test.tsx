import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RandomNumberProvider, useRandomNumber } from "../src/index";

describe('RandomNumberProvider', () => {
  it('provides a random number', () => {
    const TestComponent = () => {
      const randomNumber = useRandomNumber();

      return <div id="random-number">{randomNumber}</div>;
    };

    const container = document.createElement("div");
    ReactDOM.render(<RandomNumberProvider><TestComponent/></RandomNumberProvider>, container);

    const randomNumberElement = container.querySelector("#random-number") as Element;
    expect(randomNumberElement).not.toBeNull();
    expect(randomNumberElement.textContent).not.toBeNull();
    console.log('randomNumberElement.textContent', randomNumberElement.textContent);
    expect(parseFloat(randomNumberElement.textContent as string)).toBeGreaterThanOrEqual(0);
    expect(parseFloat(randomNumberElement.textContent as string)).toBeLessThanOrEqual(1);
  });
});
