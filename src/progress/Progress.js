import { PropTypes } from 'react';
import React from 'react';
import { Line, Circle } from 'rc-progress';
import classNames from 'classnames';
import './progress.scss';


const statusColorMap = {
    normal: '#108ee9',
    exception: '#ff5500',
    success: '#87d068'
}


export default class Progress extends React.Component {
    static propTypes = {
        prefixCls: PropTypes.string,
        type: PropTypes.string,
        percent: PropTypes.number,
        strokeLinecap: PropTypes.string,
        strokeWidth: PropTypes.number,
        showInfo: PropTypes.bool,
        status: PropTypes.string,
        format: PropTypes.func,
    };

    static defaultProps = {
        prefixCls: 'zet-progress',
        type: 'line',
        percent: 0,
        strokeLinecap: 'round',
        showInfo: true,
        status: 'normal',
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { prefixCls, type, percent, strokeWidth, showInfo, status, format, strokeLinecap } = this.props;
        const progressStatus = parseInt(percent.toString()) >= 100 && status != 'exception' ?
                                'success' : (status || 'normal');
        const textFormatter = format || (percent => `${percent}%`);
        
        let strWidth, progressInfo;
        if (type == 'line') {
            strWidth = strokeWidth || 10;
            progressInfo = (
                <div className='clearfix'>
                    <div className={`${prefixCls}-line`}>
                        <Line style={{width: '100%', height: strWidth}} 
                              strokeColor={statusColorMap[progressStatus]} 
                              strokeLinecap={strokeLinecap}
                              percent={percent}  />
                    </div>
                    {showInfo ? <span className={`${prefixCls}-lc`}>{textFormatter(percent)}</span> : ''}
                </div>    
            );
        }else if (type == 'circle') {
            strWidth = strokeWidth || 6;
            progressInfo = (
                <div className={`${prefixCls}-circle`}>
                    <Circle percent={percent} 
                            strokeWidth={strWidth} 
                            trailWidth={strWidth} 
                            strokeLinecap={strokeLinecap}
                            strokeColor={statusColorMap[progressStatus]} />
                    {showInfo ? <span className={`${prefixCls}-cc`}>{textFormatter(percent)}</span> : ''}
                </div>
            )
        }

        const rootClass = classNames(prefixCls);

        return (
            <div className={rootClass}>
                {progressInfo}
            </div>
        );
    }
}
