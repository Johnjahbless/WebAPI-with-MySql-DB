const db = require('./config');
let studentAppNo = [];

//connect to database once app is started
db.connect((err) => {
    if (err) {
      throw err;
    }
    //console.log('connected')
  });
  global.db = db;

//populate all appNo array fron database

    //sql query to load all appNo
    let sql = "SELECT id, AppNo FROM users WHERE AppNo = AppNo";
     db.query(sql, function (err, result){
      if(err) {
        console.log(err);
      }else{
        for (var i = 0; i < result.length; i++) {
        studentAppNo.push({'id':result[i].id, 'AppNo':result[i].AppNo});
        }
        studentAppNo.push({'id':result.length + 1, 'AppNo':'COE-DF-0002'});
        console.log(result)
  }
  });


  module.exports = {studentAppNo};