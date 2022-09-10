import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import FrontEnd from "../postForm";
test('load and displays startet data', async () => {
    render(<FrontEnd />)
    const testname = await waitFor(() => screen.findByTestId('name'))
    expect(testname).toHaveTextContent('my name is ahmed')
    const testage = await waitFor(() => screen.findByTestId('age'))
    expect(testage).toHaveTextContent('my age is 25')
    const testgender = await waitFor(() => screen.findByTestId('gender'))
    expect(testgender).toHaveTextContent('my gender is male')
})