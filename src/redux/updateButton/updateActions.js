import axios from 'axios';
import {
    UPDATE_SMART_SUCCESS,
    UPDATE_SMART_REQUEST,
    UPDATE_SMART_LOADING
}
    from './updateTypes';


export const requestUpdateSmart = (from, to,line) => {

    return async (dispatch) => {

        try {
            // console.log('from'+from+'to'+to+'line'+line);
            const headers = {
                'user_id': localStorage.getItem('user_id'),
                'token': localStorage.getItem('token'),
                'project_id': localStorage.getItem('project_id')
            }

            const data =
            {
                'None': [
                    {
                        '_line_id': line,
                        '_floor_id': from,
                        '_is_call_button': 1,
                        'status': '1'
                    }
                ]
            }

            const url = 'http://185.126.200.99:8000/api/v1/update_buttons';

            axios.post(url, JSON.stringify(data), {
                headers: headers
            })
                .then(res => {
                    console.log(res.data)
                })

        }
        catch (erorr) {

        }

    }

}