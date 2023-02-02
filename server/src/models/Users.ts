import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type : String , unique : true, required : true, dropDups: true },
  password: { type : String, required : true},
  email: { type : String , unique : true, required : true, dropDups: true }
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;