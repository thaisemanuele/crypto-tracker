import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import TrackerForm from "../components/tracker-form";

describe("Tracker Form", () => {
  it("renders without error", () => {
    render(
      <TrackerForm />
    );
    expect(
      screen.getByLabelText("CRYPTOCURRENCY CODE")
    ).toBeInTheDocument;
  }),
  it("enters code on form input", () => {
    render(
      <TrackerForm />
    );
    userEvent.type(screen.getByRole('textbox'), 'OMG')
    expect(screen.getByRole('textbox')).toHaveValue('OMG')
  })
})