<?php


// Theme Name: Simple
// Theme URI: http://www.themeyourweb.com
// Description: Simple: Responsive HTML5 Corporate Theme
// Author URI: http://www.themeyourweb.com 
// License: GNU General Public License version 3.0
// License URI: http://www.gnu.org/licenses/gpl-3.0.html
// Version: 0.1


		 // This is the email where the newsletter signup message is going to.	
		 $send_to = "youremail@gmail.com";  // change it to your email address

				 function sanitize($getForm)  {
				  		  
				  		$getForm=filter_var($getForm, FILTER_SANITIZE_EMAIL);
						
				  if(filter_var($getForm, FILTER_VALIDATE_EMAIL)) {
					
						return TRUE; }
						else   {
					    return FALSE; }
				  } 
		
			  if ( !empty($_GET['email'])  ) {
				
				  // check if the email address is a valid email, reject anything containing illegal characters
				  $mailcheck = sanitize($_GET['email']);
				  
				  if ($mailcheck==FALSE)
				    {
				    					  
				    $jsonResponse = "Sorry, please input a valid email address";
					echo json_encode($jsonResponse);
					
				    }
				  else
				    {//Validation returns true so send email
				    
					$email = $_GET['email'];
					$title = "New Subscriber from Simple";
					$message = "Someone has subscribed to your mailing list from Simple website with the email address " . $email;
					$jsonResponse = "";
				
				    mail($send_to, $title, $message, "From: $email" );
					
					$jsonResponse = "Thank you, email was added to our mailing list.";
					echo json_encode($jsonResponse);
					
				    }
			   }else{
			   	
			 		$jsonResponse = "Sorry, but that email address seems invalid.";
				    echo json_encode($jsonResponse);
				    
			   }
			   
?>