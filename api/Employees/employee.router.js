const {
    readallemployees,
    reademployee,
    createemployee,
    updateemployee,
    deleteemployee
  } = require("./employee.controller");
  
  const router = require("express").Router();
  
  router.get("/", readallemployees);
  router.get("/:id", reademployee);
  router.post('/create', createemployee);
  router.put('/:id', updateemployee);
  router.delete('/:id', deleteemployee);

  
  module.exports = router;
  