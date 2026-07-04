// SCAN – Funktionsmodul unter modi + nameLage

import { AX_forward } from "./AX/forward.js";
import { IS_state } from "./IS/state.js";
import { XA_return } from "./XA/return.js";
import { SYT_core } from "./SYT/core.js";

export const SCAN = {
    // NAME + LAGE für SCAN
    nameLage: {
        name: "SCAN",
        lage: {
            type: "Funktionsmodul",
            axis: "modi",
            moves: ["AX", "IS", "XA", "SYT"]
        },
        status: "Funktionsbereit",
        stabilitaet: 0.97
    },

    AX() {
        return AX_forward();
    },

    IS() {
        return IS_state();
    },

    XA() {
        return XA_return();
    },

    SYT() {
        return SYT_core();
    },

    status() {
        return {
            functions: ["AX", "IS", "XA", "SYT"],
            nameLage: this.nameLage
        };
    }
};

