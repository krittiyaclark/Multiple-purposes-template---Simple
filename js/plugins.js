// Theme Name: Objekt
// Theme URI: http://www.themeyourweb.com
// Description: Objekt Theme is a Responsive layout
// Author URI: http://www.themeyourweb.com 
// License: GNU General Public License version 3.0
// License URI: http://www.gnu.org/licenses/gpl-3.0.html
// Version: 1.3.1

// Avoid `console` errors in browsers that lack a console.

(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();


(function($){

		/**************************************/
		//jQuery \ JSON Contact Form Processing
		/**************************************/

		$('#main-contact-form').submit(function(event){  //added event
	    //stops submit button from functioning as normal, jQuery takes over
	    event.preventDefault(); 
		
		// Turns form data into a sendable format for processing  
	    var data = $('#main-contact-form').serialize();
        
        // run php script, send form data 
	    $.getJSON("email_script.php", data, function(json) {
	    
		    	// result returned in (json)		    	
		    	$('#result p').html(json);
		    		
		      	$('#result').slideDown(300).delay(5000).fadeOut(300);    
	  
	    	});
 
		});
		
		
		/**************************************/
		//jQuery \ JSON Newsletter Signup
		/**************************************/

		$('#news-form').submit(function(event){  //added event
	    //stops submit button from functioning as normal, jQuery takes over
	    event.preventDefault(); 
		
		// Turns form data into a sendable format for processing  
	    var data = $('#news-form').serialize();
        
        // run php script, send form data 
	    $.getJSON("new_subscriber.php", data, function(json) {
	    
		    	// result returned in (json)		    	
		    	$('#news-result p').html(json);
		    	
		   		// slide down, wait 5 seconds, fade out
		      	$('#news-result').slideDown(300).delay(5000).fadeOut(300);    
	  
	    	});
 
		});
		
	})(jQuery);
