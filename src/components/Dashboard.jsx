import React, { Component } from 'react';
import Chart from './Chart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RankTable from './RankTable';

class Dashboard extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} sm={6} className="mb-2 bg-white">
                    <RankTable />
                </Col>
            </Row>



            // <Row>
            //     {this.props.charts && 
            //        this.props.charts.map((chart, index) => {
            //            return (
            //             <Col xs={12} sm={6} className="mb-2" key={index}>
            //                 <Chart
            //                     data={chart.serie}
            //                     userConfig={this.props.userConfig}
            //                     titleName={chart.title}
            //                 />
            //             </Col>
            //            );
            //        })}
            // </Row>
        );
    }
}


export default Dashboard;