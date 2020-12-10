export const UPDATE_ORDERS ='UPDATE_ORDERS';
export const UPDATE_ORDERS_RFID ='UPDATE_ORDERS_RFID';


export const update_orders = (data)  => {
    return {
        type: UPDATE_ORDERS,
        data
    };
};

export const update_orders_rfid = (data)  => {
    return {
        type: UPDATE_ORDERS_RFID,
        data
    };
};