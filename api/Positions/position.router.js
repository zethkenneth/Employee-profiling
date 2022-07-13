const {
    readallpositions,
    readposition,
    createposition,
    updateposition,
    deleteposition
  } = require("./position.controller");
  
  const router = require("express").Router();
  
  router.get("/", readallpositions);
  router.get("/:id", readposition);
  router.post('/create', createposition);
  router.put('/:id', updateposition);
  router.delete('/:id', deleteposition);

  
  module.exports = router;
  