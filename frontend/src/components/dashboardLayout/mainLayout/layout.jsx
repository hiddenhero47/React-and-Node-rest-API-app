import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Main, SideBer, ChildContainer, Child } from "./layout.style";
import Side from "../sidebarLayout/sidebar";

function DashboardLayout({ options, children, setSubPage, subPage }) {
  
  const OptionsRef = useRef(null);

  const handleClick = (e, keyword) => {
    const allSpans = OptionsRef.current.querySelectorAll("span");

    allSpans.forEach((span) => {
      span.style.color = "rgba(0, 0, 0, 0.5)";
    });

    e.target.style.color = "rgba(249, 201, 0, 1)";
    setSubPage(keyword);
  };

  useEffect(() => {
    const allSpans = OptionsRef.current.querySelectorAll("span");

    allSpans.forEach((span) => {
      span.style.color = "rgba(0, 0, 0, 0.5)";
    });

    const subPageSpan = OptionsRef.current.querySelector(`#${subPage}`);
    if (subPageSpan) {
      subPageSpan.style.color = "rgba(249, 201, 0, 1)";
    }
  }, [subPage]);
  

  return (
    <Main>
      <SideBer>
        <Side />
      </SideBer>

      <ChildContainer>
      <div className="smallNav" ref={OptionsRef}>
          {options.map((option, index) => (
            <span
              id={option.keyword}
              key={index}
              onClick={(e) => {
                handleClick(e, option.keyword);
              }}
            >
              <i>{option.name}</i>
            </span>
          ))}
        </div>

        <Child>{children}</Child>
      </ChildContainer>
    </Main>
  );
}

DashboardLayout.defaultProps = {
  options: [],
};

DashboardLayout.propTypes = {
  options: PropTypes.array,
  children: PropTypes.node.isRequired,
  setSubPage: PropTypes.func,
  subPage: PropTypes.string,
};

export default DashboardLayout;
