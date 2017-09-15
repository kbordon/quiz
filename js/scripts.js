// Back
var haruTally = 0;
var makotoTally = 0;
var nagisaTally = 0;
var reiTally = 0;
var rinTally = 0;

var tally = function(answerValue) {
  if ( answerValue === "haru") {
    haruTally += 1;
  } else if (answerValue === "makoto") {
    makotoTally += 1;
  } else if (answerValue === "nagisa") {
    nagisaTally += 1;
  } else if (answerValue === "rei") {
    reiTally += 1;
  } else if (answerValue === "rin") {
    rinTally += 1;
  }
}


// front
$(document).ready(function() {
  $("#formColor").submit(function(event) {
    event.preventDefault();
    var color = $("input:radio[name=color]:checked").val();

    tally(color);
    $("#formColor").slideToggle();
    $("#formFood").slideToggle();
  });

  $("#formFood").submit(function(event) {
    event.preventDefault();
    var food = $("input:radio[name=food]:checked").val();

    tally(food);
    $("#formFood").slideToggle();
    $("#formSubject").slideToggle();
  });

  $("#formSubject").submit(function(event) {
    event.preventDefault();
    var subject = $("input:radio[name=subject]:checked").val();

    tally(subject);
    $("#formSubject").slideToggle();
    $("#formBadSubject").slideToggle();
  });

  $("#formBadSubject").submit(function(event) {
    event.preventDefault();
    var badSubject = $("input:radio[name=badSubject]:checked").val();

    tally(badSubject);
    $("#formBadSubject").slideToggle();
    $("#formAnimal").slideToggle();
  });

  $("#formAnimal").submit(function(event) {
    event.preventDefault();
    var animal = $("input:radio[name=food]:checked").val();

    tally(animal);
    $("#formAnimal").slideToggle();
    $(".top").slideToggle();

    if ( haruTally > makotoTally && haruTally > nagisaTally && haruTally > reiTally && haruTally > rinTally) {
      $(".haru").toggle();
    } else if (makotoTally > haruTally && makotoTally > nagisaTally && makotoTally > reiTally && makotoTally > rinTally) {
      $(".makoto").toggle();
    } else if (nagisaTally > makotoTally && nagisaTally > haruTally && nagisaTally > reiTally && nagisaTally > rinTally) {
      $(".nagisa").toggle();
    } else if (reiTally > makotoTally && reiTally > nagisaTally && reiTally > haruTally && reiTally > rinTally) {
      $(".rei").toggle();
    } else if (rinTally > makotoTally && rinTally > nagisaTally && rinTally > reiTally && rinTally > haruTally) {
      $(".rin").toggle();
    } else {
      alert("You're Sousuke.");
    }

  });

});
