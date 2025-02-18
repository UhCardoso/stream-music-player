import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://werlendev:siYbi2wvXSsnzvDC@cluster0.skakl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("streamer");
