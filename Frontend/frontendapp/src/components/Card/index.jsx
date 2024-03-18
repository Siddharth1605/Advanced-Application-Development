import CardItem from "./cardItem";
import img2 from '../../assets/Scitizen2.jpg'
import img3 from '../../assets/Scitizen3.jpg'

export default function Card() {
  return (
    <div className="container mx-auto max-w-[1344px]" style={{backgroundColor:'#0B2447'}}>
      <div className="flex flex-col px-5 py-20 gap-20 sm:px-10 overflow-hidden lg:gap-40">
        <CardItem
          subtitle="OUR VISION"
          subhead="Cherishing seniors, promoting independence."
          paragraph="We strive to redefine senior care by fostering meaningful connections, enriching lives, and providing unparalleled support to our elderly community."
          primary={true}
          img = {img2}
        />
        <CardItem
          subtitle="OUR MISSION"
          subhead="Delivering compassionate care, enhancing lives."
          paragraph="We are dedicated to providing exceptional support tailored to the unique needs of each individual, ensuring their comfort and dignity every step of the way."
          primary={false}
          img = {img3}
        />
      </div>
    </div>
  );
}
