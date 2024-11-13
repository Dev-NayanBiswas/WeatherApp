const locations = [
    { location: "New York", latitude: 40.7128, longitude: -74.0060 },
    { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
    { location: "Chicago", latitude: 41.8781, longitude: -87.6298 },
    { location: "Houston", latitude: 29.7604, longitude: -95.3698 },
    { location: "London", latitude: 51.5074, longitude: -0.1278 },
    { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
    { location: "Berlin", latitude: 52.5200, longitude: 13.4050 },
    { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
    { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
    { location: "Mumbai", latitude: 19.0760, longitude: 72.8777 },
    { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
    { location: "Toronto", latitude: 43.6510, longitude: -79.3470 },
    { location: "Mexico City", latitude: 19.4326, longitude: -99.1332 },
    { location: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 },
    { location: "Cape Town", latitude: -33.9249, longitude: 18.4241 },
    { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
    { location: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
    { location: "Seoul", latitude: 37.5665, longitude: 126.9780 },
    { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
    { location: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
    { location: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
    { location: "Singapore", latitude: 1.3521, longitude: 103.8198 },
    { location: "Jakarta", latitude: -6.2088, longitude: 106.8456 },
    { location: "Lagos", latitude: 6.5244, longitude: 3.3792 },
    { location: "Madrid", latitude: 40.4168, longitude: -3.7038 },
    { location: "Rome", latitude: 41.9028, longitude: 12.4964 },
    { location: "Hanoi", latitude: 21.0285, longitude: 105.8542 },
    { location: "Lima", latitude: -12.0464, longitude: -77.0428 },
    { location: "Karachi", latitude: 24.8607, longitude: 67.0011 },
    { location: "Kinshasa", latitude: -4.4419, longitude: 15.2663 },
    { location: "Riyadh", latitude: 24.7136, longitude: 46.6753 },
    { location: "Kuala Lumpur", latitude: 3.1390, longitude: 101.6869 },
    { location: "Addis Ababa", latitude: 9.0320, longitude: 38.7469 },
    { location: "Nairobi", latitude: -1.2864, longitude: 36.8172 },
    { location: "Baghdad", latitude: 33.3152, longitude: 44.3661 },
    { location: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
    { location: "Budapest", latitude: 47.4979, longitude: 19.0402 },
    { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
    { location: "Athens", latitude: 37.9838, longitude: 23.7275 },
    { location: "Manila", latitude: 14.5995, longitude: 120.9842 },
    { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 }
  ];
  

  function getLocations(){
    return locations;
  }

  function getLocationByName(locationName){
    if(!locationName)return null;
    const filteredLocation = locations.filter(item => item.location === locationName);
    if(filteredLocation.length){
        return filteredLocation[0]
    }else{
        return {
            location: "",
            latitude:0,
            longitude:0,
        }
    }
  }

  export {
    getLocations,
    getLocationByName
  }