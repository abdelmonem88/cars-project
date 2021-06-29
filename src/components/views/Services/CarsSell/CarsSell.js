import ShowCars from "../../../showCars/ShowCars";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../../../actions";
import { useEffect } from "react";

function CarsSell() {
 const dispatch = useDispatch();
 const cars = useSelector((state) => state.cars);
 const sellCars = cars.filter((car) => JSON.parse(car.fields.sell) === true);
 
 window.scroll(0, 0);

 useEffect(() => {
  dispatch(getCars());
 }, [dispatch]);

 return (
  <div className='section carssell'>
   <div className='section-title'>
    <h2>إيجار سيارات</h2>
    <div className='underline__small'></div>
   </div>
   <ShowCars cars={sellCars} />
  </div>
 );
}

export default CarsSell;
