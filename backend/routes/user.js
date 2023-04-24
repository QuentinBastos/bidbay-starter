import express from 'express'
import { User, Product, Bid } from '../orm/index.js'

const router = express.Router()
// try catch pas sur
try {

router.get('/api/users/:userId', async (req, res) => {
  res.status(200).send()
})
} catch(e) {
  router.get('/api/users/:userId', async (req, res) => {
    res.status(404).send()
  })
}

export default router
