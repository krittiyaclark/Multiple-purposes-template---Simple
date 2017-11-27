// Theme Name: Simple
// Theme URI: http://www.themeyourweb.com
// Description:  Simple : Responsive Corporate Theme
// Author URI: http://www.themeyourweb.com 
// License: GNU General Public License version 3.0
// License URI: http://www.gnu.org/licenses/gpl-3.0.html
// Version: 1.0

//dropdown menu//
         $(document).ready(function() {
			
				// Create the dropdown bases
				$("<select />").appendTo(".navigation nav");
				
				// Create default option "Go to..."
				$("<option />", {
				   "selected": "selected",
				   "value"   : "",
				   "text"    : "Go to..."
				}).appendTo("nav select");
				
				
				// Populate dropdowns with the first menu items
				$(".navigation nav li a").each(function() {
				 	var el = $(this);
				 	$("<option />", {
				     	"value"   : el.attr("href"),
				    	"text"    : el.text()
				 	}).appendTo("nav select");
				});
				
				//make responsive dropdown menu actually work			
		      	$("nav select").change(function() {
		        	window.location = $(this).find("option:selected").val();
		      	});

		});
   