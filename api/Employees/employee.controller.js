const {
    read_all_employees,
    create_employee,
    read_employee,
    update_employee,
    delete_employee
  } = require("./employee.service");

  module.exports = {
    readallemployees: async (req, res) => {
      try {
        await read_all_employees((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: false,
              message: "error",
            });
          }
          return res.json({
            success: true,
            data: results,
          });
        });
      } catch (error) {
        console.log(error);
        res.status(500).send("SERVER ERROR!");
      }
    },
    reademployee : async (req, res) => {
      try {
          const id = req.params.id
          await read_employee(id,(err, results) =>{
              if(err){
                  console.log(err.error);
                  return;
              }   
              if(!results){
                  return res.json({
                      success: false,
                      message: "error"
                  });
              }
              return res.json({
                  success: true,
                  data: results
              });
          })
      } catch (error) {
          console.log(error);
          res.status(500).send("SERVER ERROR!")
      }

  },
    createemployee : async (req, res) => {
      try {
          const data = req.body;
          await create_employee(data,(err, results) =>{
              if(err){
                  console.log(err);
                  return;
              }   
              if(!results){
                  return res.json({
                      success: false,
                      message: "error"
                  });
              }
              return res.json({
                  success: true,
                  message: "employee SUCCESSFULLY CREATED",
                  data: results
              });
          })
      } catch (error) {
          console.log(error);
          res.status(500).send("SERVER ERROR!")
      }
  },
  updateemployee : async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await update_employee(id,data,(err, results) =>{
        if(err){
            console.log(err);
            return;
        }   
        if(!results){
            return res.json({
                success: false,
                message: "error"
            });
        }
        return res.json({
            success: true,
            message: "employee SUCCESSFULLY UPDATE!",
            data: results
        });
    })
},
deleteemployee : async (req, res) => {
  const id = req.params.id
  await delete_employee(id,(err, results) =>{
      if(err){
          console.log(err);
          return;
      }   
      if(!results){
          return res.json({
              success: false,
              message: "error"
          });
      }
      return res.json({
          success: true,
          message: "employee SUCCESSFULLY DELETED!",
          data: results
      });
  })
},
  
}