import { useTranslation } from "react-i18next";
import { SpecialCard } from "../Common/Card/Special.card";

export const Specials = () => {
  const { t } = useTranslation();
  const specials = t("specials") as any[];
  return (
    <div className="w-full flex h-full flex-col items-start justify-center gap-[50px] ">
      <h1 className=" sm:text-3xl  text-lg font-bold tracking-wide ">
        Specials
      </h1>
      <div className="overflow-x-auto h-full w-full">
        <div className=" w-full h-full flex items-center justify-start gap-16 ">
          {specials?.map((special, index) => (
            <SpecialCard {...special} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};