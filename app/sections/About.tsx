import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"BUILDING & DESIGNING FUNCTIONAL WEBSITES AND MOBILE APPS SINCE 2020."}
                    className={
                        "text-[80px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[20px]"}
                    charSpace={"mr-[0.002em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="I am a highly skilled and versatile software developer with a strong
                            technical background and a passion for crafting innovative digital
                            solutions. With proficiency in various programming languages, front-end
                            and back-end development, as well as a proven track record of
                            contributing to impactful projects. I possess excellent communication skills,
                            a commitment to teamwork, and a relentless drive for continuous learning
                            and improvement." />

                        <AnimatedBody
                            delay={0.1}
                            text="Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech space."
                        />

                     
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
