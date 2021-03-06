import React from 'react';
import ReactDom from 'react-dom';
import BaseComponent from '../components/base-components';
//引入基础图表高阶组件
import CommonBar from './common/bar';
import CommonLine from './common/line';
import CommonScatter from './common/scatter';
import CommonMap from './common/map';
import CommonPie from './common/pie';
//引入特殊图表高阶组件
import BarRollingCharts from './special/bar-rolling';
import BarRollingTwoAxisCharts from './special/bar-rolling-two-axis';
import MapScreenOneCharts from './special/map-screen-one';
import PieGaugeCharts from './special/pie-gauge';
import BarDottedCharts from './special/bar-dotted';
import PieDottedCharts from './special/pie-dotted';
import BarSideProgressCharts from './special/bar-side-progress';

import './index.scss';

interface Props {

}

interface State {
    chartsWidth: string
    chartsHeight: string
}

class Demos extends BaseComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            chartsWidth: "400px",
            chartsHeight: "300px",
        }
    }


    setAxisTooltipFormatter(series: any) {
        let _html = "";
        if (series && series.length > 0) {
            _html += "<span class='tooltip name'>" + series[0].name + "</span>" + "：" + "<br>";
            for (let i = 0; i < series.length; i++) {
                _html += "<span class='tooltip value'>" + series[i].seriesName + "：" + series[i].value + "</span><br>";
            }
        }
        return _html;
    }

    render() {
        return (
            <div className="content">
                <header className="content-tip">
                    说明：基础图表可以直接使用组件，特殊图表有些不能直接使用组件，详情见示例demo
                </header>
                <div className="title common">基础图表</div>
                <section className="common-charts">
                    <div className="charts line">
                        <CommonLine width={this.state.chartsWidth} height={this.state.chartsHeight} />
                    </div>
                    <div className="charts bar">
                        <CommonBar width={this.state.chartsWidth} height={this.state.chartsHeight} />
                    </div>
                    <div className="charts scatter">
                        <CommonScatter width={this.state.chartsWidth} height={this.state.chartsHeight} />
                    </div>
                    <div className="charts map">
                        <CommonMap width={this.state.chartsWidth} height={this.state.chartsHeight} />
                    </div>
                    <div className="charts pie">
                        <CommonPie width={this.state.chartsWidth} height={this.state.chartsHeight} />
                    </div>
                </section>
                <div className="title special">特殊图表</div>
                <section className="special-charts">
                    <div className="row">
                        <div className="charts bar-rolling">
                            <BarRollingCharts width={this.state.chartsWidth} height={this.state.chartsHeight} />
                        </div>
                        <div className="charts bar-rolling-two">
                            <BarRollingTwoAxisCharts width={this.state.chartsWidth} height={this.state.chartsHeight} />
                        </div>
                        <div className="charts">
                            <PieGaugeCharts width={this.state.chartsWidth} height={this.state.chartsHeight} />
                        </div>
                        <div className="charts">
                            <BarDottedCharts width={this.state.chartsWidth} height={this.state.chartsHeight} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="charts">
                            <BarSideProgressCharts
                                width="530px"
                                height="320px"
                                reverseChartsData={[{ name: "在售SKU", data: [23, 30, 60, 90, 100] }]}
                                reverseYAxisData={['动销SKU数', '点击SKU数', '曝光SKU数', '7天有货SKU数', '在售SKU数']}
                                exposureProgress='65%'
                                clickProgress='40%'
                                buyProgress='20%'
                                movesaleProgress='10%' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="charts">
                            <PieDottedCharts width={this.state.chartsWidth} height={this.state.chartsHeight} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="charts">
                            <MapScreenOneCharts width="950px" height="800px" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Demos;

ReactDom.render(
    <Demos></Demos>,
    document.getElementById('root')
);