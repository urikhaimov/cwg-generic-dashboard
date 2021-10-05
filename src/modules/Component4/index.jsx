import React, { useContext } from 'react';
import { UserContext } from '../../library/common/context/UserContext';
import './styles.scss';

const Comp4 = () => {
  let context = useContext(UserContext);
  return (<div className="comp4-container">Component 4
    {context.user.fullName}
  </div>);
};

export default Comp4
