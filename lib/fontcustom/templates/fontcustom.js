/**
 * ICON FONT FIX
 *
 * Font fix script moves through all generated supporting browsers (e.g. those
 * that don't support :before/:after) and adding in a new span element with
 * the proper font character code.
 * The character codes MUST be added to the icon_codes array for this
 * technique to function correctly.
 *
 */

$(document).ready(function () {
    if (!Modernizr.generatedcontent) {
        var icon_codes = {
            <% @classes.each_with_index do |name, index| %>
            '<%= name %>': '&#x<%= (61696+index).to_s(16) %>;', <% end %>
        };
        $('[class*="icon-"]').each(function () {
            var $this = $(this)
              , classes = $(this).attr('class').split(' ')
              , icon_class = false;
            for (x = 0; x < classes.length; x++) {
                if (classes[x].indexOf('icon-') === 0) {
                    icon_class = classes[x].replace('icon-', '');
                }
            }
            var prepend_element = '<span class="icon icon-legacy">' +
                                      icon_codes[icon_class] +
                                  '</span>';
            $this.prepend(prepend_element);
        });
    }
});
