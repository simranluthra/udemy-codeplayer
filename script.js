function updateOutput(){
  //to display html content in iframe
 $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

//eval javascript within iframe
// .val to get value
document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}

$(".toggleButton").hover(function() {
$(this).addClass("highlightedButton");
} , function(){
  $(this).removeClass("highlightedButton");
});
$(".toggleButton").click(function(){
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");

  // to get the id of the button clicked
var panelId = $(this).attr("id") + "Panel";
$("#" + panelId).toggleClass("hidden");

//jquery count elements with class
var numberOfActivePanels = 4 - $('.hidden').length;
$(".panel").width(($(window).width() / numberOfActivePanels) - 15);

})

//to fix the height of the textarea
$(".panel").height($(window).height() - $("#header").height()-15);
//to fix the width of the textarea
$(".panel").width(($(window).width() / 2) - 15);


updateOutput();

//jquery query when textarea updated
$("textarea").on('change keyup paste', function() {
updateOutput();
});
