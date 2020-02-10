import React, { createRef } from 'react';
import cx from 'classnames';
import './Form.css';

export function Label(props) {
  return <label className={cx('Label')} {...props} />;
}

export function Input(props) {
  return <input className={cx('Input')} {...props} />;
}

export function Required(props) {
  return (
    <span className={cx('Required')} {...props}>
      &#42;
    </span>
  );
}

export function Textarea(props) {
  return <textarea className={cx('Textarea')} {...props} />;
}
