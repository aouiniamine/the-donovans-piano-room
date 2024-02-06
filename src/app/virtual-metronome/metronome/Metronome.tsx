import Image from "next/image";
// import FullScreenIcon from "../../../../public/assets/virtual-metronome/FullScreen.svg";
// import MetronomePendulum from "../../../../public/assets/virtual-metronome/MetronomePendulum.svg";
// import MetronomeTime_1 from "../../../../public/assets/virtual-metronome/MetronomeTime_1.svg";
import Slider from "@mui/material/Slider";

const Metronome = () => {
  return (
    <div className="flex basis-2/5 flex-col justify-between">
      <div className="metronome__container flex flex-col items-center border-2 p-10">
        <div className="ml-auto">
          <Image
            src="./virtual-metronome/FullScreen.svg"
            width={200}
            height={200}
            alt="full screen icon"
            className="h-8 w-8"
          />
        </div>

        <h1
          className="text-5xl font-semibold text-black
                      desktop:text-7xl
                      "
        >
          Allegro
        </h1>

        <Image
          src="./virtual-metronome/MetronomeTime_1.svg"
          alt="Metronome 1"
          width={200}
          height={200}
          className="mb-12 mt-6 w-72 desktop:w-96"
        />

        <div
          className="relative h-[35rem] w-[30rem] bg-[url('/virtual-metronome/MetronomeMelody.svg')] bg-contain bg-center 
                        bg-no-repeat
                        laptop:h-[45rem]
                        desktop:h-[55rem] desktop:w-[35rem]
                      "
        >
          <Image
            src="./virtual-metronome/MetronomePendulum.svg"
            alt="metronome pendulum"
            width={200}
            height={200}
            className="z-1 absolute left-[-6rem]
                        top-[-2.5rem]
                        h-[35rem] w-[40rem]
                        laptop:top-[-2rem] laptop:h-[45rem]
                        desktop:top-[1rem] desktop:h-[50rem] desktop:w-[50rem]
                      "
          />

          <div
            className="absolute left-1/2 top-[22rem] z-10
                          h-8 
                          w-60 translate-x-[-50%]
                          bg-primary-yellow
                          laptop:top-[27.5rem] laptop:h-12
                          desktop:top-[33.5rem]
                        "
          ></div>
        </div>
      </div>

      <div className="volume__container flex flex-col items-center gap-5">
        <h2 className="text-4xl font-semibold desktop:text-5xl">Volume</h2>

        <Slider
          sx={{
            color: "#E98427",
          }}
        />
      </div>

      <div className="soundStyle__container">
        <ul className="flex w-full items-center justify-between text-3xl laptop:text-4xl desktop:text-5xl">
          <li className="rounded-lg bg-primary-blue-accent p-5 font-semibold tracking-wide">
            Bongo
          </li>
          <li className="rounded-lg bg-primary-blue-accent p-5 font-semibold tracking-wide">
            Click
          </li>
          <li className="rounded-lg bg-primary-blue-accent p-5 font-semibold tracking-wide">
            Electric
          </li>
          <li className="rounded-lg bg-primary-blue-accent p-5 font-semibold tracking-wide">
            Percussion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Metronome;
