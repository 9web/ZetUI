import React, {Component, PropTypes} from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export default class Pagination extends Component {
    static defaultProps = {
        className: ''
    }

    static propTypes = {
        className: PropTypes.string,
        current: PropTypes.number,
        defaultCurrent: PropTypes.number,
        total: PropTypes.number,
        defaultPageSize: PropTypes.number,
        pageSize: PropTypes.number,
        onChange: PropTypes.func
    }

    render() {
        let className = this.props.className;
        return (
            <RcPagination
                {...this.props}
                className={className} />
        );
    }
}
