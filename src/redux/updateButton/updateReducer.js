import {
UPDATE_SMART_LOADING,
UPDATE_SMART_REQUEST,
UPDATE_SMART_SUCCESS
}
from './updateTypes';


const initialState={

   update_smart_button:false,


}

const updateReducer=(state=initialState,action)=>{


    switch (action.type) {

        case UPDATE_SMART_LOADING: return {
            ...state,
            update_smart_button:true
        }

        default: return state;
    }

}

export default updateReducer;