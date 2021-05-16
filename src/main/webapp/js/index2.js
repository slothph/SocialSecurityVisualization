//各经济类型参保情况
(function () {
    var myChart = echarts.init(document.querySelector('.economic .chart'));

    var option = {
        color: ['#00d9c8', '#06acac', '#408baf', '#19648b', '#3346a7', '#524ab7', '#9b4bd7', '#db5ed6'],
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)',
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

(function () {
    var myChart = echarts.init(document.querySelector('.insurance .chart'));
    var option = {
        radar: {
            center: ['50%', '58%'],
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#7288a4',
                    backgroundColor: '#07132d',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['#0b3c58', '#164b73', '#0b3d59', '#186489', '#0b3d59']
                },
                // shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
            },
            legend: {
                top: '10%',
                left: '10%',
                right: '10%'
            },
            indicator: [
                { name: '养老保险', max: 2000 },
                { name: '生育保险', max: 2000 },
                { name: '失业保险', max: 2000 },
                { name: '医疗保险', max: 2000 },
                { name: '工伤保险', max: 2000 }
            ]
        },
        series: [{
            name: '各类经济类型参保情况 ',
            type: 'radar',
            areaStyle: { normal: {} },
            axisLine: {
                LineStyle: {
                    color: '#205c90'
                }
            },
            data:
            {
                opacity: 0.8,
                value: [1000, 1221, 1235, 1221, 1365],
                areaStyle: {
                    color: '#1ba9be',
                    opacity: 0.3,

                },

            }

        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();






(function () {
    var myChart = echarts.init(document.querySelector('.transfer .chart'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['转入', '转出']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:
        {
            type: 'value',
            show: false
        },

        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                data: ['乐至县', '安岳县', '崔平县', '雁江区', '乐至县', '安岳县', '崔平县']
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
                
                data: [200, 170, 240, 244, 200, 220, 210],
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
                data: [-320, -302, -341, -374, -390, -450, -420],
                itemStyle:{
                    color:'#4221ed',
                    barBorderRadius:20
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();











