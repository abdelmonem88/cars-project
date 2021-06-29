import "./SingleCar.css";
import ModalContent from "../ModalContent/ModalContent";

function SingleCar({ id, name, image, description }) {
 return (
  <div className='single-car col-md-4 col-sm-9 mx-auto my-2'>
   <ModalContent id={id}>
    <div className='card'>
     <img
      src={image}
      alt=''
      className='card-img-top'
      style={{ height: "150px" }}
     />
     <div className='card-body'>
      <h5 className='card-title'>{name}</h5>
      <p className='card-text'>{`${description.substr(0, 200)}...`}</p>
     </div>
    </div>
   </ModalContent>
  </div>
 );
}

export default SingleCar;
