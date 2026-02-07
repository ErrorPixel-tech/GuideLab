import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], };

const blocksSlice = createSlice(
    {
        name: "blocks",
        initialState,
        reducers: {
            addInput(state, action) {
                const newId = Date.now().toString();
                const isDisabled = action.payload?.isDisabled || false;
                state.items.push({ id: newId, type: action.payload.type, value: '', className: action.payload.className, tag: action.payload.tag, isDisabled });
            },
            addList(state, action) {
                0;
            },
            updateInput(state, action) {
                const { id, value } = action.payload;
                const input = state.items.find(item => item.id === id);
                if (input) {
                    input.value = value;
                }
            },
            formatAllBlocks(state) {
                state.items = state.items.map((input) => {
                    if (input.type === "code") {
                        return input;
                    }
                    let cleaned = input.value.replace(/\s+/g, ' ').trim();
                    return { ...input, value: cleaned };
                });
            },
            removeBlock(state, action) {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            },
            moveBlockDown(state, action) {
                const index = action.payload.index;
                let newIndex = index + 1;
                if (newIndex >= state.items.length) { return; }
                const holder = state.items[index];
                state.items[index] = state.items[newIndex];
                state.items[newIndex] = holder;
            },
            moveBlockUp(state, action) {
                const index = action.payload.index;
                let newIndex = index - 1;
                if (newIndex < 0) { return; }
                const holder = state.items[index];
                state.items[index] = state.items[newIndex];
                state.items[newIndex] = holder;
            },
            removeAllBlocks(state) {
                state.items = [];
            }
        }
    }
);

export const { addList, moveBlockUp, moveBlockDown, addInput, updateInput, removeBlock, removeAllBlocks, formatAllBlocks } = blocksSlice.actions;

export default blocksSlice.reducer;