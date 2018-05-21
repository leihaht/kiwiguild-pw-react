import React, { Component } from 'react';
import { Container, Collapse } from 'reactstrap';
import { Field } from 'redux-form';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import icon from 'helpers/icon';

let Composer = ({
    isOpenComposer,
    closeComposer,
    fetchingDiscussion,
    discussion,
    handleSubmit,
    onSubmit }) => (
    <div className="App-composer">
    <Collapse isOpen={isOpenComposer}>
        { !fetchingDiscussion &&
            <Container>
                <div id="composer">
                    <div className={cx(
                        'Composer',
                        {normal: isOpenComposer},
                        {visible: isOpenComposer}
                    )}>
                        <div className="Composer-handle"></div>
                        <ul className="Composer-controls">
                            <li className="item-minimize App-backControl">
                                <button title="Minimize" itemclassname="App-backControl" className="Button Button--icon Button--link hasIcon" type="button">
                                    {icon('minus', {className: cx('minimize', 'Button-icon')})}
                                </button>
                            </li>
                            <li className="item-fullScreen">
                                <button title="Full Screen" className="Button Button--icon Button--link hasIcon" type="button">
                                    {icon('expand', {className: cx('Button-icon')})}
                                </button>
                            </li>
                            <li className="item-close">
                                <button title="Close" className="Button Button--icon Button--link hasIcon" type="button" onClick={closeComposer}>
                                    {icon('times', {className: cx('Button-icon')})}
                                </button>
                            </li>
                        </ul>
                        <form className="Composer-content" onSubmit={handleSubmit(onSubmit)}>
                            <div className="ComposerBody ">
                                <span className="Avatar ComposerBody-avatar">A</span>
                                <div className="ComposerBody-content">
                                    <ul className="ComposerBody-header">
                                        <li className="item-title">
                                            <h3>{icon('reply')}  <a href={discussion.slug}>{discussion.name}</a></h3>
                                        </li>
                                    </ul>
                                    <div className="ComposerBody-editor">
                                        <div className="TextEditor">
                                            <div className="ComposerBody-emojiWrapper">
                                                <div className="ComposerBody-mentionsWrapper">
                                                    <Field name="body" component="textarea" className="FormControl Composer-flexible" placeholder="Write a Reply..."/>
                                                    <div className="ComposerBody-mentionsDropdownContainer"></div>
                                                </div>
                                                <div className="ComposerBody-emojiDropdownContainer"></div>
                                            </div>
                                            <ul className="TextEditor-controls Composer-footer">
                                                <li className="item-submit App-primaryControl">
                                                    <button className="Button Button--primary hasIcon" itemclassname="App-primaryControl" type="submit" title="Post Reply">
                                                        {icon('check', {className: cx('Button-icon')})}
                                                        <span className="Button-label">Post Reply</span>
                                                    </button>
                                                </li>
                                                <li className="item-preview">
                                                    <button className="Button Button--icon hasIcon" type="button">{icon('eye', {className: cx('Button-icon')})}</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="LoadingIndicator ComposerBody-loading">
                                    <div className="spinner" role="progressbar">
                                    </div>&nbsp;
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        }
        </Collapse>
    </div>
);

export default Composer;
