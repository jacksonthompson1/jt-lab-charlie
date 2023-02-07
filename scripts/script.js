$(function () {
  console.log("bring the wow");

  var $drag_counter = $("#event-drag")
    counts = 0;
 
    $( "#draggable" ).draggable({
      drag: function() {
        counts++;
        updateCounterStatus( $drag_counter, counts );
      }
      
    });

    function updateCounterStatus( $event_counter, new_count ) {
      
      if (new_count < 174) {
        //you need a longer drag!
        $("#gameOutput").text("Keep dragging!");

      }
      else if(new_count == 174){
        $("#gameOutput").text("Woowop loves you");

      }
      else {
        $("#gameOutput").text("Calm down!");
      }      
      
      $( "span.count", $event_counter ).text( new_count );
    }
});
