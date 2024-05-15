import { createStore } from "redux";

const reducer = (state = 0, action: any) => {
    switch (action.type) {
        case "inc":
            return state <9 ? state + 1 : 0;
        case "dec":
            return state > 0 ? state -1 : 9;
    }
    return state;
};

export const inc = () => {
    return { type: "inc" };
};

export const dec = () => {
    return { type: "dec" };
};

export const store = createStore(reducer);
