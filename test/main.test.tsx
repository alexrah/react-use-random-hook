import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RandomProvider, useRandom, generateRandomString } from "../src/index";

describe('RandomNumberProvider', () => {
  it('provides a random number with default base', () => {
    const TestComponent = () => {
      const {randomNumber} = useRandom();

      return <div id="random-number">{randomNumber}</div>;
    };

    const container = document.createElement("div");
    ReactDOM.render(<RandomProvider><TestComponent/></RandomProvider>, container);

    const randomNumberElement = container.querySelector("#random-number") as Element;
    expect(randomNumberElement).not.toBeNull();
    expect(randomNumberElement.textContent).not.toBeNull();
    console.log('randomNumberElement.textContent', randomNumberElement.textContent);
    expect(parseFloat(randomNumberElement.textContent as string)).toBeGreaterThanOrEqual(0);
    expect(parseFloat(randomNumberElement.textContent as string)).toBeLessThanOrEqual(1);
  });

  it('provides a random number with custom base of 10', () => {
    const TestComponent = () => {
      const {randomNumber} = useRandom();

      return <div id="random-number">{randomNumber}</div>;
    };

    const container = document.createElement("div");
    ReactDOM.render(<RandomProvider numberBase={10}><TestComponent/></RandomProvider>, container);

    const randomNumberElement = container.querySelector("#random-number") as Element;
    expect(randomNumberElement).not.toBeNull();
    expect(randomNumberElement.textContent).not.toBeNull();
    console.log('randomNumberElement.textContent', randomNumberElement.textContent);
    expect(parseFloat(randomNumberElement.textContent as string)).toBeGreaterThanOrEqual(0);
    expect(parseFloat(randomNumberElement.textContent as string)).toBeLessThanOrEqual(10);
  });

  it('provides a random string with default length', () => {
    const TestComponent = () => {
      const {randomString} = useRandom();

      return <div id="random-string">{randomString}</div>;
    };

    const container = document.createElement("div");
    ReactDOM.render(<RandomProvider><TestComponent/></RandomProvider>, container);

    const randomStringElement = container.querySelector("#random-string") as Element;
    expect(randomStringElement).not.toBeNull();
    expect(randomStringElement.textContent).not.toBeNull();
    console.log('randomStringElement.textContent', randomStringElement.textContent);
    expect((randomStringElement.textContent as string).length).toBe(4);
  });

  it('provides a random string with custom length of 10', () => {
    const TestComponent = () => {
      const {randomString} = useRandom();

      return <div id="random-string">{randomString}</div>;
    };

    const container = document.createElement("div");
    ReactDOM.render(<RandomProvider stringLength={10}><TestComponent/></RandomProvider>, container);

    const randomStringElement = container.querySelector("#random-string") as Element;
    expect(randomStringElement).not.toBeNull();
    expect(randomStringElement.textContent).not.toBeNull();
    console.log('randomStringElement.textContent', randomStringElement.textContent);
    expect((randomStringElement.textContent as string).length).toBe(10);
  });

  it('generate a random string with custom length of 10', () => {

    const randomString = generateRandomString(10);
    console.log('randomString',randomString);
    expect(randomString.length).toBe(10);

  })


});
