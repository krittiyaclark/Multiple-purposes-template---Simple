// Theme Name: Simple
// Theme URI: http://www.themeyourweb.com
// Description:  Simple : Responsive Corporate Theme
// Author URI: http://www.themeyourweb.com 
// License: GNU General Public License version 3.0
// License URI: http://www.gnu.org/licenses/gpl-3.0.html
// Version: 1.0

/*********************************/	
//Twitter ************************/
/*********************************/

$(document).ready(function() {
    
    	(function($){
    	
		    $(".tweet").tweet({
		        username: "themyourweb", // Your Twitter ID
		        join_text: "auto",
		        avatar_size: 32, // Avatar size
		        count: 1, // Tweet counts
		        auto_join_text_default: "we said,", // You can change this message
		        auto_join_text_ed: "we", // You can change this message
		        auto_join_text_ing: "we were", // You can change this message
		        auto_join_text_reply: "we replied to", // You can change this message
		        auto_join_text_url: "we were checking out", // You can change this message
		        loading_text: "loading tweets..." // You can change this message
		    });
	    
	    })(jQuery);
    
});
