import React, { useState, useEffect, useContext } from "react";
import style from "./color_task.module.css";
import { TaskContext } from "../../context/TasksContext";

function ColorTask({ modalTask, onColorChange }) {
  const { colorTasks } = useContext(TaskContext);
  const [selectedColor, setSelectedColor] = useState(modalTask.colorName);

  useEffect(() => {
    if (modalTask.colorName) {
      setSelectedColor(modalTask.colorName);
    }
  }, [modalTask]);

  const handleColorChange = (colorName) => {
    setSelectedColor(colorName);
    const selectedColorHEX = colorTasks.find(color => color.colorName === colorName).colorHEX;
    onColorChange(colorName, selectedColorHEX); // Actualiza el color en `ModalTask`
  };

  return (
    <fieldset className={style.color_task_container}>
      {colorTasks.map((color) => (
        <div key={color.colorName}>
          <input
            id={color.colorName}
            type="radio"
            name="color"
            checked={selectedColor === color.colorName}
            onChange={() => handleColorChange(color.colorName)}
            className={style.radio_input}
          />
          <label
            htmlFor={color.colorName}
            className={`${style.radio_label} ${
              selectedColor === color.colorName ? style["radio_label--selected"] : ""
            }`}
            style={{
              border: `2px solid ${color.colorHEX}`,
              backgroundColor: selectedColor === color.colorName ? color.colorHEX : "transparent",
            }}
          ></label>
        </div>
      ))}
    </fieldset>
  );
}

export default ColorTask;
