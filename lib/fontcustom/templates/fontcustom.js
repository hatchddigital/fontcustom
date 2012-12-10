  <% @classes.each_with_index do |name, index| %>
    .icon-<%= name %>{
      *zoom: expression( this.runtimeStyle['zoom'] = '1', this.innerHTML = '&#<%= (61696+index) %>;&nbsp;');
    }
  <% end %>
