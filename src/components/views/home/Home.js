import React, { useEffect } from "react";
import "../home/Home.css";
import ShowCars from "../../showCars/ShowCars";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../../actions";

function Home() {
 const dispatch = useDispatch();
 const cars = useSelector((state) => state.cars);
 const featuredCars = cars.filter(
  (car) => JSON.parse(car.fields.featured) === true
 );

 window.scroll(0, 0);

 useEffect(() => {
  dispatch(getCars());
 }, [dispatch]);

 return (
  <div className='home'>
   <div className='section hero'>
    <div className='hero__content'>
     <h2>نسعى دائما لتقديم أفضل الخدمات</h2>
     <div className='underline'></div>
     <p>
      في بعض الوكالات في 90 تعميم نص يسمى "الترام الأصفر" أو "المترو الأصفر"
      معقولة استبدال أبجد هوز لإعطاء نظرة أكثر حداثة المحتوى. ولكن الكثير من
      الناس كانوا يبحثون لقراءة النص عندما كان في الفرنسية أو الإنجليزية، لم
      يتحقق التأثير المطلوب. العمل مع نص مقروء
     </p>
    </div>
   </div>
   <div className='section featured-cars'>
    <div className='section-title'>
     <h2>سيارات مميزة</h2>
     <div className='underline__small'></div>
    </div>
    <ShowCars cars={featuredCars} />
   </div>
  </div>
 );
}

export default Home;
