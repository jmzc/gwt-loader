
	   /******************************************************************
	   //	Script for loading GWT application
	   //
	   /******************************************************************/


		var o = new Object(); 

		
		o.load = {};

		o.b = false;
		
		/**
		 * 
		 * Loads GWT application
		 */
		o.application = function()
		{		
			
			var p = document.getElementById("module.name");
			if (p == null)
			{
				setTimeout(function () {o.application();}), 100;
			}
			else
			{
				polaris_contrato_module_name.onInjectionDone('module.name');
			}
			
		};
		
		/**
		 * Loads DWR interfaces
		 */
		o.dwr = function ()
		{		
			
			var p = document.getElementById("name.dwr");
			if (p == null)
			{
				setTimeout(function () {o.dwr();}), 100;
			}
			else
			{
				o.load("/example/dwr/interface/interface1.js");
							
			}
			
		};
		
		/**
		 * Load CSS file
		 */
		o.style = function(s)
		{
			
			if (o.load[s]) 
			{
				return;
			}
			 
			o.load[s] = true;
			
			var oScript = document.createElement('link');
			oScript.rel= 'stylesheet';
			oScript.href= s;		
			document.getElementsByTagName('head')[0].appendChild(oScript);
			
			
			
		};

		/**
		 * Load JS file
		 */
		o.load = function(s)
		{
			


			if (o.load[s]) 
			{
				return;
			}
			 
			o.load[s] = true;
			
			var oScript = document.createElement('script');
			oScript.type = 'text/javascript';
			oScript.src = s;		
			document.getElementsByTagName('head')[0].appendChild(oScript);
			
			
			
		};
		
		/**
		 *  Loads DWR engine & DWR interfaces
		 */
		o.engine  = function(s) 
		{

			if (o.load[s]) 
			{
				return;
			}
			 
			o.load[s] = true;
			 
			var oScript = document.createElement('script');
			oScript.type = 'text/javascript';
			oScript.src = s;	
			oScript.id = "name.dwr";

			
			oScript.onload = o.dwr;
			
			// IE 6 & 7
			oScript.onreadystatechange = function() 
			{
				
				if (this.readyState == 'complete' || this.readyState == 'loaded') 
				{
					o.dwr();
				}
			};


			document.getElementsByTagName('head')[0].appendChild(oScript);
			
			
		};
		
		o.gwt = function (s) 
		{

			
			var p = document.getElementById("module.name");
			if ( p != null )
			{
				document.getElementsByTagName('body')[0].removeChild(p);
			}
			
			var f = document.getElementById("name.application");
			if ( f != null )
			{
				document.getElementsByTagName('head')[0].removeChild(f);
			}
			
			o.b = false;
			
			var oScript = document.createElement('script');
			oScript.type = 'text/javascript';
			oScript.src = s;		
			oScript.id = "name.application";

			
			oScript.onload = o.application;
			
			// IE 6 & 7
			oScript.onreadystatechange = function() 
			{
				if (this.readyState == 'complete' || this.readyState == 'loaded') 
				{	
					if (!o.b)
					{
						o.b = true;
						o.application();
					}
				}
			};


			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(oScript);
			
		};
		
		/**
		 * 		Initial function to load:
		 * 		- styles ( only it's required if you load two or more GWT application by this way )
		 *  	- DWR engine & remote interfaces ( only it's required if you load DWR framework )
		 *  	- GWT application
		 */
		o.init = function ()
		{
			// Style
			o.style("/example/module.name/style1.css");
			o.style("/example/module.name/style2.css");
			
			// DWR
			o.engine("/example/dwr/engine.js");
			
			// GWT
			o.gwt("/example/module.name/module.name.nocache.js");
		
		};

		
	