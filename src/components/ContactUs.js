const ContactUs = () => {
    return (
      <div >
        <h1 className="text-7xl text-center font-bold bg-red-300 pt-[100px]">GET IN TOUCH</h1>
        <div className="flex bg-gradient-to-t from-red-500 to-red-300  pt-[100px] pb-[65px] justify-center gap-[200px]">
          <div>
            <div><img  className="w-20" src="./images/location.png" alt="" />
            <h3>ADDRESS</h3>
            <p>245 9th crosss JHBCS layout <br /> Banglore  <br /><br />Indian Hostel :)</p>
            </div>
          </div>
          <div>
            <div><img  className="w-20"src="./images/phone-call.png" alt="" /></div>
            <h1>Pranshu Singh</h1>
            <p>7802945268</p>
            <h1>Shubham Anand</h1>
            <p>3859468910</p>
          </div>
          <div>
            <div><img className="w-20" src="./images/mail.png" alt="" /></div>
            <p>singhpranshu950@gmail.com <br /> shubhamanand12@gmail.com</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;