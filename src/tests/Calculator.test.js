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
    fireEvent.click(button4);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should display sum of numbers', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);

    const operatoradd = container.getByTestId('operator-add');
    fireEvent.click(operatoradd);

    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);

    const operatorequal = container.getByTestId('operator-equals');
    fireEvent.click(operatorequal);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should display subtraction of numbers', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);

    const operatorsubtract = container.getByTestId('operator-subtract');
    fireEvent.click(operatorsubtract);

    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);

    const operatorequal = container.getByTestId('operator-equals');
    fireEvent.click(operatorequal);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should display multiplication of numbers', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);

    const operatormultiply = container.getByTestId('operator-multiply');
    fireEvent.click(operatormultiply);

    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);

    const operatorequal = container.getByTestId('operator-equals');
    fireEvent.click(operatorequal);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should display division of numbers', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);

    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);

    const operatordivide = container.getByTestId('operator-divide');
    fireEvent.click(operatordivide);

    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);

    const operatorequal = container.getByTestId('operator-equals');
    fireEvent.click(operatorequal);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should display concatenation of numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);

    fireEvent.click(button1);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('171');
  })


  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);

    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);

    const operatordivide = container.getByTestId('operator-divide');
    fireEvent.click(operatordivide);

    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    
    const operatoradd = container.getByTestId('operator-add');
    fireEvent.click(operatoradd);
    
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    
    fireEvent.click(button3);

    fireEvent.click(operatoradd);

    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);

    const operatorequal = container.getByTestId('operator-equals');
    fireEvent.click(operatorequal);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('27');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);

    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    
    const operatoradd = container.getByTestId('operator-add');
    fireEvent.click(operatoradd);
    
    const button9 = container.getByTestId('number9');
    fireEvent.click(button9);
    
    const clear = container.getByTestId('clear');
    fireEvent.click(clear);
    
    const operatorsubtract = container.getByTestId('operator-subtract');
    fireEvent.click(operatorsubtract);
    
    fireEvent.click(button2);

    const button0 = container.getByTestId('number0');
    fireEvent.click(button0);
    
    const operatorequal = container.getByTestId('operator-equals');
    fireEvent.click(operatorequal);
    
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('7');

  })

})

