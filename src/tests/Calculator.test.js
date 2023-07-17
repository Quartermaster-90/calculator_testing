import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should display sum of numbers', () => {
    const button4 = container.getByTestId('number4');
    const operatoradd = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const operatorequal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(operatoradd);
    fireEvent.click(button1);
    fireEvent.click(operatorequal);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should display subtraction of numbers', () => {
    const button7 = container.getByTestId('number7');
    const operatorsubtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const operatorequal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(operatorsubtract);
    fireEvent.click(button4);
    fireEvent.click(operatorequal);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should display multiplication of numbers', () => {
    const button3 = container.getByTestId('number3');
    const operatormultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const operatorequal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(operatormultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorequal);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should display division of numbers', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const operatordivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const operatorequal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatordivide);
    fireEvent.click(button7);
    fireEvent.click(operatorequal);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should display concatenation of numbers', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217');
  })


  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const operatordivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const operatoradd = container.getByTestId('operator-add');
    const button3 = container.getByTestId('number3');
    const operatorequal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatordivide);
    fireEvent.click(button7);
    fireEvent.click(operatoradd);
    fireEvent.click(button3);
    fireEvent.click(operatorequal);
    expect(runningTotal.textContent).toEqual('6');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const operatoradd = container.getByTestId('operator-add');
    const button3 = container.getByTestId('number3');
    const clear = container.getByTestId('clear');
    const operatorsubtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const operatorequal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatoradd);
    fireEvent.click(button3);
    fireEvent.click(clear);
    fireEvent.click(operatorsubtract);
    fireEvent.click(button4);
    fireEvent.click(operatorequal);
    expect(runningTotal.textContent).toEqual('17');

  })

})

