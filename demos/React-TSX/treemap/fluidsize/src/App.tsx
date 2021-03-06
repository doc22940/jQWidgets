import * as React from 'react';
 


import './App.css';

import JqxTreeMap, { ITreeMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreemap';

class App extends React.PureComponent<{}, ITreeMapProps> {
    constructor(props: {}) {
        super(props);

        this.state = {
            legendScaleCallback: (value: number): string => {
                return value.toFixed(1);
            },
            source: [
                {
                    label: 'USA',
                    value: 104
                },
                {
                    label: 'People\'s Republic of China',
                    value: 88
                },
                {
                    label: 'Great Britain',
                    value: 65
                },
                {
                    label: 'Russian Federation',
                    value: 82
                },
                {
                    label: 'Germany',
                    value: 44
                },
                {
                    label: 'Republic of Korea',
                    value: 28
                },
                {
                    label: 'France',
                    value: 34
                },
                {
                    label: 'Italy',
                    value: 28
                },
                {
                    label: 'Hungary',
                    value: 17
                },
                {
                    label: 'Australia',
                    value: 35
                },
                {
                    label: 'Japan',
                    value: 38
                },
                {
                    label: 'Kazakhstan',
                    value: 13
                },
                {
                    label: 'Netherlands',
                    value: 20
                },
                {
                    label: 'Ukraine',
                    value: 20
                },
                {
                    label: 'New Zealand',
                    value: 13
                },
                {
                    label: 'Cuba',
                    value: 14
                }
            ]
        }
    }

    public render() {
        return (
            <JqxTreeMap theme={'material-purple'}
                width={'75%'}
                height={'75%'}
                source={this.state.source}
                colorRange={100}
                colorMode={"autoColors"}
                baseColor={"#52CBFF"}
                legendLabel={"Olympic medal count - London 2012"}
                legendScaleCallback={this.state.legendScaleCallback}
            />
        );
    }
}

export default App;
