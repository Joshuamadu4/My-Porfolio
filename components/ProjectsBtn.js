//next image
import Image from "next/image";

//next link
import Link from 'next/link';


//icons 
import {HiArrowRight} from 'react-icons/hi2';


const ProjectsBtn = () => {
  return(
  <div className='mx-auto xl:mx-0'>
    <Link href={'/work'}>
      <Image scr={'/rounded-text.png'} width={148} height={148} alt=""
      className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"/>
      <HiArrowRight className=""/>
    </Link>
  </div>
  );
};

export default ProjectsBtn;
