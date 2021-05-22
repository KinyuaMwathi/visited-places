// Business Logic

function destinationInformation (location, landmarks, visitedYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.visitedYear = visitedYear;
  this.notes = notes;
}

function DestinationCollection() {
  this.destinations = {};
  this.currentId = 0;
}

DestinationCollection.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
}

DestinationCollection.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}