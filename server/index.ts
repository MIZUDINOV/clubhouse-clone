import express from 'express'

const app = express()

app.use('/test', (req, res) => {
  res.send('Hi!')
})

app.listen(3001, () => {
  console.log('Server started...')
})
