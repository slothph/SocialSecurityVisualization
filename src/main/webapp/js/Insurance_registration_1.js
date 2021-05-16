//各经济类型参保情况
(function () {
    var myChart = echarts.init(document.querySelector('.trend .chart'));
    $.ajax({
        method: 'get',
        url: '/insure',
        dataType: 'json',
        success: function (data) {
            let insureDate = [];
            for (let i = 0; i < data.length; i++) {
                insureDate[i] = data[i].insureDate;
            }

            var option = {
                tooltip: {
                    trigger: 'axis',
                    formatter: '{a0}:{c0}万人<br/>{a1}:{c1}<br/>{a2}:{c2}% {a3}:{c3}%'
                },
                legend: {
                    top: "0%",
                    textStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: "12"
                    }
                },
                grid: {
                    top: '30',
                    left: '10',
                    right: '30',
                    bottom: '10',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: 10
                            }
                        },
                        axisTick: {
                            // 不显示刻度线
                            show: false
                        },
                        // 显示x轴
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.1)',
                                width: 2
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        data: insureDate,
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: true,
                        min: 0,
                        max: 500,
                        interval: 100,
                        //修改刻度标签 相关样式
                        axisLabel: {
                            color: 'rgba(255,255,255,.6)',
                            fontSize: '10'
                        },

                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.1)',
                                width: 2
                            }
                        },
                        // 不显示y轴分割线
                        splitLine: {
                            show: false
                        }
                    },
                    {
                        type: 'value',
                        show: true,
                        min: 0,
                        max: 5,
                        interval: 1,
                        //修改刻度标签 相关样式
                        axisLabel: {
                            color: 'rgba(255,255,255,.6)',
                            fontSize: '12',
                            formatter: '{value} %'
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.1)',
                                width: 2
                            }
                        },
                        // y轴分割线的颜色
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: '参保单位',
                        type: 'bar',
                        barWidth: '20%',
                        yAxisIndex: 0,
                        itemStyle: {
                            barBorderRadius: 5,
                            color: '#01c7ca',
                        },
                        data: [280, 150, 300, 270, 290, 350]
                    },
                    {
                        name: '单位注销参保书',
                        type: 'bar',
                        barWidth: '20%',
                        yAxisIndex: 0,
                        itemStyle: {
                            barBorderRadius: 5,
                            color: '#a8ad14',
                        },
                        data: [120, 90, 100, 105, 80, 50]
                    },
                    {
                        name: '同比',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#9e64ab",
                            width: 1
                        },
                        //设置拐点
                        symbol: 'circle',
                        // 拐点大小
                        symbolSize: 2,
                        // 开始不显示拐点， 鼠标经过显示
                        showSymbol: false,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: "#9e64ab",
                            borderColor: "rgba(221, 220, 107, .1)",
                            borderWidth: 8
                        },
                        data: [4.1, 3.8, 3.2, 4.2, 3.3, 3.7]
                    },
                    {
                        yAxisIndex: 1,
                        name: "环比",
                        type: "line",
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "#b0b610",
                                width: 2
                            }
                        },
                        // 设置拐点 小圆点
                        symbol: "circle",
                        // 拐点大小
                        symbolSize: 2,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: "#b0b610",
                            borderColor: "rgba(221, 220, 107, .1)",
                            borderWidth: 12
                        },
                        // 开始不显示拐点， 鼠标经过显示
                        showSymbol: false,
                        data: [3.8, 3.2, 4.2, 3.3, 3.7, 4.1]
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener('resize', function () {
                myChart.resize();
            });


        }
    });


})();


