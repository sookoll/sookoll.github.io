;( function(window, $, undefined) {
	
	"use strict";
	
	// generate navbar (to all pages and servers (blog, hub, www))
	var html = '<li>\
					<ul>\
						<li>\
							<a href="//sookoll.ee">Avaleht\
							<br>\
							<small>sookoll.ee</small></a>\
						</li>\
						<li>\
							<a href="//blog.sookoll.ee">Blog\
							<br>\
							<small>blog.sookoll.ee</small> </a>\
						</li>\
					</ul>\
				</li>\
				<li>\
					<h3>Asju:</h3>\
					<ul>\
						<li>\
							<a href="//sookoll.ee/geopusle" target="_blank">Geopusle\
							<br>\
							<small>Geograafiline mäng</small></a>\
						</li>\
						<li>\
							<a href="//hub.sookoll.ee/estgis2013" target="_blank">GIS tulevik on JS\
							<br>\
							<small>Ettekanne ESTGIS 2013 konverentsil</small> </a>\
						</li>\
					</ul>\
				</li>\
				<li>\
					<h3>Teen ja kasutan:</h3>\
					<ul>\
						<li>\
							<a href="#" target="_blank">Veebiarendus\
							<br>\
							<small>HTML5, CSS3, JS, PHP</small></a>\
						</li>\
						<li>\
							<a href="http://ol3js.org" target="_blank">OpenLayers\
							<br>\
							<small>Veebikaardi raamistik</small> </a>\
						</li>\
						<li>\
							<a href="http://leafletjs.com/" target="_blank">Leaflet\
							<br>\
							<small>Veebikaardi raamistik</small> </a>\
						</li>\
						<li>\
							<a href="http://d3js.org/" target="_blank">D3.js\
							<br>\
							<small>Andmete manipuleerimine veebis</small> </a>\
						</li>\
						<li>\
							<a href="http://gdal.org" target="_blank">GDAL/OGR\
							<br>\
							<small>Geoandmete töötlemine</small></a>\
						</li>\
						<li>\
							<a href="http://postgis.org" target="_blank">PostGIS\
							<br>\
							<small>Geoandmete haldamine</small></a>\
						</li>\
						<li>\
							<a href="http://mapserver.org" target="_blank">MapServer\
							<br>\
							<small>Kaartide ja andmete serveerimine</small></a>\
						</li>\
						<li>\
							<a href="http://geoserver.org" target="_blank">GeoServer\
							<br>\
							<small>Kaartide ja andmete serveerimine</small></a>\
						</li>\
						\
					</ul>\
				</li>\
				<li>\
					<h3>Minu käsi on mängus:</h3>\
					<ul>\
						<li>\
							<a href="http://www.eoy.ee/jaalind" target="_blank">Eesti Aasta lind 2014\
							<br>\
							<small>Vaatluste sisestamiste rakendus</small> </a>\
						</li>\
						<li>\
							<a href="http://www.eoy.ee/talv" target="_blank">Talvine aialinnuvaatlus 2013, 2014\
							<br>\
							<small>Veebilehe lahendus ja vaatluste rakendus</small> </a>\
						</li>\
						<li>\
							<a href="http://www.eoy.ee/paasuke" target="_blank">Pääsupesade loendus 2013\
							<br>\
							<small>Vaatluste sisestamise rakendus</small> </a>\
						</li>\
						<li>\
							<a href="http://www.eoy.ee/nurmkana" target="_blank">Eesti Aasta lind 2013\
							<br>\
							<small>Vaatluste sisestamiste rakendus</small> </a>\
						</li>\
					</ul>\
				</li>\
				<li>\
					<h3>Võta ühendust:</h3>\
					<ul>\
						<li>\
							mihkel [at] sookoll.ee\
						</li>\
						<li>\
							<a href="https://twitter.com/sookoll" target="_blank">Twitter\
							<br>\
							<small>kui säutsud</small> </a>\
						</li>\
						<li>\
							<a href="https://github.com/sookoll" target="_blank">GitHub\
							<br>\
							<small>kui kribad koodi</small> </a>\
						</li>\
					</ul>\
				</li>';
	
	// add html to navbar
	$('.navbar').html(html);
	$('.navbar a').each(function(){
		if($(this).attr('href') === '//'+window.location.hostname){
			$(this).addClass('active');
		}
	});
	
	$('.content img').addClass('img-responsive');
	$('.content a').each(function(){
		if(this.hostname != window.location.hostname){
			$(this).attr('target','_blank');
		}
	});
	
	// up
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});

	$('.back-to-top').click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
	});
	
	// Cache the Window object
	$window = $(window);

	var $bgobj = $('body'); // assigning the object
	$(window).scroll(function() {
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / 6); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
	}); // window scroll Ends	

}( window, jQuery ));

function formatDate(date, fmt) {
	function pad(value) {
		return (value.toString().length < 2) ? '0' + value : value;
	}

	return fmt.replace(/%([a-zA-Z])/g, function(_, fmtCode) {
		switch (fmtCode) {
			case 'Y':
				return date.getUTCFullYear();
			case 'M':
				return pad(date.getUTCMonth() + 1);
			case 'd':
				return pad(date.getUTCDate());
			case 'H':
				return pad(date.getUTCHours());
			case 'm':
				return pad(date.getUTCMinutes());
			case 's':
				return pad(date.getUTCSeconds());
			default:
				throw new Error('Unsupported format code: ' + fmtCode);
		}
	});
}