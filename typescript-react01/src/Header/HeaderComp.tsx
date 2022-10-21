import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { URLSearchParams } from 'url';
import SidebarComp from '../Sidebar/SidebarComp';
import hamburgerIcon from '../assets/images/hamburger.svg';
import './HeaderComp.css';
import { Button } from 'flowbite-react';
import { URL_PARAM_VALUES } from '../constants';

const HeaderComp = () => {
  const [searchParams, setSearchParams]: [URLSearchParams, any] = useSearchParams();
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const modulesParam: string[] = searchParams.get('modules')?.split(',') || [];
  const isChangeSidebar: boolean = modulesParam.includes(URL_PARAM_VALUES.CHANGESIDEBAR);
  const isNewList: boolean = modulesParam.includes(URL_PARAM_VALUES.NEWLIST);

  const updateSearchParams = (paramValue: string): void => {
    if(!modulesParam.includes(paramValue)){
      modulesParam.push(paramValue);
    }else{
      modulesParam.splice(modulesParam.indexOf(paramValue), 1);
    }

    // filter Boolean to remove empty strings from params array
    setSearchParams({modules: modulesParam.filter(Boolean).join(',')});
  };

  return (
    <div className={`flex flex-wrap gap-2 header ${ isChangeSidebar ? 'header--inversed' : ''}`}>
      <div>
        <div className="hamburger-menu" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
          <img src={hamburgerIcon} alt="hamburger-menu" />
        </div>
        { isOpenSidebar && <SidebarComp isChangeSidebar={isChangeSidebar} /> }
      </div>
      <div className="header-title">
        <h1>Users and Todos</h1>
        <Button size="xs" color={isNewList ? 'info' : 'gray'} onClick={() => updateSearchParams(URL_PARAM_VALUES.NEWLIST)}>Toggle content</Button>
        <Button size="xs" color={isChangeSidebar ? 'info' : 'gray'} onClick={() => updateSearchParams(URL_PARAM_VALUES.CHANGESIDEBAR)}>Toggle sidebar</Button>
      </div>
  </div>
  );  
}

export default HeaderComp;