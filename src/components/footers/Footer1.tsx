import Image from 'next/image'
import Link from 'next/link'

export default function Footer1() {
  return (
    <div className='fixed flex justify-center items-center bottom-0 w-full border-t-2 border-t-primary-purple h-[9.3vh]'>
        <div className='fixed h-[9.1vh] w-[100vw] backdrop-blur-lg z-40'></div>
        <div className='flex justify-between h-[28px] w-[84.7%] z-50'>
            <h2 className='2xl:text-[14px] w-[290px] 2xl:w-[400px]'
            >Copyright © 2024 The Donovan&apos;s Piano Room. Powered by <Link className='text-primary-purple underline' target='_blank' href='https://www.thedonovan.org/'>The Donovan&apos;s Venom</Link>, a 501(c)(3) nonprofit organization.</h2>
            <div className='flex gap-8'>
                <Image src="/about/icons/Twitter.svg" width={40} height={40} alt='Twitter' />
                <Image src='/about/icons/Facebook.svg' width={40} height={40} alt='Facebook' />
                <Image src='/about/icons/Youtube.svg' width={40} height={40} alt='Youtube' />
            </div>
        </div>
    </div>
  )
}
