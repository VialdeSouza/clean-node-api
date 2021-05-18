export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://api:api@localhost:27017/admin',
  port: process.env.PORT || 5050
}
