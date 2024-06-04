import StoreTemplate from "./StoreTemplate";

const Stores = () => {
    return (
      <div>
      <StoreTemplate
            address="245, 1st floor, JHBCS Layout, KumarSwamy Layout, Bangaluru."
            contact="+91 81026 51970"
            time="10:00 AM - 9:00 PM"
            facility="Delivery | Takeaway | Dinein"
      />

      <StoreTemplate
            address="111, 2dn Main, 13th Cross , Jayanagar, Bengaluru."
            contact="+91 99881 99881"
            time="10:00 AM - 9:00 PM"
            facility="Takeaway | Dinein"
      />  

      <StoreTemplate
            address="301, 4th Main, 18th Cross, Indira Nagar, Bengaluru."
            contact="+91 11112 11112"
            time="6:00 PM - 9:00 AM"
            facility="Delivery"
      />

      <StoreTemplate
            address="105, 1st Main, Kormangala, Bengaluru."
            contact="+91 66666 55555"
            time="10:00 PM - 10:00 PM"
            facility="Delivery | Takeaway | Dinein"
      />
      </div>

      
    );
  };
  
  export default Stores;