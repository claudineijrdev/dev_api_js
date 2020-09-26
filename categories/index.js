import express from 'express'
import create from './services/create'
import list from './services/list'
import remove from './services/remove'
const router = express.Router()

router.get('/', list)
router.post('/', create)
router.post('/:id', remove)

export default router