const { default: mongoose } = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
//Smodel

const User = mongoose.model("User", userSchema);

const dbConnect = async () => {
  const mongoose = require("mongoose");

  try {
    const connection = await mongoose.connect(
      "mongodb+srv://himan30051999_db_user:kWOmcN0LEyUsLrYi@cluster0.3cw80m2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`Mongodb Connected, ${connection.connection.host}`);

    //1 Create  a new Document
    // await User.insertOne({ name: "Love", email: "l@gmail.com", age: 10 });

    //2 method using Constructor Method
    // const user = new User({
    //   name: "Himanshu",
    //   email: "h@gmail.com",
    //   age: 16,
    // });
    // await user.save();

    //Read

    const data = await User.find();
    console.log(data);

    //Update

    const updated = await User.updateOne({ name: "Love" }, { name: "Rohit" });

    console.log(updated);

    //Deleted
    await User.deleteOne({ name: "Rohit" });
  } catch (error) {
    console.log(`Mongodb Connection Error `);
  }
};
dbConnect();
