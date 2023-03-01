import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const connectMongo = async () => mongoose.connect("mongodb+srv://Someone:cbwrUqvT4KVswC9D@typehero.yqdawhq.mongodb.net/?retryWrites=true&w=majority");

export default connectMongo;