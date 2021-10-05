import { UserContext } from "./../../library/common/context/UserContext";
import React, { lazy, Suspense, useContext } from "react";
import './styles.scss';
import { DashboardContext } from "./dashboardContext";
import data from './../../resources/mock/data.json';

const Dashboard = (props) => {
    const context = useContext(UserContext);
    const id = props.match.params.id
    const user = data.find((e) => e.id === parseInt(id));
    const list = user ? user["dashboard-components"] : [];

    return (
        <DashboardContext.Provider value={{
            ...context,
            user
        }}>


            <div>
                <div className="title">Hello {user.fullName}  <a href='/'>back</a></div>
                <div className="dashboard-grid">
                    {
                        list.length === 0 && <div> sorry there is no user</div>
                    }
                    {
                        list.map((c, i) => {
                            const Comp = lazy(() => {
                                return new Promise(resolve => resolve(c)).then(
                                    (c) => import(`../${c}`));
                            });

                            return (
                                <div key={`dashboard-comp${i}`} className='box'>
                                    <Suspense fallback={<div>Loading.....</div>}>
                                        <Comp />
                                    </Suspense>
                                </div>
                            )
                        })
                    }
                </div></div></DashboardContext.Provider>);
};


export default Dashboard;