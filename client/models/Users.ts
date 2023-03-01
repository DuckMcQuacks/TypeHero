import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: { type : String , unique : true, required : true, dropDups: true },
  password: { type : String, required : true},
});
const user = models.User || model('User', UserSchema);

export default user;