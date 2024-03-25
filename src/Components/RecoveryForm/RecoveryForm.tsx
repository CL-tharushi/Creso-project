import React from "react";

const RecoveryForm: React.FC = () => {
  const numRows = 4;
  const numCols = 3;

  const gridItems: JSX.Element[] = [];


  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const index = row * numCols + col;
      gridItems.push(
        <div key={index} className="grid-item text-xs text-white font-medium">
          <div>{index + 1}  </div>
        </div>
      );
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4 ">
      {gridItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default RecoveryForm;








