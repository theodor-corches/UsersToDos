import { useSearchParams } from 'react-router-dom';
import FooterComp from './Footer/FooterComp';
import HeaderComp from './Header/HeaderComp';
import TodosListComp from './TodosList/TodosListComp';
import UsersListComp from './UsersList/UsersListComp';
import { URL_PARAM_VALUES } from './constants';
import './Layout.css';

const Layout = () => {
    const [searchParams]: [URLSearchParams, any] = useSearchParams();
    const modulesParam: string[] = searchParams.get('modules')?.split(',') || [];
    const isTodosList: boolean = modulesParam.includes(URL_PARAM_VALUES.NEWLIST);

    return (
        <>
            <HeaderComp />
            <div className="content">
                {!isTodosList ? <UsersListComp /> : <TodosListComp />}
            </div>
            <FooterComp />
        </>
    )
}

export default Layout;
