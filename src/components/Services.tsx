import { SERVICES_TEXT } from '@/constants';
import Image from 'next/image';

function Services() {
  return (
    <div className='container mx-auto my-8 border-b pb-10 px-4'>
      <h2 className='mb-12 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl'>
        Services
      </h2>

      <div className='flex flex-wrap items-center justify-center'>
         
        <div className='w-full lg:w-1/2 flex justify-center'>
          <div className='p-4'>
            <Image
              className='rounded-xl object-cover'
              src="/service.jpeg"
              width={500}
              height={500}
              alt='services'
            />
          </div>
        </div>

         
        <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h2 className='mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold'>
            We are <br />
            <span className="text-blue-600">available in</span> <br />
            <span className="text-green-600">40+ Countries!</span>
          </h2>
          <p className='mt-4 max-w-lg text-lg tracking-tighter lg:pr-10'>
            {SERVICES_TEXT}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services;
