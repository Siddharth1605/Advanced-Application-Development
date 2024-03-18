import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";
export default function FeatureItem({ feature, i }) {
  const featureItem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: .7, delay: i * 0.1 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      variants={featureItem}
      style={{backgroundColor:'#0B2447'}} 
      viewport={{ amount: 0 }}
      className="flex flex-col border body border-black-200 feature-item"
    >
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-black-200" style={{backgroundColor:'#144272'}}>
        <h4 className="text-black-100 font-body font-medium text-lg">
          {feature?.title}
        </h4>
      </div>
      <div className="p-6 pb-10">
        <Paragraph><p style={{color:'#9DB2BF'}}>{feature?.content}</p></Paragraph>
      </div>
    </motion.section>
  );
}
