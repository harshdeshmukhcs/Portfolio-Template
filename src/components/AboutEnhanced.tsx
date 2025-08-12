import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useEffect, useState } from "react";


const AboutEnhanced = () => {
  
  return (
    <section id="about-enhanced" className="section-padding bg-muted/20">
      <div className="container mx-auto container-padding space-y-16 mb-10">
        

        {/* Text Reveal Section */}
        <div className="flex items-center justify-center px-4 sm:px-6">
          <TextRevealCard
            text="Making the web less boring"
            revealText="One feature at a time"
            className="
              w-full max-w-[38rem] sm:max-w-[42rem]
              p-5 sm:p-6 md:p-8
              text-center
            "
          >
            <TextRevealCardTitle
              className="
                text-base sm:text-lg md:text-xl
                font-semibold
                text-center
              "
            >
              Glide to peek behind the curtain
            </TextRevealCardTitle>

            <TextRevealCardDescription
              className="
                mt-1 sm:mt-2
                text-center
                text-sm sm:text-base md:text-lg
                leading-relaxed
              "
            >
              From playful animations to solid architecture — I bring both charm and reliability to my builds.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>


        {/* Highlighted Achievement Card */}
        <div className="flex justify-center">
          <BackgroundGradient className="rounded-[22px] max-w-lg p-8 bg-card dark:bg-card">
            <div className="text-center space-y-4">
              <h4 className="text-3xl font-bold">Latest Achievement</h4>
              <p className="text-muted-foreground text-lg">
                Successfully architected and deployed a microservices system that processes 
                over 100,000 requests per day with 99.9% uptime, serving thousands of users 
                across multiple regions.
              </p>
            </div>
          </BackgroundGradient>
        </div>

      </div>
    </section>
  );
};

export default AboutEnhanced;