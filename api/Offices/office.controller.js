const {
    read_all_offices,
    create_office,
    read_office,
    update_office,
    delete_office
  } = require("./office.service");

  module.exports = {
    readalloffices: async (req, res) => {
      try {
        await read_all_offices((err, results) => {
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
    readoffice : async (req, res) => {
      try {
          const id = req.params.id
          await read_office(id,(err, results) =>{
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
    createoffice : async (req, res) => {
      try {
          const data = req.body;
          await create_office(data,(err, results) =>{
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
                  message: "office SUCCESSFULLY CREATED",
                  data: results
              });
          })
      } catch (error) {
          console.log(error);
          res.status(500).send("SERVER ERROR!")
      }
  },
  updateoffice : async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await update_office(id,data,(err, results) =>{
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
            message: "office SUCCESSFULLY UPDATE!",
            data: results
        });
    })
},
deleteoffice : async (req, res) => {
  const id = req.params.id
  await delete_office(id,(err, results) =>{
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
          message: "office SUCCESSFULLY DELETED!",
          data: results
      });
  })
},
  
}