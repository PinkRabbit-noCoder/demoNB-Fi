import React from 'react';
import {Tooltip, Button} from '@material-ui/core';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';



import Modal from "./Modal";
import CloseIcon from "@material-ui/icons/Close";

class BaseStantion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        console.log("show")
        this.setState({showModal: true});
    }

    handleHide() {
        this.setState({showModal: false});
    }

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <Button onClick={this.handleHide}><CloseIcon/></Button>
                    <div>


                        With a portal, we can render content into a different
                        part of the DOM, as if it were any other React child.
                    </div>

                </div>
            </Modal>
        ) : null;
       // const about='Базовая станция';
        const component = (
            <div>
                <SettingsInputAntennaIcon
                    style={{ fontSize: 100,
                        color: "#EA3180",
                         }}
                    onClick={this.handleShow}
                />
                {modal}
            </div>);
        return (

                <Tooltip
                    title={
                        <span>
                            <b>Базовая станция</b>
                             принемает данные от датчиков и модемов и отправляет их на сервер
                        </span>
                    }
                    leaveDelay={500}
                    placement = 'left' arrow
                >
                    {component}
                </Tooltip>


        );
    }
}


export default BaseStantion;