// Script to ensure Eggbox will work for legacy browsers, that don't support generated content


function addicons(){
  //Create object with list of icons
  var icons = {
  	<% @classes.each_with_index do |name, index| %>
    ".icon-<%= name %>": "&#x<%= (61696+index).to_s(16) %>;",<% end %>
  };

  //Detect IE version
  var browserver = parseInt($.browser.version, 10);

  //Run icon insertion
  if ($.browser.msie && browserver == 6 || browserver == 7) {
    $(".icon").each(function() {
      var $this = $(this);
      var icon = $this.attr("class").split(/\s/);
      for (key in icons) {
        if ([key]==icon[1]) {
          $this.prepend("<span class='icon-legacy'>" + icons[key] + "</span>");
        }
      }
    });
  }
}

//Run function
$(document).ready(function(){
  addicons();
});
