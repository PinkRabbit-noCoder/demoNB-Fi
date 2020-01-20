import React from 'react';
import Modal from "./Modal";
import {Grid, Paper, Button, Tooltip,AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


class UplinkPackage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showPreambul: false,
            value:0,
            showCollapse:0,
            openCollapse: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleCollapse = this.handleCollapse.bind(this);
    }

    handleShow() {
        console.log("show")
        this.setState({showModal: true});
    }

    handleHide() {
        this.setState({showModal: false});
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue, openCollapse: (!this.state.openCollapse)});
    };

    handleCollapse=() => {
        this.setState({ openCollapse: !this.state.openCollapse});

    };

    render() {


         const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div>

                        <div>
                            <AppBar position="static" color ='#ea3180'>
                                <Tabs value={this.state.value} onChange={this.handleChange} variant="scrollable" >
                                    <Tab label="Преамбула" {...a11yProps(0)} />
                                    <Tab label="Node Id" {...a11yProps(1)} />
                                    <Tab label="Данные" {...a11yProps(2)} />
                                    <Tab label="Определение и коррекция ошибок" {...a11yProps(3)} />
                                    <Button onClick={this.handleHide}><CloseIcon/></Button>

                                </Tabs>
                            </AppBar>
                            <TabPanel value={this.state.value} index={2}>
                                <Button onClick={this.handleCollapse}>
                                Заголовок
                                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                                </Button>

                                <Button  onClick={this.handleCollapse}>
                                    Полезные данные
                                </Button>


                            </TabPanel>
                            <TabPanel value={this.state.value} index={1}>
                                Раздел находится в разработке
                            </TabPanel>
                            <TabPanel value={this.state.value} index={0}>
                                Раздел находится в разработке
                            </TabPanel>
                            <TabPanel value={this.state.value} index={3}>
                                Разден находится в разработке
                            </TabPanel>

                        </div>


                    </div>
                </div>
            </Modal>
        ) : null;
        const component = ( <div classeName="uplinkPackage" onClick={this.handleShowModal}>
            <MailOutlineIcon
                style={{ fontSize: 50, color: "darkviolet"}}
                onClick={this.handleShow}
            />
            {modal}
        </div>)
        return (
            <Tooltip Tooltip  title={
                <span>
                            <h4>Uplink-пакет</h4>

                        </span>
            }
                     leaveDelay={500}
                     placement = 'left' arrow>
                {component}
            </Tooltip>
        );
    }
}


export default UplinkPackage;