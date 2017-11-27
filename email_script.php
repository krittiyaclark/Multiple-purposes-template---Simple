<?php

         
//Theme Name: Simple
// Theme URI: http://www.themeyourweb.com
// Description: Simple: Responsive HTML5 Corporate Theme
// Author URI: http://www.themeyourweb.com 
// License: GNU General Public License version 3.0
// License URI: http://www.gnu.org/licenses/gpl-3.0.html
// Version: 0.1


		 // This is the email where the contact form is sending to.	
		 $send_to = "youremail@gmail.com"; // change it to your email address

				 function sanitize($getForm)  {
				  		  
				  		$getForm=filter_var($getForm, FILTER_SANITIZE_EMAIL);
						
				  if(filter_var($getForm, FILTER_VALIDATE_EMAIL)) {
					
						return TRUE; }
						else   {
					    return FALSE; }
				  } 
		
			  if ( !empty($_GET['name']) && !empty($_GET['email']) && !empty($_GET['title']) && !empty($_GET['message']) ) {
				
				  // check if the email address is a valid email, reject anything containing illegal characters
				  $mailcheck = sanitize($_GET['email']);
				  
				  if ($mailcheck==FALSE)
				    {
				    					  
				    $jsonResponse = "Sorry, please input a valid email address";
					echo json_encode($jsonResponse);
					
				    }
				  else
				    {//send email
				    $name = $_GET['name'];
					$email = $_GET['email'];
					$title = $_GET['title'];
					$message = $_GET['message'];
					$jsonResponse = "";
				
				    mail($send_to, $title, $message, "From: $email" );
					
					$jsonResponse = "Thanks, your message has successfully been sent!";
					echo json_encode($jsonResponse);
					
				    }
			   }else{
			   	
			 		$jsonResponse = "Please fill out all of the forms!";
				    echo json_encode($jsonResponse);
				    
			   }
	 
			
?>
