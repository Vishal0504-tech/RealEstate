import { FEATURED_PROPERTIES } from '@/constants'
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';

function FeaturedProperties() {
  return (
    <div className='container mx-auto border-b pb-10 px-4'> 
        <h2 className='text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl mb-6'>
            Featured Properties
        </h2>
        <div className='flex flex-wrap justify-center gap-x-4 gap-y-8'>
            {FEATURED_PROPERTIES.map((property, index) => (
                <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <Link href="#" className="block mx-auto">
                        <div className="p-4">
                          <Image
                            className="mb-4 rounded-md object-cover"
                            src={property.image}
                            width={300}
                            height={200}
                            alt={property.name}
                          />
                          <div className='text-center'>
                            <h6 className='mb-2 font-medium'>{property.name}</h6>
                            <span className='block text-lg font-semibold'>{property.price}</span>
                            <div className='mt-2 flex items-center justify-center'>
                              <Star fill='gold' strokeWidth={0} className='mr-1' />
                              <span className='text-sm'>
                                {property.rating} ({property.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProperties;
