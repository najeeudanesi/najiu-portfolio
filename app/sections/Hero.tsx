import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
                >
                    
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedTitle text={"Hi, I'm Najiu."} className={""} wordSpace={"mr-[14px]"} charSpace={"mr-[0.002em]"} />
                        <AnimatedBody
                            delay={0.1}
                            text="A front-end developer and UI/UX designer."/>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
