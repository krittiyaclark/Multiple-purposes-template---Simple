// Theme Name: Simple
// Theme URI: http://www.themeyourweb.com
// Description:  Simple : Responsive Corporate Theme
// Author URI: http://www.themeyourweb.com 
// License: GNU General Public License version 3.0
// License URI: http://www.gnu.org/licenses/gpl-3.0.html
// Version: 1.0

$(document).ready(function() {
	
	(function($){
		
		
	
				$('.sub-nav li a').click(function(e){
					e.preventDefault();
				});
		
				var $container = $('div#portfolio');	
				
				$container.isotope({ //init 
					});
					
				$(window).load(function(){
					
					$container.isotope({ layoutMode: 'fitRows' });
				});
						 
				// filter items when filter link is clicked
				$('ul.sub-nav li a').click(function(){
				
				  var selector = $(this).attr('data-filter');
				  
				  $container.isotope({ layoutMode: 'fitRows', filter: selector	});
				  return false;
				
				});
		
		
	
	})(jQuery);	
		
 
});
