import express from 'express'
import { Product, Bid, User } from '../orm/index.js'
import authMiddleware from '../middlewares/auth.js'
import { getDetails } from '../validators/index.js'

const router = express.Router()

router.get('/api/products', async (req, res, next) => {
  const products = await Product.findAll({ attributes: ['id', 'name', 'description', 'category', 'originalPrice', 'pictureUrl', 'endDate', 'sellerId'], include: ['seller', 'bids']})
  res.json(products).status(200).send()
})

router.get('/api/products/:productId', async (req, res) => {
  res.status(200).send()
})

// You can use the authMiddleware with req.user.id to authenticate your endpoint ;)

router.post('/api/products', authMiddleware, async(req, res) => {
  const products = await Product.findAll({ attributes: ['name', 'description', 'category', 'originalPrice', 'pictureUrl', 'endDate']})
  const users = await User.findOne({ attributes: ['id']})
  try { 
    console.log("foo", req.user.id == users.id)
    console.log(req.body)
      res.status(201).json(req.body.findAll)
  } catch (error) {
    console.log(error)
    if (error == "Invalid or missing fields") {
    res.status(400).send()
    }
    if (error == "Unauthorized") {
      res.status(401).send()
    }
  }
})

router.put('/api/products/:productId', async (req, res) => {
  res.status(201).send()
})

router.delete('/api/products/:productId', async (req, res) => {
  res.status(201).send()
})

export default router
