import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`w-full h-screen flex md:flex-row flex-col`}>
      {/* Text */}
      <div
        className={`flex-1 md:basis-2/10 basis-4/10  max-w-7xl ${styles.paddingX} flex flex-col md:justify-center md:ml-12 w-full h-16 md:h-full md:items-start mt-12 md:mt-0 md:gap-16 gap-0`}
      >
        
          <h1 className={`${styles.heroHeadText} text-white h-24 line mt-4`}>
            Hi, I'm <span className='text-[#915EFF]'>Arslan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 h-24`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        
      </div>

      {/* 3D Model */}
      <ComputersCanvas className="flex-1 md:basis-8/10 basis-6/10 mt-22"/>

    </section>
  );
};

export default Hero;
