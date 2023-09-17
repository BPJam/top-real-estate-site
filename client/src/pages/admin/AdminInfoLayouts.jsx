import React from 'react';
import { setCurrentShowAdminPanel } from '../../redux/actions/actionCreator';
import { useDispatch, useSelector } from 'react-redux';

function AdminInfoLayouts({ action }) {
    return (
        <>
            { action.first && <Objects /> }

            { action.second && <CloseSale /> }

            { action.third && <Users /> }

            { action.fourth && <Admins/> }
        </>
    );
}

export default AdminInfoLayouts;

function Objects() {
    const current = useSelector(state => state?.currentShowAdminPanel?.state);
    const dispatcher = useDispatch();

    const currentHandler = event => dispatcher(setCurrentShowAdminPanel(event.target.id));

    return (
        <>
            <div className="info-nav">
                <h1>Об'єкти</h1>

                <div className="info-delemiter"></div>

                <div className="active-buttons">
                    <div className="active-buttons-choose">
                        <button
                            id='act'
                            className={ current.act ? 'choose-actual current-choosed-aa-o' : 'choose-actual' }
                            onClick={e => currentHandler(e)}
                        >
                            Актуальні
                        </button>

                        <button
                            id='arh'
                            className={ current.arh ? 'choose-archive current-choosed-aa-o' : 'choose-archive' }
                            onClick={e => currentHandler(e)}
                        >
                            Архів
                        </button>
                    </div>

                    <button className='active-buttons-add'>Додати</button>
                </div>

                <div className="bottom-active-p">
                    <div className="view-current">
                        <img width="40" height="40" src="https://img.icons8.com/ios/50/thumbnail-view.png" alt="thumbnail-view"/>
                        <img width="40" height="40" src="https://img.icons8.com/ios/50/day-view.png" alt="day-view"/>
                    </div>
                </div>
            </div>
                
        </>
    );
}

function CloseSale() {
    return (
        <>
            <div className="info-nav">
                <h1>Закритий продаж</h1>

                <div className="info-delemiter"></div>

                <div className="active-buttons">
                    <button>Example</button>
                    <button>Example</button>
                    <button>Example</button>
                </div>
            </div>
        </>
    );
}

function Users() {
    return (
        <>
            <div className="info-nav">
                <h1>Користувачі</h1>

                <div className="info-delemiter"></div>

                <div className="active-buttons">
                    <button>Example</button>
                    <button>Example</button>
                    <button>Example</button>
                </div>
            </div>
        </>
    );
}

function Admins() {
    return (
        <>
            <div className="info-nav">
                <h1>Адміністратори</h1>

                <div className="info-delemiter"></div>

                <div className="active-buttons">
                    <button>Example</button>
                    <button>Example</button>
                    <button>Example</button>
                </div>
            </div>
        </>
    );
}
