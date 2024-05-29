import { config } from "dotenv"
import connectDB from "./db/mongodb.js";
import { app } from "./app.js";

config();

connectDB()
.then(() => {
  app.on("error",(error) => {
    console.log(error);
    throw error;
  });
  app.listen(process.env.PORT || 8000,() => {
    console.log(`Server is runnig on Port : ${process.env.PORT}`)
  });
})
.catch((err)=>{
  console.log("Mongo db connection failed ",err);
});











//when you are try to connect to database always use try catch block  promise 
//alway use async await

/*
;( async () => {
    try {
        const connectionString = await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(connectionString);
      app.on("error",() => {
        console.log("Error while connnecting to server",error);
        throw error;
      })

      app.listen(process.env.PORT,() => {
        console.log(`App is listen on Port ${process.env.PORT}`)
      })
    } catch (error) {
        console.error("Error in Connecting mongodb : ",error);
        throw error;
    }

})()
*/