import { Button } from "./Button";
import { render, screen } from '@testing-library/react'

describe('button', () => {
	const defaultProps = { 
		onClick: jest.fn(),
		status: "Submit" ,
	};
  test('calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClick} />)
    fireEvent.click(getByText(defaultProps.text));
    expect(onClick).toHaveBeenCalled();
  });
})