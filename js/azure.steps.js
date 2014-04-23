(function($){
	
	$.fn.azuresteps = function(){
		return $(this).each(function(){
			var self = $(this);
			var cnt = 1; var oldcnt, newcnt;
			var next = self.find("a[href='#next']"),
				prev = self.find("a[href='#previous']");
			init();
			// next.click(getNext);				
			// prev.click(getPrevious);
			next.on( "click",getNext);	
			prev.on( "click",getPrevious);	

			function init(){
				console.log("initialised...");
				self.prepend("<section id='post' >2</section> ");
				self.prepend("<section id='pre' ></section> ");
			};
			function getNext(){
				if(typeof newcnt!="undefined" && newcnt>$(".steps .number").length) 
				{ 
					newcnt = 0; oldcnt = 0; 
				}
							if(typeof oldcnt=="undefined" || oldcnt==0) 
								oldcnt = cnt; 
							else 
							{
								oldcnt = newcnt-1;
								cnt = newcnt;
							}
							if(typeof newcnt=="undefined" || newcnt==0) 
								newcnt = cnt+2; 
							else 
							{
								newcnt = newcnt+1;
							}
		
		
						if(newcnt >1 ) 	
						$("#pre").show( "slow", function() {
											$(this).html(oldcnt);	// Animation complete.
										});
						else 			
						$("#pre").hide( "slow", function() {
											$(this).html("");	// Animation complete.
										});
	
						if(newcnt <= $(".steps .number").length) 	
										$("#post").show( "slow", function() {
																		$(this).html(newcnt);	// Animation complete.
										});
						else 										
										$("#post").hide( "slow", function() {
																		$(this).html("");	// Animation complete.
										});
				console.log(oldcnt+"::"+cnt+"::"+newcnt);			
			};
			
			function getPrevious(){
				if((typeof newcnt=="undefined" || newcnt<$(".steps .number").length) && (typeof oldcnt=="undefined" || oldcnt == 0)) { return; }
						else {
						
								if(typeof oldcnt=="undefined") 
									oldcnt = cnt; 
								else 
								{
									cnt = oldcnt;
									oldcnt = oldcnt-1;
								}	
								if(typeof newcnt=="undefined") 
									newcnt = cnt; 
								else
								{								
										
											newcnt = cnt+1;										
										
										
								}
											
								if(newcnt <=$(".steps .number").length && oldcnt>0 ) 	
											$("#pre").show( "slow", function() {
																							$(this).html(oldcnt);	// Animation complete.
																						});
								else 													$("#pre").hide( "slow", function() {
																							$(this).html("");	// Animation complete.
																						});
			
								if(newcnt >0 ) 	
											$("#post").show( "slow", function() {
																				$(this).html(newcnt);	// Animation complete.
																			});
								else 	
											$("#post").hide( "slow", function() {
																				$(this).html("");	// Animation complete.
																			});	

						}
																	//							if(newcnt >=2 && newcnt>0 ) $("#pre").html(oldcnt); else $("#pre").html("");

							console.log(oldcnt+"::"+cnt+"::"+newcnt);			
			};
			
		});
	};
	
})(jQuery);