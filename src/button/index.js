import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class Button extends React.Component {
    static defaultProps = {
        status: 'default'
    }

    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        status: PropTypes.string,
        border: PropTypes.string,
        icon: PropTypes.string,
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
        onClick: PropTypes.func
    }

    handleClick = e => {
        this.props.onClick(e);
    }

    render() {
        let { status, border, icon, loading, disabled } = this.props;

        if (status) {
            status = `zet-btn-${status}`;
        }

        if (border) {
            border = `zet-btn-${border}`;
        }
        if (icon) {
            icon = `zet-icon icon-${icon}`;
        }

        if (loading) {
            icon = 'zet-icon icon-loading';
            loading = 'zet-btn-loading';
        }

        if (disabled) {
            disabled = 'zet-btn-disabled';
        }

        const className = classnames(
            'zet-btn',
            status,
            border,
            loading,
            disabled,
            this.props.className
        );

        const iconHtml = this.props.icon || this.props.loading ? <i className={icon} /> : '';

        return (
            <button onClick={this.handleClick}
                disabled={this.props.disabled}
                className={className}>
                {iconHtml}
                {this.props.children}
            </button>
        );
    }
}
