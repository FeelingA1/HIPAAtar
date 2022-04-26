import React from "react";
import Big from "../face/big";
import Reg from "../face/reg";
import Thin from "../face/thin";

export default function face(props: { size: string }): SVGElement {
    const {size} = props;
    switch (size) {
        case "big":
            return <Big />;
        case "thin":
            return <Thin />
        case "reg":
        default:
            return <Reg />;
    }
}
