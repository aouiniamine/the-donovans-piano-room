import Image from "next/image";
import Link from "next/link";

export default function SignupHeader(
    {stepNum, navLink, navName, stepName}:
    {stepNum: number, navLink: string, navName: string, stepName: string}) {
  return (
    <>
        <Link href={navLink} className="text-primary-yellow text-xl font-bold flex relative w-[15%] mb-5"><Image src="/YellowBackIcon.svg" width={30} height={30} alt=""/><p className="mt-2">{navName}</p></Link>
        <h1 className="text-7xl font-bold leading-tight tracking-tight text-white mb-5">
        Sign Up
        </h1>
        <div className='mb-5 2xl:mt-5 2xl:mb-[20px]'>
            <p className='text-white text-lg font-semibold'>Step {stepNum} of 4</p>
            <p className='text-primary-yellow text-2xl font-semibold'>{stepName}</p>
        </div>
    </>
  )
}
