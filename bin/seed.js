const db = require('../server/db')

db.sync({ force: true }).then(() => {
  console.log('db synced')
  db.close()
})
