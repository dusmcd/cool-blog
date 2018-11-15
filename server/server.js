const db = require('./db')
const app = require('./app')

db.sync().then(() => {
  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server listening at port ${process.env.PORT}`)
  })
})
