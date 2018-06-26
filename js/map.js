function initMap() {
   var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 52.22125, lng: 21.055614 },
      zoom: 11,
      streetViewControl: false,
      mapTypeControl: false,
      styles: [
         {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#444444"
               }
            ]
         },
         {
            featureType: "landscape",
            elementType: "all",
            stylers: [
               {
                  color: "#f2f2f2"
               }
            ]
         },
         {
            featureType: "poi",
            elementType: "all",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fea0a0"
               }
            ]
         },
         {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fea0a0"
               }
            ]
         },
         {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fea0a0"
               }
            ]
         },
         {
            featureType: "poi.medical",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fea0a0"
               }
            ]
         },
         {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fae7e7"
               }
            ]
         },
         {
            featureType: "poi.place_of_worship",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fea0a0"
               }
            ]
         },
         {
            featureType: "poi.school",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fea0a0"
               }
            ]
         },
         {
            featureType: "poi.sports_complex",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fea0a0"
               }
            ]
         },
         {
            featureType: "road",
            elementType: "all",
            stylers: [
               {
                  saturation: -100
               },
               {
                  lightness: 45
               }
            ]
         },
         {
            featureType: "road.highway",
            elementType: "all",
            stylers: [
               {
                  visibility: "simplified"
               }
            ]
         },
         {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#ffb4b4"
               }
            ]
         },
         {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fbd5d5"
               }
            ]
         },
         {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#ffdfdf"
               }
            ]
         },
         {
            featureType: "transit",
            elementType: "all",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         },
         {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fec0c0"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "all",
            stylers: [
               {
                  color: "#d24a43"
               },
               {
                  visibility: "on"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
               {
                  visibility: "on"
               },
               {
                  color: "#fba4a4"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
               {
                  color: "#ffffff"
               },
               {
                  visibility: "on"
               }
            ]
         },
         {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
               {
                  visibility: "off"
               }
            ]
         }
      ]
   });
   var triangleCoords = [
      { lat: 52.228591, lng: 21.153424 },
      { lat: 52.247684, lng: 21.106215 },
      { lat: 52.256202, lng: 21.008922 },
      { lat: 52.2519, lng: 20.994682 },
      { lat: 52.235797, lng: 20.994002 },
      { lat: 52.220209, lng: 20.985108 },
      { lat: 52.199158, lng: 21.010052 },
      { lat: 52.189671, lng: 21.039211 },
      { lat: 52.194736, lng: 21.096338 },
      { lat: 52.218493, lng: 21.147205 }
   ];
   var bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#fec407",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#fec407",
      fillOpacity: 0.35
   });
   bermudaTriangle.setMap(map);
}
