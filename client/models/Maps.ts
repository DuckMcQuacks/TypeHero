import mongoose from 'mongoose';
const { Schema } = mongoose;

const MapSchema = new Schema({
  name: { type : String , unique : true, required : true, dropDups: true },
  text: { type : String , unique : true, required : true, dropDups: true },
  timesCompleted: {type : Number},
  authorTime: {type: Number, required: true},
  authorName: {type: String, required: true},
  averageTime: {type : Number}
});

const MapModel = mongoose.model("Map", MapSchema);

export default MapModel;