import React, { useState, useEffect } from "react";
import Axios from "axios";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Polygon,
} from "react-leaflet";
import { Icon } from "leaflet";

// MUI Imports
import {
  Grid,
  AppBar,
  Typography,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";

// Map icons
import houseIconPng from "./Assets/Mapicons/house.png";
import apartmentIconPng from "./Assets/Mapicons/apartment.png";
import officeIconPng from "./Assets/Mapicons/office.png";

// Assets
import img1 from "./Assets/img1.jpg";
import myListings from "./Assets/Data/Dummydata";
import polygonOne from "./Shapes";

function Listings() {

  // fetch("http://localhost:8000/apiv1/listings/")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  
  const houseIcon = new Icon({
    iconUrl: houseIconPng,
    iconSize: [40, 40],
  });

  const apartmentIcon = new Icon({
    iconUrl: apartmentIconPng,
    iconSize: [40, 40],
  });

  const officeIcon = new Icon({
    iconUrl: officeIconPng,
    iconSize: [40, 40],
  });

  const [latitude, setLatitude] = useState(9.081097987194463);
  const [longitude, setLongitude] = useState(7.400987794504887);


  function GoEast() {
    setLatitude(51.67404194409724);
    setLongitude(0.1386701261401638)
  }
  function GoCenter() {
    setLatitude(51.48740865233002);
    setLongitude(-0.12667052265135625);
  }

  const polyOne = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  const [allListings, setAllListings] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(true);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    async function GetAllListings() {
      try {
        const response = await Axios.get(
          "http://localhost:8000/apiv1/listings/",
          { cancelToken: source.token }
        );

        setAllListings(response.data);
        setDataIsLoading(false);
      } catch (error) {}
    }
    GetAllListings();
    return () => {
      source.cancel();
    };
  }, []);

  if (dataIsLoading === true) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }
  
  return (
    <Grid container>
      <Grid item xs={4}>
        {allListings.map((listing) => {
          return (
            <Card
              key={listing.id}
              style={{
                margin: "0.5rem",
                border: "1px solid black",
                position: "relative",
              }}
            >
              <CardHeader
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={listing.title}
              />
              <CardMedia
                style={{
                  paddingRight: "1rem",
                  paddingLeft: "1rem",
                  height: "20rem",
                  width: "30rem",
                  cursor: "pointer",
                }}
                component="img"
                image={listing.picture1}
                alt={listing.title}
              />
              <CardContent>
                <Typography variant="body2">
                  {listing.description.substring(0, 200)}...
                </Typography>
              </CardContent>
              {listing.property_status === "Sale" ? (
                <Typography
                  style={{
                    position: "absolute",
                    backgroundColor: "#ff6c38",
                    zIndex: "1000",
                    color: "white",
                    top: "100px",
                    left: "20px",
                    padding: "5px",
                  }}
                >
                  {listing.listing_type}: $
                  {listing.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Typography>
              ) : (
                <Typography
                  style={{
                    position: "absolute",
                    backgroundColor: "#ff6c38",
                    zIndex: "1000",
                    color: "white",
                    top: "100px",
                    left: "20px",
                    padding: "5px",
                  }}
                >
                  {listing.listing_type}: $
                  {listing.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  / {listing.rental_frequency}
                </Typography>
              )}

              {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions> */}
            </Card>
          );
        })}
        <Card>
          {/* <CardHeader
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="Shrimp and Chorizo Paella"
          />
          <CardMedia
            component="img"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent> */}

          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions> */}
        </Card>
      </Grid>
      <Grid item xs={8} style={{ marginTop: "0.5rem" }}>
        <AppBar position="stikcy">
          <div style={{ height: "100vh" }}>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polyline positions={polyOne} weight={10} color="#ff6c38" />
              <Polygon
                positions={polygonOne}
                color="yellow"
                fillColor="blue"
                fillOpacity={0.9}
                opacity="0"
              />

              {allListings.map((listing) => {
                function IconDisplay() {
                  if (listing.listing_type === "House") {
                    return houseIcon;
                  } else if (listing.listing_type === "Apartment") {
                    return apartmentIcon;
                  } else if (listing.listing_type === "Office") {
                    return officeIcon;
                  }
                }
                return (
                  <Marker
                    key={listing.id}
                    icon={IconDisplay()}
                    position={[
                      listing.location.coordinates[0],
                      listing.location.coordinates[1],
                    ]}
                  >
                    <Popup>
                      <Typography variant="h5">{listing.title}</Typography>
                      <img
                        src={listing.picture1}
                        alt=""
                        style={{
                          height: "14rem",
                          width: "18rem",
                          cursor: "pointer",
                        }}
                      />
                      <Typography variant="body1">
                        {listing.description.substring(0, 150)}...
                      </Typography>
                      <Button variant="contained" fullWidth>
                        Details
                      </Button>
                    </Popup>
                  </Marker>
                );
              })}
              <Marker icon={houseIcon} position={[latitude, longitude]}>
                {/* <Popup>
                  <Typography variant="h5">A Title</Typography>
                  <img
                    src={img1}
                    alt=""
                    style={{
                      height: "14rem",
                      width: "18rem",
                      cursor: "pointer",
                    }}
                  />
                  <Typography variant="body1">This is text</Typography>
                  <Button variant="contained" fullWidth>
                    A Link
                  </Button>
                </Popup> */}
              </Marker>
            </MapContainer>
          </div>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Listings;
