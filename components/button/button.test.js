/** * @jest-environment jsdom */

import { Button } from "./Button";
import { render, screen, fireEvent } from '@testing-library/react'
import React from "react"

describe('button', () => {
  test('calls correct function on click', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}/>)
    const button = screen.getByRole('button')
    fireEvent.click(button) 
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('Error is red', () => {
    const {container } = render(<Button status="Error"/>)
    container.getElementsByClassName('button error')
  });
  test('Succes is green', () => {
    const {container } = render(<Button status="Error"/>)
    container.getElementsByClassName('button succes')
  });
  test('loading is animation', () => {
    const {container } = render(<Button status="Loading"/>)
    container.getElementsByClassName('button active')
  });
})