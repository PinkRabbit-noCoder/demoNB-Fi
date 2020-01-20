import React from 'react';
import Modal from "./Modal";
import{Grid, Paper, Button, Tooltip} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MailIcon from '@material-ui/icons/Mail';

import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";

class DownlinkPackage extends React.Component {
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
                    <div>
                        <Button onClick={this.handleHide}><CloseIcon/></Button>
                        With a portal, we can render content into a different
                        part of the DOM, as if it were any other React child.
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper >xs=12</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper >xs=12 sm=6</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper >xs=12 sm=6</Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper >xs=6 sm=3</Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper >xs=6 sm=3</Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper >xs=6 sm=3</Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper>xs=6 sm=3</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Modal>
        ) : null;
        const component = (<div>
            <MailIcon
                style={{ fontSize: 50, color: "#ea3180"}}
                onClick={this.handleShow}
            />
            {modal}
        </div>)
        return (
            <Tooltip  title={
                <span>
                            <h4>Downlink-пакет</h4>
                            Обычно используется для служебных сообщений
                        </span>
            }
                      leaveDelay={500}
                      placement = 'left' arrow>
                {component}
            </Tooltip>
        );
    }
}


export default DownlinkPackage;