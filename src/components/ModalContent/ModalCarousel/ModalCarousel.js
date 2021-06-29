import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./ModalCarousel.css";
import { useSelector } from "react-redux";

const ModalCarousel = ({ id }) => {
 const cars = useSelector((state) => state.cars);
 const { attachments } = cars.find((car) => car.id === id).fields;

 const images = attachments.reduce((allImages, attachment) => {
  allImages.push(attachment.thumbnails.large.url);
  return allImages;
 }, []);


 const items = images.map((image) => {
  if (!image) {
   return <div>Loading...</div>;
  }
  return (
   <div className='caruosel-item'>
    <img src={image} alt='' />
   </div>
  );
 });

 return (
  <AliceCarousel
   animationType='fadeout'
   animationDuration={1000}
   disableButtonsControls
   infinite
   items={!items ? <div>Loading..</div> : items}
   autoPlay
  />
 );
};

export default ModalCarousel;
