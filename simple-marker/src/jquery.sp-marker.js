(function($) {

	$.fn.marker = function(options) {

        var _this = this;

		var defaults = {
            color : "#FFFF00",
        };

		options = $.extend({}, defaults, options);

        var this_mousedown = function() {
            document.designMode = "on";
        };

        var this_mouseup = function() {
            var sel = window.getSelection();
            var range = sel.getRangeAt(0);

            if (sel && range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }

            var rangeCnt = range.toString().length;
            if(rangeCnt > 3) {
                document.execCommand("backcolor", false, options.color);
            }
         
            if(sel) {
                sel.removeAllRanges();
            }

            document.designMode = "off";
        };

        _this.on("mousedown", this_mousedown)
            .on("mouseup", this_mouseup);
            
    };
}(jQuery));

