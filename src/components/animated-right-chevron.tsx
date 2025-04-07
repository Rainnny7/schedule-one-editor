import { ReactElement } from "react";

const AnimatedRightChevron = (): ReactElement => (
    <svg
        className="stroke-white stroke-2 top-[1] relative fill-transparent"
        aria-hidden="true"
        width="12"
        height="12"
        viewBox="0 0 12 12"
    >
        <g fillRule="evenodd">
            <path
                className="transition-opacity opacity-0 group-hover:opacity-100"
                d="M0 5h7"
            />
            <path
                className="group-hover:translate-x-[3px] transition-transform"
                d="M1 1l4 4-4 4"
            />
        </g>
    </svg>
);
export default AnimatedRightChevron;
