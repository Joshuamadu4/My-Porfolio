//next Image
import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar'


//framer Motion 
import {motion} from 'framer-motion';

//variants 
import {fadeIn} from '../variants';


const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/*text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
      h-full container mx-auto">
        {/*title */}
        <h1 className="h1">
          Transforming Ideas<br/>Into{''}<span className="text-accent">Digital Reality</span>
        </h1>
        {/*Subtitle*/}
        <p className="max-m-sm xl:max-w-xl mx-auto  xl:mx-0 mb-10 xl:mb-16">
          this is made for test and is a domant test for this webiste. 
          is not a real paragraph that is use for the work
          i will just try it out to see the effect.
        </p>

        {/**btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn/>
        </div>
      </div>
    </div>
    {/*Image */}
    <div>Image</div>
  </div>;
};

export default Home;
