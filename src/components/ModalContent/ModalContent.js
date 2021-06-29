import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./ModalContent.css";
import ModalCarousel from "./ModalCarousel/ModalCarousel";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
 modal: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
 },
 paper: {
  backgroundColor: "#fff",
  width: "80vw",
  height: "80vh",
  borderRadius: "5px",
  overflowY: "scroll",
 },
});

export default function ModalContent({ children, id }) {
 const classes = useStyles();
 const [open, setOpen] = useState(false);
 const cars = useSelector((state) => state.cars);

 const selectedCar = cars.find((car) => {
  return car.id === id;
 });

 const { name, description, exteriorColor, interiorColor, numberOfSpeeds } =
  selectedCar.fields;

 const handleOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 if (!selectedCar) {
  return <div>Loading...</div>;
 }

 return (
  <div>
   <button
    type='button'
    onClick={handleOpen}
    style={{ border: "none", padding: "0" }}
   >
    {children}
   </button>
   <Modal
    aria-labelledby='transition-modal-title'
    aria-describedby='transition-modal-description'
    className={classes.modal}
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
     timeout: 500,
    }}
   >
    <Fade in={open}>
     <div className={classes.paper}>
      <div className='car'>
       <div className='container'>
        <div className='row'>
         <div className='col-md-4 col-sm-10 mx-auto mb-3'>
          <div className='carousel'>
           <ModalCarousel id={id} />
          </div>
         </div>
         <div className='col-md-6 col-sm-10 mx-auto'>
          <div className='car__details'>
           <h2>{name}</h2>
           <h6>
            <span>{numberOfSpeeds}</span> :عدد السرعات
           </h6>
           <h6>
            <span>{exteriorColor}</span> :اللون الخارجي
           </h6>
           <h6>
            <span> {interiorColor}</span> :اللون الداخي
           </h6>
           <h6>:وصف السيارة</h6>
           <span> {description}</span>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </Fade>
   </Modal>
  </div>
 );
}
