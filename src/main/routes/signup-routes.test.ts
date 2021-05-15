import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Any name',
        email: 'anyemail@gmail.com',
        password: '12345',
        passwordConfirmation: 123456
      })
      .expect(200)
  })
})
