const myboutique = "HellTraps";
const mypotions = 55;
const pricepotions = 10;
const OpenorNot = true;
if (OpenorNot === true) {
  console.log(
    "Welcome to " +
      myboutique +
      " ! We have " +
      mypotions +
      " potions at " +
      pricepotions +
      " gold each. We are open to serve you."
  );
} else {
  console.log("Sorry, we are closed today.");
}
const choice = prompt(
  "What can we offer you today? 1. Name of our shop 2. Name of the wizard 3. Price of the potions if you want to buy 4. Number of potions?"
);
switch (choice) {
  case "1":
    console.log("Our shop is called " + myboutique + ".");
    break;
  case "2":
    console.log("Our wizard is called Merlin.");
    break;
  case "3":
    console.log("Our potions are sold at " + pricepotions + " gold each.");
    break;
  case "4":
    console.log("We have " + mypotions + " potions in stock.");
        
    break;
  default:
    console.log("Invalid choice.");
}
