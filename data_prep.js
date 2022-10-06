



const file_system = require('fs');



var students = [];


module.exports.initialize = function () {

  return new Promise((resolve, reject) => {

    file_system.readFile('students.json', (error, info) => {
      if (!error) 
      {
        students = JSON.parse(info);
        resolve();
      }

      else 
      {
        reject();
      }
    });


    
    
  });
};




module.exports.cpa = function () {

  return new Promise((resolve, reject) => {

    if ((students.length != 0) || (students.length>0) )
    {
      resolve(students);
    }

    else
    {
    reject();
    }
  });
};
