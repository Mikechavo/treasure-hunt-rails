//= require jquery
$(document).ready(function() {
  const gold = Math.floor(Math.random() * 8) + 1;
  const bomb = Math.floor(Math.random() * 8) + 1;
  let countClicked = 0;
  let countRemain = 4;

  $(".door").on("click", function() {
    const location = $(this).attr("id");
    
    if (location == gold) {
      $(`#${location}`).html("&#x1f308");
      countClicked++;
    } else if (location == bomb) {
      $(`#${location}`).html("&#x2620");
      countClicked++;
    } else {
      $(`#${location}`).html("&#x1f332");
      countClicked++;
    }

    $("#counter").html(countClicked);
    countRemain--;

    $("#countRemain").html(countRemain);

    if (location == bomb) {
      alert("Game over! Please click the restart game button and try again.");
    } else if (location == gold) {
      alert("Congrats! You've won!");
    }

    if (countRemain <= -1) {
      alert("Stop!!! Try again. Please click the restart game");
    }
  });

    if (location == bomb) {
      alert("Game over! Please click the restart game button and try again.");
    } else if (location == gold) {
      alert("Congrats! You've won!");
    }

    if (countRemain <= -1) {
      alert("Stop!!! Try again. Please click the restart game");
    }
  });


