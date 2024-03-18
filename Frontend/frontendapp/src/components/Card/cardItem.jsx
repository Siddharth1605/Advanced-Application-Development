import { motion } from "framer-motion";
import { Button } from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import img1 from '../../assets/Citizen2.jpg'
export default function CardItem({
  subtitle,
  subhead,
  paragraph,
  primary,
  img
}) {
  const cardContent = {
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 100, opacity: 0 },
  };

  return (
    <div className="flex flex-col gap-[50px] md:gap-10 md:flex-row sm:items-center">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={cardContent}
        className={`${primary ? "md:order-2" : "md:order-1"} w-full`}
      >
        <Subtitle style="mb-2.5"><p style={{color:'#FF204E'}}>{subtitle}</p></Subtitle>
        <SubHead style="mb-[18px] sm:w-4/5 md:w-full">
          <p style={{color:'#9DB2BF'}}>{subhead}</p> 
        </SubHead>
        <Paragraph style="mb-[30px] w-4/5 sm:w-8/12 md:w-4/5 lg:w-8/12">
          {paragraph}
        </Paragraph>
  {/*<Button>Buy Now</Button>*/}
      </motion.section>
      <div
        className={`${
          primary ? "md:order-1" : "md:order-2"
        } w-full flex justify-center`}
      >
      <img src={img} style={{borderRadius:'10px'}}/>
      {/*<CardImage primary={primary}/>*/}
      </div>
    </div>
  );
}
