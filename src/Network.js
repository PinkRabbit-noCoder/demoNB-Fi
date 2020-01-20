import React from "react";
import {Tooltip, Icon, Button} from '@material-ui/core';
import BaseStantion from "./BaseStantion";
import DownlinkPackage from "./DownlinkPackage";
import UplinkPackage from "./UplinkPackage";
import Modem from "./Modem";
import Badge from "@material-ui/core/Badge";

class Network extends React.Component{

    constructor() {
        super();
        this.state = {
            packages: [],
            journal : [],
            ansers:[],
            sendAnser: false,
            modemData:20,
           }
        this.handleSendData = this.handleSendData.bind(this);
        this.handleSendAnser = this.handleSendAnser.bind(this);
        this.handleChangeData =this.handleChangeData.bind(this);

    }



    handleSendAnser () {
        if(this.state.journal[this.state.journal.length-1] === "Пакет обнаружен базовой станцией") {
            this.setState({ansers:[...this.state.ansers, 1]});
            this.setState({journal: [...this.state.journal, "Станция отправила ответ"]});
            setTimeout(
                function () {
                    let a = this.state.ansers.pop();
                    this.setState({position: a});
                    this.setState({journal: [...this.state.journal, "Ответ принят"], sendAnser: false});
                }
                    .bind(this),
                Math.random() * 1000
            );
        }
    }

     handleSendData () {

        this.setState({packages:[...this.state.packages, 1]});
        this.setState({journal:[...this.state.journal, "В сети появился пакет"]});
        setTimeout(
            function() {
                let a = this.state.packages.pop();
                this.setState({position: a, journal:[...this.state.journal, "Пакет обнаружен базовой станцией"], sendAnser: true,});
            }
                .bind(this),
            Math.random()*10000

        );

    }

    handleChangeData(data){
        this.setState({modemData:data});

    }



    render(){
        const journalItems = this.state.journal.map((record) =>
             <li key={record.id}>
                {record}
            </li>);

        return(
            <div className="demo">
                < div className="network">
                    <div className="modem">
                        <Modem onChangeData = {this.handleChangeData}/>
                        <Button variant="outlined" onClick={this.handleSendData}>Отправить</Button>
                    </div>
                    {this.state.packages.map((pack)=> <UplinkPackage key={pack.id} value = {this.state.modemData} />)}

                    {this.state.ansers.map((ans)=> <DownlinkPackage key={ans.id} />)}




                    <div className="baseStation">
                        <BaseStantion className = "baseStation"/>
                    </div>

                </div>
                <div className="journal">
                    <h2>Журнал</h2>
                    <Button variant="outlined" onClick={()=>this.setState({packages:[], journal: []})} color="#9400D3">Отчистить журнал</Button>
                    <ol>
                        {journalItems}
                    </ol>
                </div>
            </div>

        );
    }
}
export default Network;