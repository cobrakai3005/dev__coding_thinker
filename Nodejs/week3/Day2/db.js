const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://himan30051999_db_user:kWOmcN0LEyUsLrYi@cluster0.3cw80m2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`Mongodb Connected, ${connection.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Connection Error `);
  }
};

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User, dbConnect };
