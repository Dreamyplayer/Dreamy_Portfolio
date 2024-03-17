import { MouseEventHandler, ReactNode } from 'react';

import PropTypes from 'prop-types';

type IconButtonProps = {
  Text?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  classname?: string;
  defaultIcon?: JSX.Element;
  onClickHandle?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: ReactNode;
};

const IconButton = ({
  Text = '',
  leftIcon,
  rightIcon,
  classname = '',
  defaultIcon,
  onClickHandle,
  children,
}: IconButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClickHandle}
      className={`
      ${classname}
       ${Text !== '' ? 'px-2 py-2' : ''} cursor-pointer text-white active:translate-y-px`}
    >
      <div className='group relative flex cursor-pointer items-center justify-center px-2 py-2 hover:rounded-md'>
        {defaultIcon}
        {leftIcon && <span className={`mr-2`}>{leftIcon}</span>}
        {Text}
        {rightIcon && <span className={`ml-2`}>{rightIcon}</span>}
        {children}
      </div>
    </button>
  );
};

IconButton.propTypes = {
  Text: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  classname: PropTypes.string,
  defaultIcon: PropTypes.node,
  onClickHandle: PropTypes.func,
  children: PropTypes.node,
};

export default IconButton;