//新业态行业参保情况
(function () {
    var myChart = echarts.init(document.querySelector('.new_format .chart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "10"
            }
        },
        grid: {
            top: '30',
            left: '10',
            right: '30',
            bottom: '0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.8)",
                        fontSize: 12
                    },
                    interval: 0,
                    rotate: 45,
                    inside: false,
                },

                axisTick: {
                    // 不显示刻度线
                    show: false
                },
                // 显示x轴
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                        width: 2
                    }
                },
                splitLine: {
                    show: false
                },

                data: ["电子信息", "装备制造", "医药健康", "新型材料", "绿色食品", "会展"]

            }
        ],
        yAxis: [
            {
                type: 'value',
                show: true,
                name: "参保数",
                nameTextStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
                min: 0,
                max: 500,
                interval: 100,
                splitLine: {
                    show: false
                },

                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 10
                    }
                },
            }
        ],
        series: [
            {
                name: '参保单位',
                type: 'line',
                smooth: true, // 圆滑的线
                // 单独修改当前线条的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 填充区域渐变透明颜色
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                            offset: 0,
                            color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                        },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                //设置拐点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 5,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                data: [390, 380, 300, 421, 350, 240],
            },
            {
                name: "职工数",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                offset: 0,
                                color: "rgba(0, 216, 135, 0.4)"
                            },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [220, 180, 290, 105, 310, 190],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();


