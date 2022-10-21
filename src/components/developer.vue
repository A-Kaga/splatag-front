<template>
    <div>
        <div>
            <el-card shadow="always">
                研发人员数量
            </el-card>
        </div>
        <el-container>
            <el-main>
                <el-row :gutter="20" justify="center">
                    <el-col :span="8">
                        <el-card shadow="always">
                            行员：56
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="always">
                            项目制人员：78
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="always">
                            低中高成本人员：89
                        </el-card>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <p>研发人员当月代码产出量</p>
                <el-row :gutter="20" justify="center">
                    <el-col :span="24">
                        <el-table
                        :data="tableData"
                        style="width: 80%">
                            <el-table-column
                                prop="name"
                                label="姓名">
                            </el-table-column>
                            <el-table-column
                                prop="group"
                                label="小组名">
                            </el-table-column>
                            <el-table-column
                                prop="status"
                                label="人员性质">
                            </el-table-column>
                            <el-table-column
                                prop="add"
                                label="新增">
                            </el-table-column>
                            <el-table-column
                                prop="modify"
                                label="修改">
                            </el-table-column>
                            <el-table-column
                                prop="del"
                                label="删除">
                            </el-table-column>
                            <el-table-column
                                prop="total"
                                label="合计">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="12">
                        <p>系统代码千行缺陷率</p>
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
                                prop="bug"
                                label="缺陷率（%）">
                            </el-table-column>
                        </el-table>
                    </el-col>
                    
                    <el-col :span="12">
                        <div>
                            <div id="line" style="width:500px;height:376px"></div>
                        </div>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="12">
                        <p>
                            研发人员A代码交付质量门禁通过情况
                        </p>
                    </el-col>
                    <el-col>
                        <div>
                            <div id="stack" style="width:500px;height:376px"></div>
                        </div>
                    </el-col>
                </el-row>
                <el-divider></el-divider>

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
                    name: '人员A',
                    group: '研发一组',
                    status: '行员',
                    add: 356,
                    modify: 123,
                    del: 58,
                    total: 537
                }, {
                    name: '人员B',
                    group: '研发二组',
                    status: '行员',
                    add: 456,
                    modify: 323,
                    del: 158,
                    total: 937
                }, {
                    name: '人员C',
                    group: '研发四组',
                    status: '项目制',
                    add: 311,
                    modify: 413,
                    del: 331,
                    total: 1055
                }, {
                    name: '人员D',
                    group: '研发五组',
                    status: '中成本',
                    add: 651,
                    modify: 125,
                    del: 158,
                    total: 934
                },],
                
                tableData2: [{
                    program: 'XZXM202111',
                    name: '项目A',
                    worker: '研发人员A',
                    group: '研发一组',
                    system: '系统1',
                    status: '需求阶段',
                    lasttime: '3天'
                }, {
                    program: 'YWYH202232',
                    name: '项目B',
                    worker: '研发人员A',
                    group: '研发二组',
                    system: '系统2',
                    status: 'SIT测试',
                    lasttime: '2天'
                },{
                    program: 'XZXM2022001',
                    name: '项目C',
                    worker: '研发人员B',
                    group: '研发三组',
                    system: '系统3',
                    status: '开发阶段',
                    lasttime: '1天'
                },{
                    program: 'XZXM2042006',
                    name: '项目D',
                    worker: '研发人员C',
                    group: '研发四组',
                    system: '系统4',
                    status: 'UAT测试',
                    lasttime: '4天'
                },],

                tableData3: [{
                    system: '系统1',
                    group: '研发一组',
                    worker: '研发人员A',
                    bug: '4%',
                }, {
                    system: '系统2',
                    group: '研发二组',
                    worker: '研发人员B',
                    bug: '3%',
                }, {
                    system: '系统3',
                    group: '研发三组',
                    worker: '研发人员A',
                    bug: '2%',
                }, {
                    system: '系统4',
                    group: '研发四组',
                    worker: '研发人员A',
                    bug: '6%',
                }, {
                    system: '系统5',
                    group: '研发五组',
                    worker: '研发人员A',
                    bug: '7%',
                }, ],
                
                tableData4: [{
                    system: '系统1',
                    group: '研发一组',
                    worker: '研发人员A',
                    pass: '94%',
                }, {
                    system: '系统2',
                    group: '研发二组',
                    worker: '研发人员B',
                    pass: '3%',
                }, {
                    system: '系统3',
                    group: '研发三组',
                    worker: '研发人员A',
                    pass: '92%',
                }, {
                    system: '系统4',
                    group: '研发四组',
                    worker: '研发人员A',
                    pass: '96%',
                }, {
                    system: '系统5',
                    group: '研发五组',
                    worker: '研发人员A',
                    pass: '87%',
                }, ],

                tableData5: [{
                    system: '系统1',
                    group: '研发一组',
                    worker: 'A',
                    bug1: 3,
                    bug2: 1,
                    bug3: 0,
                }, {
                    system: '系统2',
                    group: '研发二组',
                    worker: 'B',
                    bug1: 4,
                    bug2: 2,
                    bug3: 2,
                }, {
                    system: '系统3',
                    group: '研发三组',
                    worker: 'A',
                    bug1: 5,
                    bug2: 1,
                    bug3: 0,
                }],
            }
        },
        methods: {
		barEcharts () {
            // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
            let line = this.$echarts.init(document.getElementById("line"));
            let stack = this.$echarts.init(document.getElementById("stack"));

            let optionLine = {
                title: {
                    text: "A系统千行代码缺陷数",
                    top: "0%",
                    left: "center"
                },
                xAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [27, 25, 22, 19, 21],
                    type: 'line'
                    }
                ]
            };

            let optionStack = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['A系统', 'B系统', 'C系统', 'D系统', 'E系统']
                },
                series: [
                    {
                    name: '通过',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [25, 36, 42, 41, 37,]
                    },
                    {
                    name: '未通过',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [4, 3, 7, 5, 6]
                    }
                ]
            }

            line.setOption(optionLine)
            stack.setOption(optionStack)
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