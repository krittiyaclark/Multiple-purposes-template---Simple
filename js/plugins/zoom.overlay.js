// Theme Name: Simple
// Theme URI: http://www.themeyourweb.com
// Description:  Simple : Responsive Corporate Theme
// Author URI: http://www.themeyourweb.com 
// License: GNU General Public License version 3.0
// License URI: http://www.gnu.org/licenses/gpl-3.0.html
// Version: 1.0



/* 	Image Overlay effect with icon /*
*********************************************************************	
* Variable 'zoomHtml' = path to the icon image 
* Any image can use this effect by adding the class =  .hasOverlay
* 
* An <img> needs a <div class="overlay"></div> directly before the image tag
* Also, both tags need to be wrapped inside of a parent container for 
* mouseover \ mouseout functions to work properly.
*/

$(document).ready(function() {
	
	(function($){
	
	// set variables 
	var zoomImage = $('img.hasOverlay'); // Image ready for zoom function
	var zoomOverlayContainer = $('.overlay'); // Overlay container which is generated over the image
	var zoomIcon = $('.zoomIcon'); // Zoom Icon
	var listBox = $('.listBoxDisplay'); // Outside Container
	var zoomHtml = '<img class="zoomIcon" src="icons/icon/PNG-White/search.png">'; // Icon to append
	
	
	// Append HTML to empty overlay div tags.
	zoomOverlayContainer.html(zoomHtml).css('opacity', '0.7').hide();	
	
	
	// Mouse Event Handler for the image having the overlay effect applied to 		
	zoomImage.mouseenter(function(){
		
		$(this).siblings(zoomOverlayContainer).siblings(zoomIcon).fadeIn('slow');
		//Get the dimensions for image been rolled over		
		var imageWidth = $(this).width();
		var imageHeight = $(this).height();
					
		//Sets the overlay container to the same dimensions as the image	
		$(this).siblings(zoomOverlayContainer).css({
				'position' : 'absolute',
				'width'  : imageWidth,
				'height' : imageHeight,
				'backgroundColor' : '#5BBBA4'
		});
		
		// positions the overlay icon in the center of the image
		// Note: if overlay image is 45x45px, then the last 
		// digits should be half of that (22.5) to get the exact centre of overlay
		$(this).siblings(zoomOverlayContainer).children(zoomIcon).css({
			
			marginLeft : (imageWidth / 2) - 15.5,
			marginTop : (imageHeight /2) - 15.5,
			width: '36px',
			height: '36px'
		
		});
			// Fade In 
			$(this).siblings(zoomIcon).fadeIn();
			$(this).siblings(zoomOverlayContainer).fadeIn('slow');
	
	}); // Close Mouse Enter
		
	// Important!!! - An 'outer most' container to the overlay image 
	// must be set as the selector in order to avoid flickering and other unwanted missbehavior
	zoomOverlayContainer.parent().mouseleave(function(){
		zoomOverlayContainer.fadeOut('fast');
	});
	
	})(jQuery);
	
});