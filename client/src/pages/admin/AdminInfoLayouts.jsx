import React from 'react';
import { setCurrentShowAdminPanel, setTypeCellAdminPanel } from '../../redux/actions/actionCreator';
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
    const typeList = useSelector(state => state?.typeCellAdminPanel?.state);
    const dispatcher = useDispatch();

    const currentHandler = event => dispatcher(setCurrentShowAdminPanel(event.target.id));
    const typeListHandler = event => dispatcher(setTypeCellAdminPanel(event.target.name || event.target.id));

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
                    <div className="selector-wrapper">
                        <div className="selector-arrow"></div>
                        <div className="selector-arrow"></div>

                        <select defaultValue="add-date" className='active-sorting' name="sorting" id="sort0978">
                            <option value="add-date">По даті додавання</option>
                            <option value="price-to-down">За зростанням ціни</option>
                            <option value="price-to-up">За спаданням ціни</option>
                            <option value="popular">За популярністю</option>
                        </select>
                    </div>

                    <div className="view-current">
                        <div id="thumbnail" className={ typeList.thumbnail ? 'view-thumbnail current-view-t' : 'view-thumbnail' } onClick={e => typeListHandler(e)}>
                            <img name="thumbnail" width="40" height="40" src="https://img.icons8.com/ios/50/thumbnail-view.png" alt="thumbnail-view"/>
                        </div>

                        <div id="list" className={ typeList.list ? 'view-list current-view-l' : 'view-list' } onClick={e => typeListHandler(e)}>
                            <img name="list" width="40" height="40" src="https://img.icons8.com/ios/100/list--v1.png" alt="list--v1"/>
                        </div>
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
