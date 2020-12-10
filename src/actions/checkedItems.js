export const ADD_TO_ITEMS ='ADD_TO_ITEMS';
export const REMOVE_FROM_ITEMS ='REMOVE_FROM_ITEMS';

export const addToItems = (data)  => {
    return {
        type: ADD_TO_ITEMS,
        data
    };
};

export const removeFromItems = (id)  => {
    return {
        type: REMOVE_FROM_ITEMS,
        id
    };
};