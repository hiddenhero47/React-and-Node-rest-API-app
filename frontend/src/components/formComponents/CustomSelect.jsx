import React, { useState, useEffect, useRef } from "react";
import {
  CustomSelectContainer,
  CustomSelectValue,
  SelectOptions,
  Option,
  ImageHolder,
  Error,
} from "./CustomSelect.style";
import { ArrowDown } from "../icons/toolsIcon";
import { TriangleWarning as Warning } from "../icons/warningSings";
import PropTypes from "prop-types";

function CustomSelect({
  options,
  value,
  placeholder,
  onChange,
  isError,
  onBlur,
  name,
  id,
  errorMessage,
  background,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const menuRef = useRef(null);
  const bodyRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);

  const handleOptionClick = (option) => {
    selectRef.current = option.value;
    onChange(option.value);
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = (e) => {
    onBlur(e);
    setIsOpen(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !bodyRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <CustomSelectContainer tabIndex="0" onBlur={(e) => handleBlur(e)} id={id}>
        <CustomSelectValue
          onClick={handleSelectClick}
          $isError={isError}
          $isOpen={isOpen}
          $background={background}
          ref={bodyRef}
        >
          {selectedOption ? (
            <>
              {selectedOption?.icon && (
                <div className="imageContainer">
                  <ImageHolder>
                    <img src={selectedOption.icon} alt={selectedOption.label} />
                  </ImageHolder>
                </div>
              )}
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span className="placeholder">{placeholder}</span>
          )}

          <i
            className="arrow"
            style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
          >
            <ArrowDown width={14} height={14} />
          </i>
        </CustomSelectValue>

        <SelectOptions open={isOpen} ref={menuRef}>
          {options.map((option) => (
            <Option
              key={option.value}
              selected={value === option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option?.icon && (
                <div className="imageContainer">
                  <ImageHolder>
                    <img src={option.icon} alt={option.label} />
                  </ImageHolder>
                </div>
              )}
              <span>{option.label}</span>
            </Option>
          ))}
        </SelectOptions>

        <select
          ref={selectRef}
          name={name}
          id={id}
          style={{ display: "none" }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </CustomSelectContainer>

      {isError && (
        <Error>
          {" "}
          <Warning width={12} height={12} color="red" /> {errorMessage}
        </Error>
      )}
      <div
        style={{ marginBottom: "8px" }}
        onBlur={() => console.log("cgkd")}
      ></div>
    </>
  );
}

CustomSelect.defaultProps = {
  options: [],
};

CustomSelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isError: PropTypes.bool,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default CustomSelect;
