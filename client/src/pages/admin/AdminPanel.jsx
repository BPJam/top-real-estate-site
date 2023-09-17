import React, { useState } from 'react';
import AdminInfoLayouts from './AdminInfoLayouts';
import { useDispatch, useSelector } from 'react-redux';
import { setStateAdminPanel } from '../../redux/actions/actionCreator';

function AdminPanel() {
    const [open, setOpen] = useState('open');
    const [click, setClick] = useState('clicked');
    
    const active = useSelector(state => state?.setStateAdminPanel?.state);
    const dispatcher = useDispatch();

    const handleOpen = () => {
        setOpen(() => open === '' ? 'open' : '');
        setClick(() => click === '' ? 'clicked' : '');
    }

    const chooseHandler = (event) => {
        if (active[event.target.id]) {
            return;
        }

        dispatcher(setStateAdminPanel(event.target.id));

        handleOpen();
    }

    return (
        <>
            <div className='side-action default-open'>
                {/* eslint-disable-next-line */}
                <div className={'nav-icon' + ' ' + open} onClick={handleOpen}>
                    {
                        open === '' ?
                            <img width="35" height="35" src="https://img.icons8.com/ios/50/forward--v1.png" alt="forward--v1"/>
                        :
                            <img width="35" height="35" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/>
                    }
                </div>

                {/* eslint-disable-next-line */}
                <div className={'action-menu' + ' ' + click}>
                    <div className="action-items">
                        <div
                            id='first'
                            className={ active.first ? 'action-item choosed' : 'action-item'}
                            onClick={e => chooseHandler(e)}
                        >
                            Об'єкти
                        </div>

                        <div
                            id='second'
                            className={ active.second ? 'action-item choosed' : 'action-item'}
                            onClick={e => chooseHandler(e)}
                        >
                            Закритий продаж
                        </div>

                        <div
                            id='third'
                            className={ active.third ? 'action-item choosed' : 'action-item'}
                            onClick={e => chooseHandler(e)}
                        >
                            Користувачі
                        </div>

                        <div
                            id='fourth'
                            className={ active.fourth ? 'action-item choosed' : 'action-item'}
                            onClick={e => chooseHandler(e)}
                        >
                            Адміністратори
                        </div>
                    </div>
                </div>
            </div>

            <div className='ap-controlls'>
                <div className="info">
                    <AdminInfoLayouts action={active} />
                </div>
            </div>
        </>
    );
}

export default AdminPanel;
