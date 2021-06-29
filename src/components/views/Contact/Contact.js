import "./Contact.css";

function Contact() {
 window.scroll(0, 0);

 return (
  <div className='section contact'>
   <div className='section-title'>
    <h2>تواصل معنا</h2>
    <div className='underline__small'></div>
   </div>
   <div className='container'>
    <div className='row'>
     <div className='contact__left col-md-5 col-sm-10 mx-auto'>
      <iframe
       title='map'
       src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.9944627183822!2d31.330774121011657!3d30.094344923258472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815130676fe53%3A0xe301e4e1cc260aa5!2z2KfZhNiv2YjZhNmK2Ycg2YTZhNiz2YrYp9ix2KfYqiAtIGVsZGF3bGlhIGNhcnM!5e0!3m2!1sar!2seg!4v1624219991466!5m2!1sar!2seg'
       height='100%'
       width='100%'
       style={{ border: "0" }}
       allowFullScreen=''
       loading='lazy'
      ></iframe>
     </div>
     <div className='col-md-5 col-sm-10 mx-auto'>
      <form className='contact__form d-flex flex-column'>
       <input type='text' placeholder='عنوان الرسالة' />
       <textarea placeholder='...أترك رسالتك'></textarea>
       <button onClick={(e) => e.preventDefault()} className='btn'>
        إرسال
       </button>
      </form>
     </div>
    </div>
    <div className='row'></div>
   </div>
  </div>
 );
}

export default Contact;
