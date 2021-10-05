import React, { lazy, Suspense } from "react";
import data from '../../resources/mock/data.json';
import { DashboardContext } from './dashboardContext'
import './styles.scss';


const Dashboard = (props) => {
    const user = data.find((e) => e.id === parseInt(props.match.params.id));
    const list = user ? user["dashboard-components"] : [];

    return (
        <DashboardContext.Provider value={{
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