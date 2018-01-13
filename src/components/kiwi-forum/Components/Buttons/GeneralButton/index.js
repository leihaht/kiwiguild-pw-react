import React, { Component } from 'react';
import classnames from 'classnames';

class GeneralButton extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.disabled) {
            e.preventDefault();
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const {
            className,
            innerRef,
            hasIcon,
            icon,
            ...attributes
        } = this.props;

        const classes = classnames(
            className,
            { disabled: this.props.disabled },
            { hasIcon: hasIcon }
        );

        const Tag = (attributes.href) ? 'a' : 'button';
        const iconTag = (icon) ? (<i className={classnames('icon', 'fa', 'fa-'+icon, 'Button-icon')}></i>) : false;

        return (
            <Tag
                className={classes}
                {...attributes}
                ref={innerRef}
                onClick={this.onClick}
            >{iconTag}{this.props.children}
            </Tag>
        );
    }
};

export default GeneralButton;
