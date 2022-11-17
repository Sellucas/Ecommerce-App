import { ADD_CART, REMOVE } from './type';

export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item
    }
}

export const DELETE = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
}

export const REMOVE_INT = (item) => {
    return {
        type: REMOVE_INT,
        payload: item
    }
}