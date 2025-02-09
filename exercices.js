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
