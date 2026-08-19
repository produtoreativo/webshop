
import { GlobalAction } from "../../../../store/actions";
import { CREATE_ORDER, CREATE_ORDER_SUCCESS, globalStateWithProducts } from "../actions/productsAction";

interface OrderAction extends GlobalAction {
    payload: { pedidoId?: string };
}

export interface OrderState {
    isLoading: boolean;
    currentOrderId?: string;
}

function reducer(state: globalStateWithProducts & { order?: OrderState }, action: OrderAction) {
    if (action.type === CREATE_ORDER) {
        return {
            ...state,
            order: {
                isLoading: true,
                currentOrderId: undefined,
            },
        };
    }
    if (action.type === CREATE_ORDER_SUCCESS) {
        return {
            ...state,
            order: {
                isLoading: false,
                currentOrderId: action.payload?.pedidoId,
            },
        };
    }
    return state;
}

export default reducer;
