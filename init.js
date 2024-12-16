const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let allChats = [
//   {
//     from: "Neha",
//     to: "Priya",
//     msg: "send me your exam sheets",
//     created_at: new Date(),
//   },
//   {
//     from: "Manoj",
//     to: "Kamini",
//     msg: "When are you coming to mess?",
//     created_at: new Date(),
//   },
//   {
//     from: "Kamini",
//     to: "Manoj",
//     msg: "When will you wake up it is 10 in the morning!",
//     created_at: new Date(),
//   },
//   {
//     from: "Monica",
//     to: "Phoebe",
//     msg: "I love to win and clean you know!",
//     created_at: new Date(),
//   },
//   {
//     from: "Chandler",
//     to: "Joey",
//     msg: "Uhuh! I am funny and you are a wonderful actor!",
//     created_at: new Date(),
//   },
// ];

// Chat.insertMany(allChats);
