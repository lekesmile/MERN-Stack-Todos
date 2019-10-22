const express = require('express')
const router = express.Router()
const todoSchema = require('../models/todoSchema')



router.get('/', async (req, res, next) => {
    try {
        const getAllTodo = await todoSchema.find({});
        res.status(200).send(getAllTodo)
        next()
    } catch (error) {
        res.status(404).send({ "message": "database is down please try again later", error })

    }

})

router.get('/:id', async (req, res, next) => {
    try {
        const getOneTodo = await todoSchema.findById(req.params.id);
        res.status(200).send(getOneTodo)
        next()
    } catch (error) {
        res.status(404).send({ "message": "database is down please try again later", error })

    }

})


router.post('/', async (req, res, next) => {
    const todo = new todoSchema({
        discription: req.body.discription,
        responsible: req.body.responsible,
        priority: req.body.priority,
        isCompleted:req.body.isCompleted
    })

    try {
        await todo.save();
        res.status(201).send({ "message": "todos added", todo })
        next()
    } catch (error) {
        res.status(404).send({ "message": "database is down please try again later", error })
    }
})


router.put('/:id', async (req, res, next) =>{
    try {
        const getOneTodo = await todoSchema.findOneAndUpdate({ _id: req.params.id }, req.body);
        const getUpdated = await todoSchema.findOne({ _id: req.params.id })
        res.status(200).send({ " message": "`Update successfully", getUpdated})
        next()
    } catch (error) {
        res.status(404).send({ "message": "database is down please try again later", error })

    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleted =  await todoSchema.findByIdAndDelete({_id:req.params.id})
        res.status(200).send({ " message": "`Todos delected", deleted })
    } catch (error) {
        res.status(404).send({ "message": "database is down please try again later", error })
    }
 
})

module.exports = router