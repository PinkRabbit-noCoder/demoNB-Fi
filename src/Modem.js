import React from 'react';
import {Tooltip, Button, TextField, Slider} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';

import Modal from "./Modal";
import CloseIcon from "@material-ui/icons/Close";


const PrettoSlider = withStyles({
    root: {
        color: '#EA3180',
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
        backgroundColor:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

class Modem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            value: 20,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleShow() {
        console.log("show")
        this.setState({showModal: true});
    }

    handleHide() {
        this.setState({showModal: false});
    }
    handleChange(event, value){

            this.setState({value: value});
            // console.log(this.state.value)

    }

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <Button onClick={this.handleHide}><CloseIcon/></Button>
                    <div>
                        {this.state}
                    </div>

                </div>
            </Modal>
        ) : null;

        const component = (
            <div>
                <GolfCourseIcon
                    style={{ fontSize: 100,
                        color: "#ea3180",
                        left:50
                    }}
                    onClick={this.handleShow}
                />
                <PrettoSlider  min ={0} step = {1} max ={100}   valueLabelDisplay="auto" defaultValue={20}  onChangeCommitted={this.handleChange}/>
                {modal}
            </div>);
        return (

            <Tooltip
                title={
                    <span>
                            <b>Датчик с модемом NB-FI </b>
                             показания снятые датчиком отправляются на базовую станцию с помощью модема
                    </span>
                }
                leaveDelay={500}
                arrow
            >
                {component}
            </Tooltip>


        );
    }
}


export default Modem;