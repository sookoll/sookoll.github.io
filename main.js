;( function(window, $, undefined) {
	
	"use strict";
	
	// generate navbar (to all pages and servers (blog, hub, www))
	var html = '<li>\
					<ul>\
						<li>\
							<a href="//sookoll.ee" target="tab">Avaleht\
							<br>\
							<small>sookoll.ee</small></a>\
						</li>\
						<li>\
							<a href="//blog.sookoll.ee" target="tab">Blog\
							<br>\
							<small>blog.sookoll.ee</small> </a>\
						</li>\
					</ul>\
				</li>\
				<li>\
					<h3>Asju:</h3>\
					<ul>\
						<li>\
							<a href="//sookoll.ee/geopusle" target="tab">Geopusle\
							<br>\
							<small>Geograafiline mäng</small></a>\
						</li>\
						<li>\
							<a href="//hub.sookoll.ee/estgis2013" target="tab">GIS tulevik on JS\
							<br>\
							<small>Ettekanne ESTGIS 2013 konverentsil</small> </a>\
						</li>\
					</ul>\
				</li>\
				<li>\
					<h3>Teen ja kasutan:</h3>\
					<ul>\
						<li>\
							<a href="#" target="tab">Veebiarendus\
							<br>\
							<small>HTML5, CSS3, JS, PHP</small></a>\
						</li>\
						<li>\
							<a href="http://ol3js.org" target="tab">OpenLayers\
							<br>\
							<small>Veebikaardi raamistik</small> </a>\
						</li>\
						<li>\
							<a href="http://leafletjs.com/" target="tab">Leaflet\
							<br>\
							<small>Veebikaardi raamistik</small> </a>\
						</li>\
						<li>\
							<a href="http://d3js.org/" target="tab">D3.js\
							<br>\
							<small>Andmete manipuleerimine veebis</small> </a>\
						</li>\
						<li>\
							<a href="http://gdal.org" target="tab">GDAL/OGR\
							<br>\
							<small>Geoandmete töötlemine</small></a>\
						</li>\
						<li>\
							<a href="http://postgis.org" target="tab">PostGIS\
							<br>\
							<small>Geoandmete haldamine</small></a>\
						</li>\
						<li>\
							<a href="http://mapserver.org" target="tab">MapServer\
							<br>\
							<small>Kaartide ja andmete serveerimine</small></a>\
						</li>\
						<li>\
							<a href="http://geoserver.org" target="tab">GeoServer\
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
							<a href="http://www.eoy.ee/jaalind" target="tab">Eesti Aasta lind 2014\
							<br>\
							<small>Vaatluste sisestamiste rakendus</small> </a>\
						</li>\
						<li>\
							<a href="http://www.eoy.ee/talv" target="tab">Talvine aialinnuvaatlus 2013, 2014\
							<br>\
							<small>Veebilehe lahendus ja vaatluste rakendus</small> </a>\
						</li>\
						<li>\
							<a href="http://www.eoy.ee/paasuke" target="tab">Pääsupesade loendus 2013\
							<br>\
							<small>Vaatluste sisestamise rakendus</small> </a>\
						</li>\
						<li>\
							<a href="http://www.eoy.ee/nurmkana" target="tab">Eesti Aasta lind 2013\
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
							<a href="https://twitter.com/sookoll" target="tab">Twitter\
							<br>\
							<small>kui säutsud</small> </a>\
						</li>\
						<li>\
							<a href="https://github.com/sookoll" target="tab">GitHub\
							<br>\
							<small>kui kribad koodi</small> </a>\
						</li>\
					</ul>\
				</li>';
	
	// add html to navbar
	$('.navbar').html(html);
	$('.navbar a').each(function(){
		if($(this).attr('href') === window.location.hostname){
			$(this).addClass('active');
		}
	});
	
	$('.content img').addClass('img-responsive');
	$('.content a').each(function(){
		if(this.hostname != window.location.hostname){
			$(this).attr('target','_blank');
		}
	});

}( window, jQuery ));