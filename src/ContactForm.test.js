import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("Renders the Contact Form", () => {
  render(<ContactForm />);
});

test("Checks if new contacts can be added", async () => {
  const { findByLabelText, findByTestId } = render(<ContactForm />);

  const firstName = await findByLabelText(/first name*/i);
  const lastName = await findByLabelText(/last name*/i);
  const email = await findByLabelText(/email*/i);
  const message = await findByLabelText(/message/i);

  fireEvent.change(firstName, { target: { name: "firstName", value: "Alex" } });
  fireEvent.change(lastName, {
    target: { name: "lastName", value: "Compton" },
  });
  fireEvent.change(email, {
    target: { name: "email", value: "Alex@alex.com" },
  });
  fireEvent.change(message, {
    target: { name: "message", value: "This is alex" },
  });
  fireEvent.click(document.getElementById("submit"));
  await findByTestId("submitted");
});

test("Checks if first name error works", async () => {
  const { findByLabelText, findByTestId } = render(<ContactForm />);

  const firstName = await findByLabelText(/first name*/i);
  const lastName = await findByLabelText(/last name*/i);
  const email = await findByLabelText(/email*/i);
  const message = await findByLabelText(/message/i);

  fireEvent.change(lastName, {
    target: { name: "lastName", value: "Compton" },
  });
  fireEvent.change(email, {
    target: { name: "email", value: "Alex@alex.com" },
  });
  fireEvent.change(message, {
    target: { name: "message", value: "This is alex" },
  });
  fireEvent.click(document.getElementById("submit"));
  await findByTestId("error");
});

test("Checks first name length", async () => {
  const { findByLabelText, findByTestId } = render(<ContactForm />);

  const firstName = await findByLabelText(/first name*/i);
  const lastName = await findByLabelText(/last name*/i);
  const email = await findByLabelText(/email*/i);
  const message = await findByLabelText(/message/i);

  fireEvent.change(firstName, {
    target: { name: "firstName", value: "Alexxxx" },
  });
  fireEvent.change(lastName, {
    target: { name: "lastName", value: "Compton" },
  });
  fireEvent.change(email, {
    target: { name: "email", value: "Alex@alex.com" },
  });
  fireEvent.change(message, {
    target: { name: "message", value: "This is alex" },
  });
  fireEvent.click(document.getElementById("submit"));
  await findByTestId("error");
});

test("Checks if last name error works", async () => {
  const { findByLabelText, findByTestId } = render(<ContactForm />);

  const firstName = await findByLabelText(/first name*/i);
  const lastName = await findByLabelText(/last name*/i);
  const email = await findByLabelText(/email*/i);
  const message = await findByLabelText(/message/i);

  fireEvent.change(firstName, { target: { name: "firstName", value: "Alex" } });

  fireEvent.change(email, {
    target: { name: "email", value: "Alex@alex.com" },
  });

  fireEvent.change(message, {
    target: { name: "message", value: "This is alex" },
  });
  fireEvent.click(document.getElementById("submit"));
  await findByTestId("error");
});

test("Checks if email error works", async () => {
  const { findByLabelText, findByTestId } = render(<ContactForm />);

  const firstName = await findByLabelText(/first name*/i);
  const lastName = await findByLabelText(/last name*/i);
  const email = await findByLabelText(/email*/i);
  const message = await findByLabelText(/message/i);

  fireEvent.change(firstName, {
    target: { name: "firstName", value: "Alex" },
  });
  fireEvent.change(lastName, {
    target: { name: "lastName", value: "Compton" },
  });

  fireEvent.change(message, {
    target: { name: "message", value: "This is alex" },
  });
  fireEvent.click(document.getElementById("submit"));
  await findByTestId("error");
});
