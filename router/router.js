const express = require('express')

const router = express.Router()

const Model = require('../model/model')

//Post method
router.post('/post', async(req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    })

    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch (err) { 
        res.status(400).json({message: err.message})
    }
    // res.send('Post api')
})

//Get method
router.get('/get', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    }
    catch (err) { 
        res.status(500).json({ message:err.message})
    }
    // res.send('Get api')
})

//Get method by ID
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        res.json(data)
    }
    catch (err) { 
        res.status(500).json({ message:err.message})
    }
    // res.send('Get by ID api')
})

//Update method by ID
router.patch('/update/:id', async(req, res) => {
    try {
        const id = req.params.id
        const updateData = req.body
        const options = { new: true }
        
        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        )
        res.send(result)
    }
    catch {
        res.status(400).json({ message:err.message})
    }
    // res.send('Update by ID api')
})

//Delete method by ID
router.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted...`)
    }
    catch {
        res.status(400).json({ message:err.message})
    }
    // res.send('Delete by ID api')
})


module.exports = router