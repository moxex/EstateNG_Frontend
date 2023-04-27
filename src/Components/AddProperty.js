import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";
import { useImmerReducer } from "use-immer";

// React Leaflet
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	Polygon,
} from "react-leaflet";

// MUI Imports
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
} from "@mui/material";


const areaOptions = [
  {
    value: "",
    label: "",
  },
  {
    value: "Inner London",
    label: "Inner London",
  },
  {
    value: "Outer London",
    label: "Outer London",
  },
];

const innerLondonOptions = [
  {
    value: "",
    label: "",
  },
  {
    value: "Camden",
    label: "Camden",
  },
  {
    value: "Greenwich",
    label: "Greenwich",
  },
  {
    value: "Hackney",
    label: "Hackney",
  },
  {
    value: "Hammersmith and Fulham",
    label: "Hammersmith and Fulham",
  },
  {
    value: "Islington",
    label: "Islington",
  },
  {
    value: "Kensington and Chelsea",
    label: "Kensington and Chelsea",
  },
  {
    value: "Lambeth",
    label: "Lambeth",
  },
  {
    value: "Lewisham",
    label: "Lewisham",
  },
  {
    value: "Southwark",
    label: "Southwark",
  },
  {
    value: "Tower Hamlets",
    label: "Tower Hamlets",
  },
  {
    value: "Wandsworth",
    label: "Wandsworth",
  },
  {
    value: "Westminster",
    label: "Westminster",
  },
  {
    value: "City of London",
    label: "City of London",
  },
];

const outerLondonOptions = [
  {
    value: "",
    label: "",
  },
  {
    value: "Barking and Dangenham",
    label: "Barking and Dangenham",
  },
  {
    value: "Barnet",
    label: "Barnet",
  },
  {
    value: "Bexley",
    label: "Bexley",
  },
  {
    value: "Brent",
    label: "Brent",
  },
  {
    value: "Bromley",
    label: "Bromley",
  },
  {
    value: "Croydon",
    label: "Croydon",
  },
  {
    value: "Ealing",
    label: "Ealing",
  },
  {
    value: "Enfield",
    label: "Enfield",
  },
  {
    value: "Haringey",
    label: "Haringey",
  },
  {
    value: "Harrow",
    label: "Harrow",
  },
  {
    value: "Havering",
    label: "Havering",
  },
  {
    value: "Hillingdon",
    label: "Hillingdon",
  },
  {
    value: "Hounslow",
    label: "Hounslow",
  },
  {
    value: "Kingston upon Thames",
    label: "Kingston upon Thames",
  },
  {
    value: "Merton",
    label: "Merton",
  },
  {
    value: "Newham",
    label: "Newham",
  },
  {
    value: "Redbridge",
    label: "Redbridge",
  },
  {
    value: "Richmond upon Thames",
    label: "Richmond upon Thames",
  },
  {
    value: "Sutton",
    label: "Sutton",
  },
  {
    value: "Waltham Forest",
    label: "Waltham Forest",
  },
];

