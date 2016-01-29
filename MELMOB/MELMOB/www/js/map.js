  
$('#vlille').click(function(){
    setVLille(window.myMarker);
});
$('#biblio').click(function(){
    setBibli(window.myMarker);
});   
$('#cinema').click(function(){
    setCine(window.myMarker);
});
$('#musee').click(function(){
    setMusee(window.myMarker);
});
$('#dechet').click(function(){
    setDechet(window.myMarker);
});
$('#garage').click(function(){
    setGarage(window.myMarker);
});
$('#piscine').click(function(){
    setPiscine(window.myMarker);
});
$('#metro').click(function(){
    setMetro(window.myMarker);
});
$('#tram').click(function(){
    setTram(window.myMarker);
});
   
	 var markersTram = L.markerClusterGroup();
     var markersMetro = L.markerClusterGroup();
     var markersPiscine = L.markerClusterGroup();
     var markersGarage = L.markerClusterGroup();
     var markersDechet = L.markerClusterGroup();
     var markersMusee = L.markerClusterGroup();
     var markersCine = L.markerClusterGroup();
     var markersBibli =  L.markerClusterGroup();
     var markersVlille = L.markerClusterGroup();

     // setMarker Tram
     //
     
     
      function setTram(markerMe,markersActive) {
            
				clearMarkersActive(markersTram);
                geojson = tram;
				var myIcon = L.icon({
					iconUrl: 'img/pin_tramway_station.png',
							});
               
				var jsonTram = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.LIBELLE+'</span><br/>';
						layer.bindPopup(poptext);
                        
					}
				});
				  markersTram.addLayer(jsonTram);
                 
				 var popup = L.popup();
            
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersTram.addTo(map);
               
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML = '<b>'+marker.feature.properties.LIBELLE +'</b>'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
                               // marker.openPopup();
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});      
      }

     // setMarker Dechetrie
     // 
      function setMetro(markerMe) {
               clearMarkersActive(markersMetro);
				var geojson = metro;
                
				  
				var myIcon = L.icon({
					iconUrl: 'img/pin_metro_station.png',
							});
               
				var rJson = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.LIBELLE+'</span><br/>';
						layer.bindPopup(poptext);
                        
					}
				});
				  markersMetro.addLayer(rJson);
				 var popup = L.popup();
            
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersMetro.addTo(map);
              
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML =  '<b>'+marker.feature.properties.LIBELLE +'</b>'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
                               // marker.openPopup();
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});      
      }

    // setMarker Dechetrie
    //
    function setPiscine(markerMe) {
            	clearMarkersActive(markersPiscine);
				var geojson = piscine;
                
				  
				var myIcon = L.icon({
					iconUrl: 'img/pin_piscine.png',
							});
               
				var rJson = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.LIBELLE+'</span><br/>';
						layer.bindPopup(poptext);
                        
					}
				});
				  markersPiscine.addLayer(rJson);
				 var popup = L.popup();
            
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersPiscine.addTo(map);
             
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML =  '<b>'+ marker.feature.properties.LIBELLE + '</b>'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
                               // marker.openPopup();
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});      
      }
    // setMarker Dechetrie
    //
    
      function setGarage(markerMe) {
                clearMarkersActive(markersGarage);
    	
				var geojson = garage;
                
				  
				var myIcon = L.icon({
					iconUrl: 'img/pin_abri_velos.png',
							});
               
				var rJson = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.NOM+'</span><br/>';
                        poptext += 'Nbr de places : '+ feature.properties.NBRE_PLACE
						layer.bindPopup(poptext);
                        
					}
				});
				  markersGarage.addLayer(rJson);
				 var popup = L.popup();
            
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersGarage.addTo(map);
              
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML =  '<b>'+marker.feature.properties.NOM + '</b>'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
                               // marker.openPopup();
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});      
      }

    // setMarker Dechetrie
    //
    
      function setDechet(markerMe) {
             clearMarkersActive(markersDechet);
				var geojson = dechet;
                
				  
				var myIcon = L.icon({
					iconUrl: 'img/pin_recycle.png',
							});
               
				var rJson = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.LIBELLE+'</span><br/>';
                        poptext += feature.properties.OUVERTURE
						layer.bindPopup(poptext);
                        
					}
				});
				  markersDechet.addLayer(rJson);
				 var popup = L.popup();
            
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersDechet.addTo(map);
             
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML = '<b>'+ marker.feature.properties.LIBELLE +'</b'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
                               // marker.openPopup();
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});      
      }
    // setMarker Musée
    //
    
      function setMusee(markerMe) {
        	clearMarkersActive(markersMusee);
             var geojson = musee;
                
				  
				var myIcon = L.icon({
					iconUrl: 'img/pin_musee.png',
							});
               
				var rJson = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.LIBELLE+'</span><br/>';
						layer.bindPopup(poptext);
                        
					}
				});
				  markersMusee.addLayer(rJson);
				 var popup = L.popup();
            
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersMusee.addTo(map);
              
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML =  '<b>'+marker.feature.properties.LIBELLE +'</b>'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
                               // marker.openPopup();
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});
      }
      
  // setMarker Cinema theatre
    //
    
      function setCine(markerMe) {
        
             	clearMarkersActive(markersCine);
				var geojson = cine;
                
				  
				var myIcon = L.icon({
					iconUrl: 'img/pin_cinema.png',
							});
               
				var rJson = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.LIBELLE+'</span><br/>';
						layer.bindPopup(poptext);
					}
				});
				  markersCine.addLayer(rJson);
				 var popup = L.popup();
		
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersCine.addTo(map);
            
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML =  '<b>'+marker.feature.properties.LIBELLE +'</b>'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
								//marker.openPopup();
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});
  }

    // setMarker Biblio
    //
    
      function setBibli(markerMe) {
        	clearMarkersActive(markersBibli);
				var geojson = bibli;
                
				  
				var myIcon = L.icon({
					iconUrl: 'img/pin_-biblio_media.png',
							});
               
				var rJson = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.LIBELLE+'</span><br/>';
						layer.bindPopup(poptext);
					}
				});
				  markersBibli.addLayer(rJson);
				 var popup = L.popup();
		
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersBibli.addTo(map);
             
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML = '<b>'+ marker.feature.properties.LIBELLE +'</b>'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
								
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});
}

    // set marker Vlille
    //
    function setVLille(markerMe) {
             
    		clearMarkersActive(markersVlille);
				var geojson = vlille;
                
				  
				var myIcon = L.icon({
					iconUrl: 'img/pin_vlille.png',
							});
               
				var rJson = L.geoJson(geojson, {
					style: function (feature) {
						return {color: feature.properties.color};
					},
					onEachFeature: function (feature, layer) {
						layer.setIcon(myIcon);
						var idStation = feature.properties.NUMERO;
						var poptext = '<span>'+feature.properties.STATION+'</span><br/>';
						poptext += '<span id="span'+feature.properties.NUMERO+'"><a class="checkBike" idStation="'+idStation+'" href="#" >Voir la disponibilité</a></span>';
						layer.bindPopup(poptext);
					}
				});
				  markersVlille.addLayer(rJson);
				 var popup = L.popup();
		
				// CONSTRUCT THE MAP
				// map.fitBounds(markers.getBounds());
				features =  markersVlille.addTo(map);
            
				//map.on('ready', function(markerMe){
                    console.log('ready');
					// Clear out the listing container first.
					info.innerHTML = '';
					var listings = [];
                    
					// Build a listing of markers
					features.eachLayer(function(marker) {
						// Draggable marker coordinates.
						var home = markerMe.getLatLng();
						var distance = (home.distanceTo(marker.getLatLng())).toFixed(1);
						var link = document.createElement('li');
						link.className = 'item';
						link.href = '#map';
						link.setAttribute('data-distance', distance);
				
						// Populate content from each markers object.
						link.innerHTML =  '<b>'+marker.feature.properties.STATION +'</b>'+
							'<br /><small>' + distance + ' metre.</small>';
				
						link.onclick = function() {
							if (/active/.test(this.className)) {
								this.className = this.className.replace(/active/, '').replace(/\s\s*$/, '');
							} else {
								var siblings = info.getElementsByTagName('a');
								for (var i = 0; i < siblings.length; i++) {
									siblings[i].className = siblings[i].className
									.replace(/active/, '').replace(/\s\s*$/, '');
								};
								this.className += ' active';
				
								// When a menu item is clicked, animate the map to center
								// its associated marker and open its popup.
								map.panTo(marker.getLatLng());
						
								$.mobile.changePage( "#mapPage", { reloadPage:false, transition: "fade"} );
								
							}
							return false;
						};
				
						listings.push(link);
					});
				
					// Sort the listing based on the
					// assigned attribute, 'data-listing'
					listings.sort(function(a, b) {
						return a.getAttribute('data-distance') - b.getAttribute('data-distance');
					});
				
					listings.forEach(function(listing) {
						info.appendChild(listing);
					});
                   // });
				
				
				
				$('#map').on('click', '.checkBike', function() {
						var stationId = $(this).attr('idStation');
						$.ajax({
						  url: "http://www.vlille.fr/stations/xml-station.aspx?borne="+stationId,
						  success: function(data){
							 var xml = data,
							  xmlDoc = $.parseXML( xml ),
							  $xml = $( xmlDoc ),
							  $bikes = $xml.find( "bikes" ),
							  $place = $xml.find("attachs");
							  $('#span'+stationId).html('Nombre de vélo : '+$bikes.text()+'<br/>Nombre de place libre : '+$place.text());
						  }
						});
							
				});
  
      
      }
    
   function clearMarkersActive(Active) {
        if (typeof  window.markersActive !== 'undefined') {
            window.markersActive.clearLayers();
        }
        window.markersActive = Active;
       
     }
	
	    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    