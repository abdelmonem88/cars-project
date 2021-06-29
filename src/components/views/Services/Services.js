import "./Services.css";

import { useHistory } from "react-router-dom";

function Services() {
 const history = useHistory();

 const redirection = (direction) => {
  history.push(direction);
 };

 window.scroll(0, 0);

 return (
  <div className='section services'>
   <div className='section-title'>
    <h2>خدماتنا</h2>
    <div className='underline__small'></div>
   </div>
   <div className='container'>
    <div className='row'>
     <div className='col-md-4 col-sm-10 mx-auto mb-3'>
      <div className='card'>
       <img
        src='https://files.fm/thumb_show.php?i=tpejb7ur8'
        alt=''
        className='card-img-top'
       />
       <div className='card-body text-center'>
        <h5 className='card-title'>إيجار سيارات</h5>
        <p className='card-text'>
         واحد الحد من استخدام النص كاذبة في تصميم المواقع الإلكترونية هو أن هذا
         النص هو قراءة أبدا، وأنها لا تحقق القراءة الفعلية.
        </p>
        <button
         className='btn card__btn'
         onClick={() => {
          redirection("/carsrent");
         }}
        >
         عرض السيارات
        </button>
       </div>
      </div>
     </div>
     <div className='col-md-4 col-sm-10 mx-auto'>
      <div className='card'>
       <img
        src='https://files.fm/thumb_show.php?i=sac38n3qz'
        alt=''
        className='card-img-top'
       />
       <div className='card-body text-center'>
        <h5 className='card-title'>بيع سيارات</h5>
        <p className='card-text'>
         واحد الحد من استخدام النص كاذبة في تصميم المواقع الإلكترونية هو أن هذا
         النص هو قراءة أبدا، وأنها لا تحقق القراءة الفعلية.
        </p>
        <button
         className='btn card__btn'
         onClick={() => {
          redirection("/carssell");
         }}
        >
         عرض السيارات
        </button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Services;
