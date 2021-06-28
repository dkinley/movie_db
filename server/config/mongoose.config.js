const mongoose = require('mongoose');
const dbName = "movies-db"; // grabbed library and created a convenience variable "db_name"

mongoose.connect("mongodb://localhost/" + dbName, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
    })
.then(() => console.log(`Successfully connected to the ${dbName} database`))
.catch((err) => { 

    console.log(`Something went wrong while connecting with the "${dbName}" database`)
    console.log(err); // <-- make sure the object is printed instead of the words "Object: Object"
});