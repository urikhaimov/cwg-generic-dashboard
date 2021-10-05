import React, { useContext } from 'react';
import { UserContext } from '../../library/common/context/UserContext';
import './styles.scss';
const Comp5 = () => {
  let context = useContext(UserContext);
  return (<div className="comp5-container">Component 5
    {context.user.fullName}
  </div>);
};

export default Comp5
