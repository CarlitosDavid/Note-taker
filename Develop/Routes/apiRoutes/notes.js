const router = require('express').Router();
const { filterByQuery, findById, createNewNotes, validatreNotes } = require('../../public/assets/js/index');

router.get('/notes', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    if (!validatreNotes(req.body)) {
        res.status(400).send('note has been not been saved');
    } else {
        const note = createNewNotes(req.body, animals);
        res.json(animal);
    }
});


module.exports = router; 