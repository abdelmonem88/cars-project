import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import PhoneIcon from "@material-ui/icons/Phone";
import { useHistory } from "react-router-dom";
import "./MainNav.css";

const useStyles = makeStyles({
 root: {
  width: "100%",
  position: "fixed",
  bottom: "0",
  left: "0",
  backgroundImage: "linear-gradient(to bottom, #274472, #5885af)",
  zIndex: "1",
  borderTop: "3px solid #fde600",
 },
});

export default function LabelBottomNavigation() {
 const [value, setValue] = React.useState(3);
 const classes = useStyles();
 const history = useHistory();

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 useEffect(() => {
  if (value === 3) {
   history.push("/");
  } else if (value === 2) {
   history.push("/about");
  } else if (value === 1) {
   history.push("/services");
  } else if (value === 0) {
   history.push("/contact");
  }
 }, [value, history]);

 return (
  <BottomNavigation
   value={value}
   onChange={handleChange}
   showLabels
   className={classes.root}
  >
   <BottomNavigationAction
    style={{ color: "#fde600" }}
    label='تواصل معنا'
    icon={<PhoneIcon />}
    classes={{ lable: classes.label }}
   />
   <BottomNavigationAction
    style={{ color: "#fde600" }}
    label='خدماتنا'
    icon={<RoomServiceIcon />}
   />
   <BottomNavigationAction
    style={{ color: "#fde600" }}
    label='مؤسس الشركة'
    icon={<InfoIcon />}
   />
   <BottomNavigationAction
    style={{ color: "#fde600" }}
    label='الرئيسية'
    icon={<HomeIcon />}
    fontSize='small'
   />
  </BottomNavigation>
 );
}
