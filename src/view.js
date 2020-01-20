import React from 'react';
import Modal from "./Modal";
import {Grid, Paper, Button, Tooltip,AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Network from "./Network";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";

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
        'aria-conTableRowols': `simple-tabpanel-${index}`,
    };
}


class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showPreambul: false,
            value:0,
            showCollapse:0,
            openCollapse: false,
        };

        this.handleChange= this.handleChange.bind(this);

    }
    handleChange = (event, newValue) => {
        this.setState({value: newValue, openCollapse: (!this.state.openCollapse)});
    };
    render(){
        return(
            <div>
                <AppBar position="static" backgraund = '#9400D3'>
                    <Tabs value={this.state.value} onChange={this.handleChange} variant="scrollable" indicatorColor="#ea3180">
                          textColor="secondary" >
                        <Tab label="O стандарте" {...a11yProps(0)} />
                        <Tab label="Демонстрация" {...a11yProps(1)} />
                        <Tab label="Тесты" {...a11yProps(2)} />
                        <Tab label="О поректе" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.value} index={0}>
                    <Card display= 'flex'
                          margin="20"

                       >
                        <CardMedia
                            component="img"
                             height="488"
                            width="666"
                            image="https://nb-fi.org/wp-content/uploads/2018/03/nbfi-parameters3.png"

                        />
                        <CardContent>
                   <Typography gutterBottom variant="h5" component="h1" >NB-Fi</Typography>
                    <Typography variant="body2" component="p">
                        NB-Fi - открытый протокол беспроводной передачи данных малого объёма на больших расстояниях при низких затратах энергии LPWAN. Предназначен для построения распределённых сетей телеметрии, межмашинного взаимодействия и интернета вещей.
                        Протокол NB-Fi был разработан российской компанией WAVIoT (ООО "Телематические Решения") для функционирования в широком спектре радиочастот, в том числе в свободном от лицензирования спектре радиочастот (англ. - ISM band - "indusTableRowial, scientific and medical" - спектр радиочастот специально зарезервированный для интернационального использования в областях отличных от телекома, таких как: промышленное производство, исследования и медицина).
                    </Typography>
                        </CardContent>
                    </Card>

                   <Table>
                       <TableHead>
                           <TableRow>
                               <TableCell
                                   colSpan={1} rowSpan={2}>Описание
                               </TableCell >
                               <TableCell  colSpan={4}
                                           rowSpan={1}>LPWAN (Low Power Area Network), 10 км и дальше
                               </TableCell >
                               <TableCell  colSpan={2}
                                           rowSpan={1}>Средняя дальность, 1-10 км
                               </TableCell >
                               <TableCell  >Близкий</TableCell >
                           </TableRow>
                           <TableRow>
                               <TableCell  >NB-Fi</TableCell >
                               <TableCell  >SIGFOX</TableCell >
                               <TableCell  >LoRa</TableCell >
                               <TableCell  >NB-IoT</TableCell >
                               <TableCell  >LTE-M</TableCell >
                               <TableCell >GSM/GPRS</TableCell >
                               <TableCell >Wi-Fi</TableCell >
                           </TableRow>

                       </TableHead>
                       <TableBody>
                       <TableRow>
                           <TableCell >Частота сигнала радиопередачи
                               (меньше лучше), MHz</TableCell >
                           <TableCell >868</TableCell >
                           <TableCell >868</TableCell >
                           <TableCell >868</TableCell >
                           <TableCell >868</TableCell >
                           <TableCell >1 800</TableCell >
                           <TableCell >1 800</TableCell >
                           <TableCell >2 400</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Возможность работы в РФ</TableCell >
                           <TableCell >да</TableCell >
                           <TableCell >нет</TableCell >
                           <TableCell >с
                               ограничениями
                           </TableCell >
                           <TableCell >да</TableCell >
                           <TableCell >с 2018
                               г.
                           </TableCell >
                           <TableCell >да</TableCell >
                           <TableCell >да</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Мощность передатчика в устройстве, mW</TableCell >
                           <TableCell >25</TableCell >
                           <TableCell >25</TableCell >
                           <TableCell >25 — 50</TableCell >
                           <TableCell >до 2 000</TableCell >
                           <TableCell >25</TableCell >
                           <TableCell >2 000</TableCell >
                           <TableCell >25</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Мощность Базовой станции
                               (в РФ разрешено до 25), mW</TableCell >
                           <TableCell >25</TableCell >
                           <TableCell >2 000
                           </TableCell >
                           <TableCell >25</TableCell >
                           <TableCell >до
                               200
                           </TableCell >
                           <TableCell >40</TableCell >
                           <TableCell >40</TableCell >
                           <TableCell >25</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Максимальный бюджет связи, dB</TableCell >
                           <TableCell >176</TableCell >
                           <TableCell >166</TableCell >
                           <TableCell >163</TableCell >
                           <TableCell >164</TableCell >
                           <TableCell >148</TableCell >
                           <TableCell >138</TableCell >
                           <TableCell >120</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Необходимость получения лицензии на
                               частоту
                           </TableCell >
                           <TableCell >нет</TableCell >
                           <TableCell >да</TableCell >
                           <TableCell >нет</TableCell >
                           <TableCell >да</TableCell >
                           <TableCell >да</TableCell >
                           <TableCell >да</TableCell >
                           <TableCell >нет</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Минимальная скорость передачи данных
                               (ниже скорость = больше дальность), bps</TableCell >
                           <TableCell >от 50</TableCell >
                           <TableCell >100</TableCell >
                           <TableCell >150</TableCell >
                           <TableCell >от 20 000</TableCell >
                           <TableCell >64 000</TableCell >
                           <TableCell >1000+</TableCell >
                           <TableCell >1000+</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Вероятность возникновения коллизий
                               сигналов
                           </TableCell >
                           <TableCell >низкая</TableCell >
                           <TableCell >средняя</TableCell >
                           <TableCell >высокая</TableCell >
                           <TableCell >средняя</TableCell >
                           <TableCell >средняя</TableCell >
                           <TableCell >средняя</TableCell >
                           <TableCell >средняя</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Максимальная дальность передачи, км</TableCell >
                           <TableCell >30</TableCell >
                           <TableCell >10</TableCell >
                           <TableCell >10</TableCell >
                           <TableCell >10</TableCell >
                           <TableCell >5</TableCell >
                           <TableCell >1</TableCell >
                           <TableCell >0,1</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Продолжительность автономной работы
                               передатчика в устройстве, лет</TableCell >
                           <TableCell >до
                               20
                           </TableCell >
                           <TableCell >до 10</TableCell >
                           <TableCell >до 10</TableCell >
                           <TableCell >до 10</TableCell >
                           <TableCell >3</TableCell >
                           <TableCell >0,011</TableCell >
                           <TableCell >0,001</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Чувствительность базовой станции, dBm</TableCell >
                           <TableCell >-150
                               (очень высокая)</TableCell >
                           <TableCell >-142
                               (высокая)</TableCell >
                           <TableCell >-139
                               (высокая)</TableCell >
                           <TableCell >-127
                               (высокая)</TableCell >
                           <TableCell >-123,4
                               (выше средней)</TableCell >
                           <TableCell >-114
                               (средняя)</TableCell >
                           <TableCell >-96
                               (низкая)</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Минимальная ширина радиоканала, Hz</TableCell >
                           <TableCell >50</TableCell >
                           <TableCell >100</TableCell >
                           <TableCell >125 000</TableCell >
                           <TableCell >200 000</TableCell >
                           <TableCell >192 000</TableCell >
                           <TableCell >200 000</TableCell >
                           <TableCell >20 000 000</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Собственное производство
                               радиомодулей и базовых станций</TableCell >
                           <TableCell >да</TableCell >
                           <TableCell >нет</TableCell >
                           <TableCell >нет</TableCell >
                           <TableCell >нет</TableCell >
                           <TableCell >нет</TableCell >
                           <TableCell >нет</TableCell >
                           <TableCell >нет</TableCell >
                       </TableRow>
                       <TableRow>
                           <TableCell >Стоимость передатчика для устройства</TableCell >
                           <TableCell >низкая</TableCell >
                           <TableCell >низкая</TableCell >
                           <TableCell >средняя</TableCell >
                           <TableCell >низкая</TableCell >
                           <TableCell >средняя</TableCell >
                           <TableCell >высокая</TableCell >
                           <TableCell >средняя</TableCell >
                       </TableRow>
                       </TableBody>

                   </Table>


                </TabPanel>
                 < TabPanel value={this.state.value} index={1}>
                    <Network/>
                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                    Раздел находится в разработке
                </TabPanel>
                <TabPanel value={this.state.value} index={3}>
                    Раздел находится в разработке
                </TabPanel>
            </div>
        )
    }
}

export default View;