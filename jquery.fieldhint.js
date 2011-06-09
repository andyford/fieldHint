/*!
 * fieldHint jQuery Plugin
 * Examples and documentation at: http://fordinteractive.com/tools/jquery/fieldhint/
 * Copyright (c) 2010 Andy Ford
 * Version: 1.0 (2010-06-01)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6+
 */
;(function($) {
	$.fn.fieldHint = function(options) {
		var opts = $.extend({
			hint: this.val(),
			useClass: true,
			defaultClass: 'default'
		},options);
		return this.each(function() {
			if( $(this).val() != opts.hint ) { $(this).val(opts.hint); }
			if ( ($(this).val() == opts.hint) && (opts.useClass) ) { $(this).addClass(opts.defaultClass); }
			$(this).focus(function() {
				if ( $(this).val() == opts.hint ) {
					$(this).val('');
					if ( opts.useClass ) { $(this).removeClass(opts.defaultClass); }
				}
			});
			$(this).blur(function() {
				if ( $(this).val() == '' ) {
					$(this).val(opts.hint);
					if ( opts.useClass ) { $(this).addClass(opts.defaultClass); }
				}
			});
		});
	};
})(jQuery);
