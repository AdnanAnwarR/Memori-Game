const emot = [
  "😊",
  "😊",
  "😂",
  "😂",
  "🤣",
  "🤣",
  "❤️",
  "❤️",
  "😍",
  "😍",
  "😒",
  "😒",
  "😁",
  "😁",
  "😎",
  "😎",
];

var acak = emot.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (var i = 0; i < emot.length; i++) {
  var box = document.createElement("div");
  box.className = "items";
}
