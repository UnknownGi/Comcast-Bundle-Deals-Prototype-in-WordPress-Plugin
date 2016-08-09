// :: Displaying Map
google.maps.event.addDomListener(window, 'load', function () {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        disableDefaultUI: true,
        zoomControl: true,
        zoom: 10
    }); 
    
    // :: Fetching Location Services - Current Location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            marker = new google.maps.Marker({
                map: map,
                position: pos
            });
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
    }
    
    // :: Error Handling for Location Services Not Activated or Browser doesn't Support Location Services
    function handleLocationError(browserHasGeolocation, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    }
    
    var searchBox = new google.maps.places.SearchBox(document.getElementById('address'));
    searchBox.addListener('places_changed', function() {
        $('#offerNumber').html('<b style="text-align: center">Offers Available</b>');
        
        var places = searchBox.getPlaces();
        places.forEach(function(place) {
            if (!place.geometry) return;
            
            map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: place.geometry.location,
                disableDefaultUI: true,
                zoomControl: true,
                zoom: 15
            });
            
            if ( /^[0-9]/i.test(place.address_components[place.address_components.length-1].short_name) )
                $('#zipCode').val(place.address_components[place.address_components.length-1].short_name);
            else $('#zipCode').val('');
            
            object.count = 0;
            $('#totalCharge').html('Total Charges: $0.00');
            
            $('#step1').addClass('actived');
            $('#step2').removeClass('actived');
            $('#step3').removeClass('actived');
            $('#step4').removeClass('actived');
            $('#step5').removeClass('actived');
            
            $('#findOffer').show();
            $('#offerCustomization').hide();
            $('#installation').hide();
            $('#yourInformation').hide();
            $('#reviewOrder').hide();
            
            var marker = new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location
            });
        });
    });
});