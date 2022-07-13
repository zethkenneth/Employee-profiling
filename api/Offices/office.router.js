const {
    readalloffices,
    readoffice,
    createoffice,
    updateoffice,
    deleteoffice
  } = require("./office.controller");
  
  const router = require("express").Router();
  
  router.get("/", readalloffices);
  router.get("/:id", readoffice);
  router.post('/create', createoffice);
  router.put('/:id', updateoffice);
  router.delete('/:id', deleteoffice);

  
  module.exports = router;
  