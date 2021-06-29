import "./ShowCars.css";
import SingleCar from "../singleCar/SingleCar";

function ShowCars({ cars }) {
 const rendredCars = cars.map((car) => {
  const { name, description } = car.fields;
  const { id } = car;
  const image = car.fields.attachments[0].thumbnails.large.url;

  const carDetails = { id, name, description, image };

  return <SingleCar {...carDetails} key={id} />;
 });

 return (
  <div className='container'>
   <div className='row'>{rendredCars}</div>
  </div>
 );
}

export default ShowCars;
