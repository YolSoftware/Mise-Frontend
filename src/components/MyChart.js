import React from 'react';
import '../stylesheets/MyChart.css';

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import { ResponsiveRadar } from '@nivo/radar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyChart = ({dustData}) => {

  const data = [
    {
      "name": "미세먼지",
      "value": dustData.today.pm10Value
    },
    {
      "name": "일산화탄소",
      "value": dustData.today.coValue * 100
    },
    {
      "name": "아황산가스",
      "value": dustData.today.so2Value * 10000
    },
    {
      "name": "이산화질소",
      "value": dustData.today.no2Value * 1000
    },
    {
      "name": "오존",
      "value": dustData.today.o3Value * 100
    },
    {
      "name": "초미세먼지",
      "value": dustData.today.pm25Value
    }
  ]

  return (
    <div className="myChart">
      <ResponsiveRadar
        data={data}
        keys={[ 'value' ]}
        indexBy="name"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )
}

export default MyChart;