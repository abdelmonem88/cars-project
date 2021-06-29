import "./About.css";

function About() {
 return (
  <div className='section about'>
   <div className='container'>
    <div className='row'>
     <div className='col-10 mx-auto about__content'>
      <div className='row'>
       <div className='col-md-4 col-sm-10 mx-auto text-center img-container'>
        <img
         src='https://files.fm/thumb_show.php?i=srxezm2ds'
         alt='agency_owner'
         className='img-fluid'
        />
       </div>
       <div className='col-md-6 col-sm-10 mx-auto'>
        <div className='about__text'>
         <h2>عن مؤسس الشركة</h2>
         <div className='underline__aligned'></div>
         <p>
          استخدام دمية النص هو شائع منذ القرن ال16 في وسائل الإعلام المطبوعة
          وتكوينها. وقد تم إضفاء الطابع الديمقراطي على المحتوى كاذبة في 60s
          عندما تكون الشركة متخصصة في الخطأ المطبعي (Letraset) البلاستيكية، نشرت
          ألواح مع أبجد هوز. في عصر الكمبيوتر، والعديد من البرامج لمعالجة النصوص
          أو تخطيط الصفحة باستخدام هذه النصوص كقالب افتراضي، وبالتالي وجودها في
          مواقع البناء.
         </p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default About;
