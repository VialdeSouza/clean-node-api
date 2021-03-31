import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator Adapter', () => {
  test('should return false if validators returns false ', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})