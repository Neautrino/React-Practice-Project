import {
  BedOutline,
  EarthOutline,
  ShieldCheckmarkOutline,
} from "react-ionicons";

function Features() {
  const featuresList = [
    {
      icon: <BedOutline color="#60a5fa" style={{ width: 60, height: 60 }} />,
      title: "Hotels on the House",
      description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi quasi illum consequatur optio voluptatum vel modi! ",
    },
    {
      icon: (
        <ShieldCheckmarkOutline
          color="#60a5fa"
          style={{ width: 60, height: 60 }}
        />
      ),
      title: "Safe to Trust",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi quasi illum consequatur optio voluptatum vel modi! ",
    },
    {
      icon: <EarthOutline color="#60a5fa" style={{ width: 60, height: 60 }} />,
      title: "Worldwide Customers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi quasi illum consequatur optio voluptatum vel modi! ",
    },
  ];
  return (
    <div className="flex w-full py-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center">
      <div className="flex flex-col items-center ">
        <span className="font-semibold text-blue-500">Our Features</span>
        <span className="font-semibold text-slate-700 text-3xl mt-1">
          Our Priceless Features
        </span>
        <p className="max-w-[400px] text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et
          quidem quis quas nisi.
        </p>
      </div>
      <div className="flex md:flex-row flex-col w-full items-center justify-between md:gap-0 gap-5">
        {featuresList.map((feature)=>{
            return <div className="bg-white py-5 px-12 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.1]"
            key={feature.title}
            style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 /5%)"}}
            >
                {feature.icon}
                <span className="font-semibold text-gray-700 text-[21px]">
                    {feature.title}
                </span>
                <span className="text-center max-w-[360px] leading-7">
                    {feature.description}
                </span>
            </div>
        })}
      </div>
    </div>
  );
}

export default Features;
