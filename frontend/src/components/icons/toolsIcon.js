import * as React from "react";
import { IconContainer } from "./iconWrapperStyle";

export const ArrowDown = ({
    width,
    height,
}) => (
    <IconContainer
        height={height}
        width={width}
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 5L5 1L9 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </IconContainer>
);