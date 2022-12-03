import { useState } from "react";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Arterial Segment of the Transit Coach Operating Duty Cycle", "Braunschweig City Driving Cycle"
  ," California Unified Cycle (UC)_LA92 Cycle (Light-Duty)","CARB Heavy Duty","CARB Heavy Heavy-Duty Diesel Truck (HHDDT) Composite Cycle",
"CARB Heavy Heavy-Duty Diesel Truck (HHDDT) Creep Segment","CARB Heavy Heavy-Duty Diesel Truck (HHDDT) Cruise Segment","CARB Heavy Heavy-Duty Diesel Truck (HHDDT) Transient Segment",
"Central Business District (CBD) Segment of the Transit Coach Operating Duty Cycle","City Suburban Heavy Vehicle Cycle (CSHVC)",
"Commuter Segment of the Transit Coach Operating Duty Cycle","EPA Federal Test Procedure (FTP)-72","EPA Highway Fuel Economy Test (Light-Duty)"
,"EPA inspection and Maintenance"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