function AddProperty() {
    const navigate = useNavigate();

      const initialState = {
        titleValue: "",
        listingTypeValue: "",
        descriptionValue: "",
        areaValue: "",
        boroughValue: "",
        latitudeValue: "",
        longitudeValue: "",
        propertyStatusValue: "",
        priceValue: "",
        rentalFrequencyValue: "",
        roomsValue: "",
        furnishedValue: false,
        poolValue: false,
        elevatorValue: false,
        cctvValue: false,
        parkingValue: false,
        picture1Value: "",
        picture2Value: "",
        picture3Value: "",
        picture4Value: "",
        picture5Value: "",
      };

      function ReducerFuction(draft, action) {
        switch (action.type) {
          case "catchTitleChange":
            draft.titleValue = action.titleChosen;
            break;

          case "catchListingTypeChange":
            draft.listingTypeValue = action.listingTypeChosen;
            break;

          case "catchDescriptionChange":
            draft.descriptionValue = action.descriptionChosen;
            break;

          case "catchAreaChange":
            draft.areaValue = action.areaChosen;
            break;

          case "catchBoroughChange":
            draft.boroughValue = action.boroughChosen;
            break;

          case "catchLatitudeChange":
            draft.latitudeValue = action.latitudeChosen;
            break;

          case "catchLongitudeChange":
            draft.longitudeValue = action.longitudeChosen;
            break;

          case "catchPropertyStatusChange":
            draft.propertyStatusValue = action.propertyStatusChosen;
            break;

          case "catchPriceChange":
            draft.priceValue = action.priceChosen;
            break;

          case "catchRentalFrequencyChange":
            draft.rentalFrequencyValue = action.rentalFrequencyChosen;
            break;

          case "catchRoomsChange":
            draft.roomsValue = action.roomsChosen;
            break;

          case "catchFurnishedChange":
            draft.furnishedValue = action.furnishedChosen;
            break;

          case "catchPoolChange":
            draft.poolValue = action.poolChosen;
            break;

          case "catchElevatorChange":
            draft.elevatorValue = action.elevatorChosen;
            break;

          case "catchCctvChange":
            draft.cctvValue = action.cctvChosen;
            break;

          case "catchParkingChange":
            draft.parkingValue = action.parkingChosen;
            break;

          case "catchPicture1Change":
            draft.picture1Value = action.picture1Chosen;
            break;

          case "catchPicture2Change":
            draft.picture2Value = action.picture2Chosen;
            break;

          case "catchPicture3Change":
            draft.picture3Value = action.picture3Chosen;
            break;

          case "catchPicture4Change":
            draft.picture4Value = action.picture4Chosen;
            break;

          case "catchPicture5Change":
            draft.picture5Value = action.picture5Chosen;
            break;
        }
      }

      const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

    function FormSubmit(e) {
      e.preventDefault();
      console.log("The form has been submitted");
    //   dispatch({ type: "changeSendRequest" });
    }
  return (
    <div
      style={{
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3rem",
        border: "5px solid black",
        padding: "3rem",
      }}
    >
      <form onSubmit={FormSubmit}>
        <Grid item container justifyContent="center">
          <Typography variant="h4">SUBMIT A PROPERTY</Typography>
        </Grid>

        <Grid item container style={{ marginTop: "1rem" }}>
          <TextField
            id="title"
            label="Title"
            variant="standard"
            fullWidth
            value={state.titleValue}
            onChange={(e) =>
              dispatch({
                type: "catchtitleChange",
                titleChosen: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item container style={{ marginTop: "1rem" }}>
          <TextField
            id="listingType"
            label="Listing Type*"
            variant="standard"
            fullWidth
            value={state.listingTypeValue}
            onChange={(e) =>
              dispatch({
                type: "catchlistingTypeChange",
                listingTypeChosen: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item container style={{ marginTop: "1rem" }}>
          <TextField
            id="propertyStatus"
            label="Property Status*"
            variant="standard"
            fullWidth
            value={state.propertyStatusValue}
            onChange={(e) =>
              dispatch({
                type: "catchpropertyStatusChange",
                propertyStatusChosen: e.target.value,
              })
            }
          />
        </Grid>

        <Grid item container justifyContent="space-between">
          <Grid item xs={5} sx={{ marginTop: "1rem" }}>
            <TextField
              id="rentalFrequency"
              label="Rental Frequency"
              variant="standard"
              fullWidth
              value={state.propertyStatusValue}
              onChange={(e) =>
                dispatch({
                  type: "catchRentalFrequencyChang",
                  rentalFrequencyChosen: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={5} sx={{ marginTop: "1rem" }}>
            <TextField
              id="price"
              type="number"
              label="{PriceDisplay()}"
              variant="standard"
              fullWidth
              value={state.priceValue}
              onChange={(e) =>
                dispatch({
                  type: "catchpriceChange",
                  priceChosen: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>

        <Grid item container sx={{ marginTop: "1rem" }}>
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            multiline
            rows={6}
            fullWidth
            value={state.descriptionValue}
            onChange={(e) =>
              dispatch({
                type: "catchDescriptionChange",
                descriptionChosen: e.target.value,
              })
            }
          />
        </Grid>

        {state.listingTypeValue === "Office" ? (
          ""
        ) : (
          <Grid item xs={3} container sx={{ marginTop: "1rem" }}>
            <TextField
              id="rooms"
              label="Rooms"
              type="number"
              variant="standard"
              fullWidth
              value={state.roomsValue}
              onChange={(e) =>
                dispatch({
                  type: "catchRoomsChange",
                  roomsChosen: e.target.value,
                })
              }
            />
          </Grid>
        )}

        <Grid item container justifyContent="space-between">
          <Grid item xs={2} sx={{ marginTop: "1rem" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.furnishedValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchFurnishedChange",
                      furnishedChosen: e.target.checked,
                    })
                  }
                />
              }
              label="Furnished"
            />
          </Grid>

          <Grid item xs={2} sx={{ marginTop: "1rem" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.poolValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchPoolChange",
                      poolChosen: e.target.checked,
                    })
                  }
                />
              }
              label="Pool"
            />
          </Grid>

          <Grid item xs={2} sx={{ marginTop: "1rem" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.elevatorValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchElevatorChange",
                      elevatorChosen: e.target.checked,
                    })
                  }
                />
              }
              label="Elevator"
            />
          </Grid>

          <Grid item xs={2} sx={{ marginTop: "1rem" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.cctvValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchCctvChange",
                      cctvChosen: e.target.checked,
                    })
                  }
                />
              }
              label="Cctv"
            />
          </Grid>

          <Grid item xs={2} sx={{ marginTop: "1rem" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.parkingValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchParkingChange",
                      parkingChosen: e.target.checked,
                    })
                  }
                />
              }
              label="Parking"
            />
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-between">
          <Grid item xs={5} sx={{ marginTop: "1rem" }}>
            <TextField
              id="area"
              label="Area*"
              variant="standard"
              fullWidth
              value={state.areaValue}
              onChange={(e) =>
                dispatch({
                  type: "catchAreaChange",
                  areaChosen: e.target.value,
                })
              }
              SelectProps={{
                native: true,
              }}
            >
              {areaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={5} sx={{ marginTop: "1rem" }}>
            <TextField
              id="borough"
              label="Borough*"
              variant="standard"
              fullWidth
              value={state.boroughValue}
              onChange={(e) =>
                dispatch({
                  type: "catchBoroughChange",
                  boroughChosen: e.target.value,
                })
              }
              SelectProps={{
                native: true,
              }}
            >
              {state.areaValue === "Inner London"
                ? innerLondonOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                : ""}

              {state.areaValue === "Outer London"
                ? outerLondonOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))
                : ""}
            </TextField>
          </Grid>
        </Grid>

        <Grid item container sx={{ height: "35rem", marginTop: "1rem" }}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={14}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker
            //   draggable
            //   eventHandlers={eventHandlers}
            //   position={state.markerPosition}
            //   ref={markerRef}
            ></Marker> */}
          </MapContainer>
        </Grid>

        <Grid
          item
          container
          xs={8}
          style={{ marginTop: "1rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <Button
            variant="contained"
            fullWidth
            type="submit"
            style={{
              backgroundColor: "#ff6c38",
              color: "white",
              fontSize: "1.1rem",
              marginLeft: "1rem",
              // "&:hover": {
              // 	backgroundColor: "blue",
              // },
            }}
          >
            SUBMIT
          </Button>
        </Grid>
      </form>
    </div>
  );
}

export default AddProperty;
