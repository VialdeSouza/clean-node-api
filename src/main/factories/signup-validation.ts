import { CompareFieldValidation } from '../../presentation/helpers/validators/compare-field-validation'
import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validation: Validation[] = []
  const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
  for (const field of requiredFields) {
    validation.push(new RequiredFieldValidation(field))
  }

  validation.push(new CompareFieldValidation('password', 'passwordConfirmation'))
  return new ValidationComposite(validation)
}
