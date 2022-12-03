import { useStepperContext } from "../StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        Please fill in the fields below (all fields are required)
        </div>
      <div className="w-full mx-2 flex-1">
        
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            
            name="maxpower"
            placeholder="Max Power*"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            //value={userData["maxweight"] || ""}
            name="maxweight"
            placeholder="Max Weight*"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            //value={userData["Lifetime"] || ""}
            name="Lifetime"
            placeholder="Lifetime*"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            //value={userData["Autonomy"] || ""}
            name="Autonomy"
            placeholder="Autonomy*"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}