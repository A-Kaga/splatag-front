<template>
    <div>
        <div>
            <el-card shadow="always">
                当前项目进度
            </el-card>
        </div>
        <el-container>
            <el-main>
                <el-row :gutter="20" justify="center">
                    <el-col :span="3">
                        <el-card shadow="always">
                            总数：25
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card shadow="always">
                            已投产：7
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card shadow="always">
                            需求阶段：3
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card shadow="always">
                            开发阶段：5
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card shadow="always">
                            SIT测试：4
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card shadow="always">
                            UAT测试：6
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card shadow="always">
                            待投产：3
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card shadow="always">
                            已逾期：2
                        </el-card>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <p>逾期项目列表</p>
                <el-row :gutter="20" justify="center">
                    <el-col :span="24">
                        <el-table
                        :data="tableData2"
                        style="width: 80%">
                            <el-table-column
                                prop="program"
                                label="项目编号">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="项目名">
                            </el-table-column>
                            <el-table-column
                                prop="group"
                                label="小组名">
                            </el-table-column>
                            <el-table-column
                                prop="system"
                                label="所属系统">
                            </el-table-column>
                            <el-table-column
                                prop="lasttime"
                                label="逾期时间">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="12">
                        <div>
                            <div id="chart" style="width:500px;height:376px"></div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                            <div id="chart2" style="width:500px;height:376px"></div>
                        </div>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="12">
                        <p>各系统平均交付周期</p>
                        <el-table
                        :data="tableData3"
                        style="width: 80%">
                            <el-table-column
                                prop="system"
                                label="所属系统">
                            </el-table-column>
                            <el-table-column
                                prop="group"
                                label="小组名">
                            </el-table-column>
                            <el-table-column
                                prop="worker"
                                label="负责人">
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="交付时间(天)">
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :span="12">
                        <div>
                            <div id="chart3" style="width:500px;height:376px"></div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div>
                            <div id="pie" style="width:500px;height:376px"></div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                            <div id="chartMuti" style="width:500px;height:376px"></div>
                        </div>
                    </el-col>
                </el-row>

            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: 'program',
        data () {
            return {
                tableData: [{
                    program: 'XZXM20211',
                    name: '项目A',
                    group: '研发一组',
                    system: '系统1',
                    status: '需求阶段'
                }, {
                    program: 'YWYH20222',
                    name: '项目B',
                    group: '研发二组',
                    system: '系统2',
                    status: '开发阶段'
                },{
                    program: 'XZXM202001',
                    name: '项目C',
                    group: '研发三组',
                    system: '系统3',
                    status: 'UAT测试'
                },{
                    program: 'XZXM202006',
                    name: '项目D',
                    group: '研发四组',
                    system: '系统4',
                    status: '已逾期'
                },],
                
                tableData2: [{
                    program: 'XZXM202111',
                    name: '项目A',
                    group: '研发一组',
                    system: '系统1',
                    lasttime: '3天'
                }, {
                    program: 'YWYH202232',
                    name: '项目B',
                    group: '研发二组',
                    system: '系统2',
                    lasttime: '2天'
                },{
                    program: 'XZXM2022001',
                    name: '项目C',
                    group: '研发三组',
                    system: '系统3',
                    lasttime: '1天'
                },{
                    program: 'XZXM2042006',
                    name: '项目D',
                    group: '研发四组',
                    system: '系统4',
                    lasttime: '4天'
                },],

                tableData3: [{
                    system: '系统1',
                    group: '研发一组',
                    worker: '研发人员A',
                    time: '31',
                }, {
                    system: '系统2',
                    group: '研发二组',
                    worker: '研发人员B',
                    time: '27',
                }, {
                    system: '系统3',
                    group: '研发三组',
                    worker: '研发人员A',
                    time: '35',
                }, {
                    system: '系统4',
                    group: '研发四组',
                    worker: '研发人员A',
                    time: '22',
                }, {
                    system: '系统5',
                    group: '研发五组',
                    worker: '研发人员A',
                    time: '41',
                }, ],
            }
        },
        methods: {
		barEcharts () {
            // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
            let myChart = this.$echarts.init(document.getElementById("chart"));
            let myChart2 = this.$echarts.init(document.getElementById("chart2"));
            let myChart3 = this.$echarts.init(document.getElementById("chart3"));
            let pie = this.$echarts.init(document.getElementById("pie"));
            let chartMuti = this.$echarts.init(document.getElementById("chartMuti"));
            // 指定图表的配置项和数据
            let option = {
                title: {
                text: "项目分布情况",
                },
                tooltip: {},
                xAxis: {
                data: ["研发一组", "研发二组", "研发三组", "研发四组", "研发五组"],
                },
                yAxis: {},
                series: [
                {
                    name: "项目数",
                    type: "bar",
                    data: [5, 20, 36, 10, 10],
                },
                ],
            };
            let option2 = {
                title: {
                text: "逾期分布情况",
                },
                tooltip: {},
                legend: {
                data: ["研发小组"],
                },
                xAxis: {
                data: ["研发一组", "研发二组", "研发三组", "研发四组", "研发五组"],
                },
                yAxis: {},
                series: [
                {
                    name: "逾期项目数",
                    type: "bar",
                    data: [3, 2, 5, 1, 1],
                },
                ],
            };
            
            let option3 = {
                title: {
                text: "研发各组平均需求交付时长",
                },
                tooltip: {},
                xAxis: {
                data: ["研发一组", "研发二组", "研发三组", "研发四组", "研发五组"],
                },
                yAxis: {},
                series: [
                {
                    name: "交付时间（天）",
                    type: "bar",
                    data: [31, 26, 25, 41, 33],
                },
                ],
            };

            let option4 = {
                title: {
                text: "A系统项目各阶段停留时长分布",
                top: "0%",
                left: "center"
                },
                series: [
                {
                    type: "pie",
                    radius: "50%", //饼图半径
                    data: this.pieData,
                    data: [
                        { value: 7, name: '需求阶段' },
                        { value: 21, name: '开发阶段' },
                        { value: 14, name: 'SIT测试阶段' },
                        { value: 12, name: 'UAT测试阶段' },
                        { value: 3, name: '待投产阶段' }
                    ],
                }
                ]
            };

            let optionMuti = {
                title: {
                    text: '测试缺陷变化趋势'
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {
                    data: ['研发一组', '研发二组']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    name: '研发一组',
                    type: 'line',
                    stack: 'Total',
                    data: [13, 25, 17, 31, 22, 18, 12]
                    },
                    {
                    name: '研发二组',
                    type: 'line',
                    stack: 'Total',
                    data: [15, 27, 11, 42, 18, 22, 23]
                    }
                ]
            }
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            myChart2.setOption(option2);
            myChart3.setOption(option3);
            pie.setOption(option4);
            chartMuti.setOption(optionMuti);
            }
        },
        
        mounted () {
            this.barEcharts()
        }

    }
</script>

<style>
.button-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: var(--footer-height);
  background: #42b983;
  color: #fff;
}
.d1 {
   min-width: 100%;
    height: 40px;
    position: relative;
    display:flex;
    justify-content:flex-end;
}
.select {
  background-color: #42faa752;
}
</style>