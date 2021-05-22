Describe: destinationInformation()

Test: "It will create an object with certain properties in each initialization of the constructor."
Code: new destinationInformation("Nanyuki", "Mt Kenya", "2020","I enjoyed the scenery in this place. It was incredibly beautiful.")
Expected Output: destinationInformation {location: "Nanyuki", landmarks: "Mt Kenya", visitedYear: "2020", notes: "I enjoyed the scenery in this place. It was incredibly beautiful."}

Describe: DestinationCollection()

Test: "It will store destination objects and also show the id of each object."
Code:
let destinationCollection = new DestinationCollection();
let destination01 = new destinationInformation("Nanyuki", "Mt Kenya", "2020","I enjoyed the scenery in this place. It was incredibly beautiful.");
destinationCollection.addDestination(destination01);
destinationCollection;
Expected Output: DestinationCollection {destinations: {…}, currentId: 1}