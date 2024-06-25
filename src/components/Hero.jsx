import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`w-full h-screen flex`}>
      {/* Text */}
      <div
        className={`flex-1 basis-2/10 top-[120px] max-w-7xl h-100 ${styles.paddingX} flex flex-col justify-center ml-12  items-start gap-16`}
      >
        
          <h1 className={`${styles.heroHeadText} text-white h-24`}>
            Hi, I'm <span className='text-[#915EFF]'>Arslan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 h-24`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        
      </div>

      {/* 3D Model */}
      <ComputersCanvas className="flex-1 basis-8/10"/>

    </section>
  );
};

export default Hero;
