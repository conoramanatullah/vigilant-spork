$(document).ready(function(){
  var dialog = document.querySelector('dialog');
  var exited = 0;

  $("#openModal").click(function(){
    // Open the modal

      dialog.showModal();



  })
  $("#emailForm").submit(function(event){
    //Log email to console

    var email = $("#email").val();
    console.log(email);
    // Change views
    $("#dialog-primary").addClass("hidden");
    $("#dialog-secondary").removeClass("hidden");

    $(".dialog-box").css("max-width","1000px")

  })


  // Exit Intent Functionality
  $(document).on('mouseleave', leaveFromTop);

  function leaveFromTop(e){
    if( e.clientY < 0 && exited==0) // less than 60px is close enough to the top
      dialog.showModal();
      exited++;
}

$(document).mouseup(function (e)
{
    var container = $("#dialog-primary");

    try {
      if(!container.is(e.target) // if the target of the click isn't the container...
           && container.has(e.target).length === 0){
             dialog.close();
           }
    }
    catch(err){
       console.log("Invalid Click Error Caught YAY");
    }
});
});
