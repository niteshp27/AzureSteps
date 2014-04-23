$(document).ready(function(){
					$("#wizard").steps({
							

							// Removes the number from the title
							//titleTemplate: "#title#",
							transitionEffect: $.fn.steps.transitionEffect.fade,
							transitionEffectSpeed: 500,
							stepsOrientation: $.fn.steps.stepsOrientation.vertical,
							/* Labels */
								labels: {							
									finish: "<i class='icon-ok-circled2'></i>",
									next: "<i class='icon-right-circled'></i>",
									previous: "<i class='icon-left-circled'></i>"
									
								}
						});
					
					$("#wizard").azuresteps();
					
						//console.log($(".steps .number").length);
						//console.log($($(".steps .number")[0]).html());
					// var cnt = 1; var oldcnt, newcnt;
					// $("a[href='#next']").click(function(){
						// if(typeof newcnt!="undefined" && newcnt>$(".steps .number").length) 
						// { newcnt = 0; oldcnt = 0; }
							// if(typeof oldcnt=="undefined" || oldcnt==0) 
							// oldcnt = cnt; 
							// else 
							// {
								// oldcnt = newcnt-1;
								// cnt = newcnt;
							// }
							// if(typeof newcnt=="undefined" || newcnt==0) 
							// newcnt = cnt+2; 
							// else 
							// {
								// newcnt = newcnt+1;
							// }
		
		
						// if(newcnt >1 ) 	
						// $("#pre").show( "slow", function() {
											// $(this).html(oldcnt);	// Animation complete.
										// });
						// else 			
						// $("#pre").hide( "slow", function() {
											// $(this).html("");	// Animation complete.
										// });
	
						// if(newcnt <= $(".steps .number").length) 	
										// $("#post").show( "slow", function() {
																		// $(this).html(newcnt);	// Animation complete.
										// });
						// else 										
										// $("#post").hide( "slow", function() {
																		// $(this).html("");	// Animation complete.
										// });
// //							if(newcnt >1 ) $("#pre").html(oldcnt); else $("#pre").html("");
// //							if(newcnt <= $(".steps .number").length) $("#post").html(newcnt); else $("#post").html("");
							// console.log(oldcnt+"hi.."+newcnt);
					// });
						
					// $("a[href='#previous']").click(function(){
						// if((typeof newcnt=="undefined" || newcnt<$(".steps .number").length) && (typeof oldcnt=="undefined" || oldcnt == 0)) { return; }
						// else {
						
								// if(typeof oldcnt=="undefined") 
									// oldcnt = cnt; 
								// else 
								// {
									// cnt = oldcnt;
									// oldcnt = oldcnt-1;
								// }	
								// if(typeof newcnt=="undefined") 
									// newcnt = cnt; 
								// else
								// {								
										// //if(newcnt < $(".steps .number").length) 
											// newcnt = cnt+1;										
										// //else
											// //newcnt = newcnt-2;
										
								// }
									
				// // if(newcnt-oldcnt ==1) {
					// // newcnt = newcnt+1;
				// // }
								// if(newcnt <=$(".steps .number").length && oldcnt>0 ) 	
											// $("#pre").show( "slow", function() {
																							// $(this).html(oldcnt);	// Animation complete.
																						// });
								// else 													$("#pre").hide( "slow", function() {
																							// $(this).html("");	// Animation complete.
																						// });
			
								// if(newcnt >0 ) 	
											// $("#post").show( "slow", function() {
																				// $(this).html(newcnt);	// Animation complete.
																			// });
								// else 	
											// $("#post").hide( "slow", function() {
																				// $(this).html("");	// Animation complete.
																			// });	

						// }
																	// //							if(newcnt >=2 && newcnt>0 ) $("#pre").html(oldcnt); else $("#pre").html("");
// //							if(newcnt >1 ) $("#post").html(newcnt); else $("#post").html("");
							// console.log(oldcnt+"bye.."+newcnt);
					// });
										
				}); 