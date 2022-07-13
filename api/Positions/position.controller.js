const {
    read_all_positions,
    create_position,
    read_position,
    update_position,
    delete_position
  } = require("./position.service");

  module.exports = {
    readallpositions: async (req, res) => {
      try {
        await read_all_positions((err, results) => {
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
    readposition : async (req, res) => {
      try {
          const id = req.params.id
          await read_position(id,(err, results) =>{
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
    createposition : async (req, res) => {
      try {
          const data = req.body;
          await create_position(data,(err, results) =>{
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
                  message: "position SUCCESSFULLY CREATED",
                  data: results
              });
          })
      } catch (error) {
          console.log(error);
          res.status(500).send("SERVER ERROR!")
      }
  },
  updateposition : async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await update_position(id,data,(err, results) =>{
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
            message: "position SUCCESSFULLY UPDATE!",
            data: results
        });
    })
},
deleteposition : async (req, res) => {
  const id = req.params.id
  await delete_position(id,(err, results) =>{
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
          message: "position SUCCESSFULLY DELETED!",
          data: results
      });
  })
},
  
}