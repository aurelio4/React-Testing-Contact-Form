import React from 'react'
import { render, fireEvent, getByTestId } from "@testing-library/react"
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test('ContactForm renders', () => {
  render(<ContactForm />)
})

test('inputs can take in values', () => {
  // Arrange
  const { getByLabelText, getByTestId } = render(<ContactForm />)
  const firstNameInput = getByLabelText(/First Name*/i)
  const lastNameInput = getByLabelText(/Last Name*/i)
  const emailInput = getByLabelText(/Email/i)
  const messageInput = getByLabelText(/Message/i)
  const submitBtn = getByTestId('submit-btn')

  // Act
  act(() => {
    fireEvent.change(firstNameInput, {target: {value: 'Joh'}})
    fireEvent.change(lastNameInput, {target: {value: 'Smith'}})
    fireEvent.change(emailInput, {target: {value: 'Johnsmith123@gmail.com'}})
    fireEvent.change(messageInput, {target: {value: 'My name is John Smith and this is a test message'}})
    fireEvent.click(submitBtn)
  })

  // Assert
  expect(firstNameInput.value).toBe('Joh')
  expect(lastNameInput.value).toBe('Smith')
  expect(emailInput.value).toBe('Johnsmith123@gmail.com')
  expect(messageInput.value).toBe('My name is John Smith and this is a test message')
  expect(lastNameInput).toBeInTheDocument()
  expect(messageInput).toBeInTheDocument()
})