(function () {
    var myChart = echarts.init(document.querySelector('.radar .chart'));
    var option = {
        radar: {
            // shape: 'circle',
            center: ['50%', '57%'], // 位置
            radius: '80%', //大小
            splitNumber: 3,
            indicator: [
                {name: '养老保险 1600', max: 2000},
                {name: '生育保险 1800', max: 2000},
                {name: '失业保险 1200', max: 2000},
                {name: '医疗保险 1650', max: 2000},
                {name: '工伤保险 1500', max: 2000}
            ],
            triggerEvent: true,
            splitArea: {
                show: false,
                areaStyle: {
                    color: 'rgba(255,0,0,0)', // 图表背景的颜色
                },
            },


            axisLine: {
                lineStyle: {
                    color: 'rgba(136, 172, 209,.8)',
                    width: 2
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(136, 172, 209,.6)',
                    width: 2
                },
            },


        },
        series: [{
            type: 'radar',
            data: [{
                value: [1600, 1800, 1200, 1650, 1500],
                itemStyle: {
                    normal: {
                        color: 'rgba(30, 190, 205, 1)',
                        lineStyle: {
                            color: 'rgba(255,225,0,.3)',
                        },
                    },
                },
                areaStyle: {
                    shadowColor: 'rgba(30, 190, 205, 1)'
                },
            }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();


//各经济类型参保情况
(function () {
    var myChart = echarts.init(document.querySelector('.economic .chart'));

    var option = {
        color: ['#00d9c8', '#06acac', '#408baf', '#19648b', '#3346a7', '#524ab7', '#9b4bd7', '#db5ed6'],
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {d}%',
        },
        legend: {
            left: '10%',
            right: '10%',
            itemWidth: 10,
            itemHeight: 10,
            bottom: '0%',
            textStyle: {
                color: "rgba(201, 215, 223)",
                fontSize: 10
            },
            formatter: '{name}',

        },
        series: [
            {
                name: '各经济类型参保情况',
                type: 'pie',
                radius: ['20%', '80%'],
                center: ['50%', '40%'],
                roseType: 'radius',
                // 图形的文字标签
                label: {
                    show: false,
                    fontSize: 10
                },
                labelLine: {
                    //length 连接图形的线条
                    length: 6,
                    //length2 连接文字的线条
                    length2: 8,
                },
                data: [
                    {
                        value: 30,
                        name: '其它'
                    },
                    {
                        value: 25,
                        name: '外资'
                    },
                    {
                        value: 15,
                        name: '股份'
                    },
                    {
                        value: 10,
                        name: '联营'
                    },
                    {
                        value: 8,
                        name: '个体'
                    },
                    {
                        value: 6,
                        name: '私营'
                    },
                    {
                        value: 4,
                        name: '集体'
                    },
                    {
                        value: 2,
                        name: '国有'
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

//近几年单位缴费基数变化趋势
(function () {
    var myChart = echarts.init(document.querySelector('.change-trend .chart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "10"
            }
        },
        grid: {
            top: '30',
            left: '10',
            right: '30',
            bottom: '0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 10
                    },
                },

                axisTick: {
                    // 不显示刻度线
                    show: false
                },
                // 显示x轴
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                        width: 2
                    }
                },
                splitLine: {
                    show: false
                },

                data: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"]

            }
        ],
        yAxis: [
            {
                type: 'value',
                show: true,
                name: "金额（十元）",
                nameTextStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
                min: 0,
                max: 500,
                interval: 100,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 10
                    }
                },
            }
        ],
        series: [
            {
                name: '缴费基数',
                type: 'line',
                smooth: true, // 圆滑的线
                lineStyle: {
                    color: "rgba(19, 110, 242)",
                    width: 2
                },
                // 填充区域渐变透明颜色
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                            offset: 0,
                            color: "rgba(19, 110, 242, 0.5)" // 渐变色的起始颜色
                        },
                            {
                                offset: 0.8,
                                color: "rgba(19, 110, 242, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                //设置拐点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 5,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                data: [190, 280, 260, 330, 400, 420, 350],
            },

        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

//柱状图2
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.industry .chart'));
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F88448', '#8878F6'];
    //2.制定配置和数据
    var option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            right: '10%',
        },

        //不显示X轴的相关信息
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['农林牧渔业', '住宿和餐饮业', '房地产业', '金融业', '信息技术'],
                //不显示y轴的线
                axisLine: {
                    show: false
                },
                //不显示刻度
                axisTick: {
                    show: false
                },
                //把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: '#fff'
                }
            },
            {
                show: true,
                data: [2546, 2230, 1024, 1468, 2587],
                inverse: true,
                //不显示y轴的线
                axisLine: {
                    show: false
                },
                //不显示刻度
                axisTick: {
                    show: false
                },
                //把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [60, 34, 60, 78, 77],
                yAxisIndex: 0,
                //修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    //此时的color可以修改柱子的颜色
                    color: function (params) {
                        //params传进来的是柱子对象
                        // console.log(params);
                        // dataIndex是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                //柱子之间的距离
                barCategoryGap: '50%',
                //柱子的宽度
                barWidth: 10,
                //显示柱子内的文字
                label: {
                    show: true,
                    position: 'inside',
                    //{c} 会自动的解析为 数据data里面的数据
                    formatter: '{c}%'
                }
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: '50%',
                barWidth: '58%',
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
                itemStyle: {
                    barBorderRadius: 20,
                    //此时的color可以修改柱子的颜色
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15
                },
            }
        ]
    };

    //3.将配置给实例对象
    myChart.setOption(option);
})();

(function () {
    var myChart = echarts.init(document.querySelector('.transfer .chart'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'

            }
        },
        legend: {
            data: ['转入', '转出'],
            textStyle: {
                color: "rgba(201, 215, 223)",
                fontSize: 12
            },
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:
            {
                type: 'value',
                show: false,

            },

        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                data: ['成华区', '乐至县', '雁江区', '安岳县', '崔平县', '锦江区'],

                axisLabel: {
                    color: '#fff'
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(41, 131, 214)',
                        width: 2
                    }
                },
            }
        ],
        series: [

            {
                name: '转入',
                type: 'bar',
                label: {
                    show: false,
                    position: 'inside'
                },
                emphasis: {
                    focus: 'series'
                },

                data: [152, 170, 220, 210, 240, 244],
                itemStyle: {
                    barBorderRadius: 20,
                    //此时的color可以修改柱子的颜色
                    color: '#18d8c1'
                },
            },
            {
                name: '转出',
                type: 'bar',
                stack: '总量',
                label: {
                    show: false,
                },
                emphasis: {
                    focus: 'series'
                },
                data: [-160, -233, -182, -250, -254, -279],
                itemStyle: {
                    color: '#4221ed',
                    barBorderRadius: 20
                }

            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();






