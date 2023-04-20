const express = require('express');
const router = express.Router();
const Show = require('../../models/Show');

router.get('/test', (req, res) => res.send('tv show route test successful!'));


// Get all Shows
router.get('/', (req,res) => {
    Show.find()
        .then(show => res.json(shows))
        .catch(err => res.status(404).json({ noshowsfound: 'No TV Shows found'}));
});

//get single Show by ID
router.get('/:id', (req, res) => {
    Show.findById(req.params.id)
      .then(show => res.json(show))
      .catch(err => res.status(404).json({ noshowfound: 'No TV Show found' }));
});

//add/save Show
router.post('/add', (req, res) => {
    Show.create(req.body)
      .then(show => res.json({ msg: 'TV Show added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this TV Show' }));
});


// Update Show
router.put('/:id', (req,res) => {
    Show.findByIdAndUpdate(req.params.id, req.body)
        .then(show => res.json({msg: 'Updated TV Show Successfully!'}))
        .catch(err=>
            res.status(400).json({error: 'Unable to update TV Show'})
        );
});

//Delete Show
router.delete('/:id', (req, res) => {
    Show.findByIdAndRemove(req.params.id, req.body)
      .then(show => res.json({ mgs: 'TV Show entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a TV Show' }));
});

module.exports = router;