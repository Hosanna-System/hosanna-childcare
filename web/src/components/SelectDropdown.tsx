// Menu déroulant pour sélectionner des options.
// -------------------------------------------------------------------
import React, { ChangeEvent } from 'react';
import './SelectDropdown.css';

interface SelectDropdownProps {
    options: string[];
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ options, onChange, value }) => {
    return (
        <div className="select-dropdown">
            <select value={value} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropdown;
