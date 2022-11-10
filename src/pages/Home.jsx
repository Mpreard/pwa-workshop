import * as React from 'react';
import Map from '../components/map/Map';
import BarGraph from "../components/graph/BarGraph";
import DonutGraph from "../components/graph/DonutGraph";

export default function Home() {

    const barGraphicLabel1 = ['IWatch', 'Iphone', 'Computer', 'Ipad'];
    const barGraphicLabel2 = ['Objet perdu', 'Object en possession'];
    const barGraphicData1 = [
        {
            label: "Nombre d'appareil",
            data: ['23', '102', '304', '53'],
            backgroundColor: ["red", "blue", "Green", "Yellow"]
        }
    ];
    const barGraphicData2 = [
        {
            label: "Status des appareils",
            data: ['25', '21'],
            backgroundColor: ["red", "blue"]
        }
    ];

    return (
        <div className="Container">
            <div className="Row">
                <div className="Col">
                    <Map />
                </div>
            </div>
            <div className="Row">
                <div className="Col Col-graph">
                    <div className="Container-graph">
                        <BarGraph labels={barGraphicLabel1} datasets={barGraphicData1}/>
                    </div>
                    <div className="Container-graph">
                        <DonutGraph/>
                    </div>
                    <div className="Container-graph">
                        <BarGraph labels={barGraphicLabel2} datasets={barGraphicData2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}