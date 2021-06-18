import { CompareFieldValidation } from '../../../presentation/helpers/validators/compare-field-validation'
import { EmailValidation } from '../../../presentation/helpers/validators/email-validation'
import { RequiredFieldValidation } from '../../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../../presentation/helpers/validators/validation-composite'
import { EmailValidator } from '../../../presentation/protocols/email-validator'
import { makeSignUpValidation } from './signup-validation'

jest.mock('../../../presentation/helpers/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('SignUpValidation Factory', () => {
  test('should call ValidationComposite with all validations ', () => {
    makeSignUpValidation()
    const validation: Validation[] = []
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      validation.push(new RequiredFieldValidation(field))
    }
    validation.push(new CompareFieldValidation('password', 'passwordConfirmation'))
    validation.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validation)
  })
})