import axios from 'axios';
import {
    UPDATE_SMART_SUCCESS,
    UPDATE_SMART_REQUEST,
    UPDATE_SMART_LOADING
}
    from './updateTypes';


export const requestUpdateSmart = (from, to) => {

    return async (dispatch) => {

        try {

            const url = 'http://185.126.200.99:8000/api/v1/update_buttons';

            axios.post(url,{
                headers: {
                    'user_id': localStorage.getItem('user_id'),
                    'token': localStorage.getItem('token'),
                    'project_id': localStorage.getItem('project_id')
                }
            },{
                '_line_id':1,
                '_floor_id':1,
                '_is_call_button':1,
                'status':0
            })
                .then(res => {
                    console.log(res.data)
                })

        }
        catch (erorr) {

        }

    }

}