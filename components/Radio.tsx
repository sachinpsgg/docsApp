import React, { useState } from "react";

interface RadioInputProps {
    options: string[];
    defaultSelected: string;
    onChange: (selectedOption: string) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ options, defaultSelected, onChange }) => {
    const [selected, setSelected] = useState(defaultSelected);

    const handleChange = (option: string) => {
        setSelected(option);
        onChange(option);
    };

    return (
        <div className="flex space-x-4">
            {options.map((option) => (
                <label key={option} className="flex items-center">
                    <input
                        type="radio"
                        name="sessionMode"
                        value={option}
                        checked={selected === option}
                        onChange={() => handleChange(option)}
                        className="form-radio text-black accent-black"
                    />
                    <span className="ml-2 text-black font-semibold">{option}</span>
                </label>
            ))}
        </div>
    );
};

export default RadioInput;
