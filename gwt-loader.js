	   /******************************************************************
	   //	Script for loading GWT application
	   //
	   /******************************************************************/

   	var example = new Object(); 

		
		example.fire = {};
		
		example.c2c  = {};


		example.load = function(url,id)
		{
			


			var f = document.getElementById(id);
			if ( f != null )
			{
				document.getElementsByTagName('head')[0].removeChild(f)
			}

			
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;
			script.id = id;
			document.getElementsByTagName('head')[0].appendChild(script)
			
			
			
		}
		
		
		example.dwr = function ()
		{		
			
			var p = document.getElementById("dwr.engine");

			if (p == null)
			{
				setTimeout(function () {example.dwr()}), 50
			}
			else
			{

				if (example.fire.dwr)
					return;
			
				example.fire.dwr = true;
				
								
				example.load("/example/dwr/interface/interface.js","dwr.ajax");
			
			}
			
			
		}
		
	
		
		
		
		example.engine  = function(s) 
		{

			var url = "/example/dwr/engine.js";
			
			
			var f = document.getElementById("dwr.engine");
			if ( f != null )
			{
				document.getElementsByTagName('head')[0].removeChild(f)
			}
			 
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;	
			script.id = "dwr.engine";

			
			example.fire.dwr = false;
			
			
			script.onload = example.dwr;
			
			// IE 6 & 7
			script.onreadystatechange = function() 
			{
				
				if (this.readyState == 'complete' || this.readyState == 'loaded') 
				{
					setTimeout(function () {example.dwr()}), 50
				}
			};


			document.getElementsByTagName('head')[0].appendChild(script)
			
			
		}
		
		/*
		 * 
		 */
		example.application = function()
		{		
			
			var p = document.getElementById("module.name");
			if (p == null)
			{
				setTimeout(function () {example.application()}), 50
			}
			else
			{
				if (example.fire.application)
					return;
			
				example.fire.application = true;
				
				
				module_name.onInjectionDone('module.name');
			}
			
		}
		
		
		
		example.call = function() 
		{

			
			var url = "/example/example.name/example.name.nocache.js";
			
			var p = document.getElementById("module.name");
			if ( p != null )
			{
				document.getElementsByTagName('body')[0].removeChild(p)
			}
			
			var f = document.getElementById("example.application");
			if ( f != null )
			{
				document.getElementsByTagName('head')[0].removeChild(f)
			}

			
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;		
			script.id = "example.application";

			
			example.fire.application = false;
			
			script.onload = example.application;
			
			// IE 6 & 7
			script.onreadystatechange = function() 
			{
				if (this.readyState == 'complete' || this.readyState == 'loaded') 
				{	
					setTimeout(function () {example.application()}), 50
					
				}
			};


			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script)
			
		}
		
		example.start = function ()
		{
						
			example.engine();
			
			example.call();
		
		}
