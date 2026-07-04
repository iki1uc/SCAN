// SCAN – Synth-Transit-Move-System (NC-First)

import { AX_forward } from "./AX/forward.js";
import { IS_state } from "./IS/state.js";
import { XA_return } from "./XA/return.js";
import { SYT_core } from "./SYT/core.js";

export const SCAN = {
    lage: {
        axis: "SCAN",
        type: "transit-system",
        moves: ["AX", "IS", "XA", "SYT"]
    },

    runAX() {
        return AX_forward();
    },

    runIS() {
        return IS_state();
    },

    runXA() {
        return XA_return();
    },

    runSYT() {
        return SYT_core();
    },

    status() {
        return {
            lage: this.lage,
            activeMoves: this.lage.moves
        };
    }
};

