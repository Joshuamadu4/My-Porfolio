//components 
import Circles from '/components/Circles';

//Icons 
import {BsArrowRight} from 'react-icons/bs'


//framer 
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants'; 

const Contact = () => {
  return <div className='h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'> 
    {/*text and Form*/}
      <div className='flex flex-col w-full max-w-[700px]'>
        {/*text*/}
        <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>Lets <span className='text-accent'>Connect.</span></motion.h2>
        {/*form*/}
        <motion.form variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          {/*Input group*/}
          <div className='flex gap-x-6 w-full'>
            <motion.input variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'type='text' placeholder='name' className='input'/>
            <motion.input variants={fadeIn('left', 0.5)} initial='hidden' animate='show' exit='hidden'type='text' placeholder='email' className='input'/>
          </div>
          <motion.input variants={fadeIn('up', 0.6)} initial='hidden' animate='show' exit='hidden'type='text' placeholder='Subject' className='input'/>
          <motion.textarea variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'placeholder='Message' className='textarea'></motion.textarea>
          <motion.button variants={fadeIn('up', 0.7)} initial='hidden' animate='show' exit='hidden' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Lets Talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
          </motion.button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
