import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import PlaceCard from "./PlaceCard";
import "leaflet/dist/leaflet.css";
import { FaSearchLocation } from "react-icons/fa";
import "./PlaceDetails.css";
import { places } from "../context/language";


// Fix default icon issue for Marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function FlyToMarker({ position, trigger,name,img }) {
  const map = useMap();
  const markerRef = useRef();

  React.useEffect(() => {
    if (trigger && markerRef.current) {
      // Fly to the marker
      map.flyTo(position, 16, { duration: 1 });
      // Open the popup
      markerRef.current.openPopup();
    }
  }, [trigger, map, position]);

  return (
    <Marker ref={markerRef} position={position}>
      <Popup>
        <div style={{ textAlign: "center" }}>
          <img 
            src={img} 
            alt={name} 
            style={{ width: "150px", height: "100px", objectFit: "cover", borderRadius: "5px" }} 
          />
          <div style={{ marginTop: "5px", fontWeight: "bold" }}>{name}</div>
        </div>
      </Popup>
    </Marker>
  );
}


const PlaceDetails = () => {
  const [position,setPosition] = useState([9.6606, 80.0117]);
  const [flyTrigger, setFlyTrigger] = useState(false);
  const [lat,setLat] = useState(null);
  const [long,setLong] = useState(null);
  const [img,setImg] = useState(null);
  const [name,setName] = useState('');
  const [images,setImages] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [lang,setLang] =useState(() => {
        return localStorage.getItem("language") || "engilsh";
      });

  const filteredPlaces = places[lang].filter(p =>
  p.Name.toLowerCase().includes(searchText.toLowerCase())
);


  const handleCardClick = (place) => {
     
    // setPosition[place.lat,place.long]
    setLat(place.lat)
    setLong(place.long)
    setName(place.Name)
    setImg(place.img)
    setImages(place.images)
    setFlyTrigger((prev) => !prev); // toggle trigger to fly
    
  };

  return (
    <div className="placedetails">
      <div className="placedetails-left">

        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: "90vh", width: "50vw", marginTop: "10vh" }}
        >
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
            attribution="&copy; OpenStreetMap"
          />
          {lat && long &&
          <FlyToMarker position={[lat,long]} trigger={flyTrigger} name={name} img={img}/>
          }
        </MapContainer>

        {images?.length > 0 &&  
        <div className="place-images"> 
         {  
          images.map((src, i) => {
            return <img key={i} src={src} />;
          })
        }  
        </div>
        }

      </div>  
      <div className="placedetails-right">

          <div className="placedetails-right-top">
              <div className="placedetails-right-search">
                <input type="text"  placeholder="Search Places ..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <div><FaSearchLocation /></div>
              </div>
              {/* <div className="placedetails-right-select">
                <select name="" id="">
                  <option value="">Beach</option>
                  <option value="">Park</option>
                </select>
              </div> */}
            </div>


        <div className="placedetails-right-body">
         {filteredPlaces.map((place, index) => (
            <PlaceCard 
              key={index} 
              onClick={()=>handleCardClick(place)} 
              name={place.Name} 
              img={place.img} 
            />
          ))}

          
  
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
