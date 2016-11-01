var Ticket = function(movieName, time, age, snacks) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
  this.snacks = snacks;
}


Ticket.prototype.calculatePrice = function() {
  this.ticketPrice = 8.00;
  if (this.time !== "select" && this.age !== "select" && this.movieName !== "select") {
    if (this.time === "matinee") {
      this.ticketPrice -= 2.00;
    };
    if (this.age !== "adult") {
      this.ticketPrice -= 1.00;
    }
    for(i=0; i<this.snacks.length; i++) {
      console.log("hi");
      this.ticketPrice += 2.00;
    }
    return this.ticketPrice;

  }
  else{
    alert("Please select all fields.")
    return "";
  };

};

$(function() {
  $("#movie-information").submit(function(event) {
    event.preventDefault();
    var inputtedMovieName = $("#movie-name").val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();
    var inputtedSnacks = [];
    $("input:checkbox[name=snack]:checked").each(function() {
      inputtedSnacks.push($(this).val());
    });
    var newTicket = new Ticket(inputtedMovieName, inputtedTime, inputtedAge, inputtedSnacks);
    var newTicketPrice = newTicket.calculatePrice();
    $("#movieName").append($("#movie-name").val());
    $("#movieTime").append("Time: " + $("#time").val());
    $("#movieAge").append("Age: " + $("#age").val());
    $("input:checkbox[name=snack]:checked").each(function() {
      $("#movieSnacks").append($(this).val() + ", ");
    });
    $("#moviePrice").append("Price: $" + newTicketPrice + ".00");
    $("#ticket").fadeIn();
    console.log(newTicket.snacks);
  })

})
