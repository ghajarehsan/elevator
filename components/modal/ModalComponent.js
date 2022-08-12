import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import style from '../modal/modalComponent.module.scss';

const ModalComponent = (props) => {

    const {
        openModal,
        ClickSettingFllorHandler,
        floor_index,
        line_index
    } = props;

    const buttons = useSelector(state => state.sidexReducer.buttons)

    const [button, setButton] = useState([])

    useEffect(() => {

        if (floor_index != null && line_index != null) {
            console.log(buttons[line_index].buttons_floors)
            setButton(buttons[line_index].buttons_floors);
        }

    }, [floor_index, line_index, buttons])

    return (
        <div
            onClick={() => ClickSettingFllorHandler(false)}>
            <Modal
                show={openModal}
            >
                <Modal.Dialog
                >
                    <div className={'d-flex justify-content-around p-4'}>
                        {
                            button.map((value, key) => {
                                return (
                                    <span className={style.buttonFloor}>
                                        {value.floor_name}
                                    </span>
                                )
                            })
                        }
                    </div>

                </Modal.Dialog>
            </Modal>
        </div>
    )

}

export default ModalComponent;