"use client";

import TempoSetting from "./tempo-setting/TempoSetting";
import Metronome from "./metronome/Metronome";
import { useState } from "react";

const VirtualMetronome = () => {
  const [beatsNum, setBeats] = useState<number>(1);
  const [beatEmp, setBeatEmp] = useState<number>(-1);

  return (
    <div className="flex h-full justify-center bg-primary-skin p-12">
      <div className="flex h-full w-full laptop:w-10/12 desktop:gap-16">
        <TempoSetting
          beatsNum={beatsNum}
          setBeats={setBeats}
          beatEmp={beatEmp}
          setBeatEmp={setBeatEmp}
        />
        <Metronome beatsNum={beatsNum} beatEmp={beatEmp} />
      </div>
    </div>
  );
};

export default VirtualMetronome;
