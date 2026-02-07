import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], };

const inputsSlice = createSlice(
    {
        name: "inputs",
        initialState,
        reducers: {
            addInput(state, action) {
                // const newId = state.items.length > 0
                //     ? Math.max(...state.items.map(i => i.id)) + 1
                //     : 0;
                const newId = Date.now().toString();
                // const newId = state.items.length > 0
                //     ? Math.max(...state.items.map(i => i.id)) + 1
                //     : 1;
                const isDisabled = action.payload?.isDisabled || false;
                state.items.push({ id: newId, type: action.payload.type, value: '', className: action.payload.className, tag: action.payload.tag, isDisabled });
            },
            updateInput(state, action) {
                const { id, value } = action.payload;
                const input = state.items.find(item => item.id === id);
                if (input) {
                    input.value = value;
                }
            },
            formatAllInputs(state) {
                state.items = state.items.map((input) => {
                    if (input.type === "code") {
                        return input;
                    }
                    let cleaned = input.value.replace(/\s+/g, ' ').trim();
                    return { ...input, value: cleaned };
                });
            },
            removeInput(state, action) {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            },
            moveInputDown(state, action) {
                
                const index = action.payload.index;
                let newIndex = index + 1;
                // if (newIndex >= state.items.length) { newIndex = 0; }
                if (newIndex >= state.items.length) { return; }

                console.log("ДВИГАЮ");
                console.log("index: " + index);
                console.log("index: " + state.items[index]);
                console.log("newindex: " + newIndex);
                console.log("newindex: " + state.items[newIndex]);
                


                const holder = state.items[index];
                state.items[index] = state.items[newIndex];
                state.items[newIndex] = holder;
            },
            moveInputUp(state, action) {
                const index = action.payload.index;
                let newIndex = index - 1;

                // if (newIndex < 0) { newIndex = state.items.length - 1; }
                if (newIndex < 0) { return; }

                const holder = state.items[index];
                state.items[index] = state.items[newIndex];
                state.items[newIndex] = holder;
            },
            removeAllInputs(state) {
                state.items = [];
            }
        }
    }
);

export const { moveInputUp, moveInputDown, addInput, updateInput, removeInput, removeAllInputs, formatAllInputs } = inputsSlice.actions;

export default inputsSlice.reducer;