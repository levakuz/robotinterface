export const CREATE ='CREATE';
export const UPDATE_RFID ='UPDATE_RFID';

export const create = (data)  => {
    return {
        type: CREATE,
        data
    };
};


