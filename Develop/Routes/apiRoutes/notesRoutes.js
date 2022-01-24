const router = require('express').Router();
const {
    filterByQuery,
    findById, 
    createNewNotes, 
    validatreNotes,
} = require ('../../public/assets/js/index');
const { notes } = require('../../data/notes');
const fs = require("fs");


router.get('/notes', (req, res) => {
   res.json(db);
   // reading database json file and return saved notes
});

router.post("/api/notes", function (req, res) {
    db.push(req.body);
    db.forEach((obj, i) =>
    {
        obj.db = i +1;
    });
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
        res.json(db);
    });
});

router.delete('/data-notes/id:', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});


module.exports = router; 