import { Routes, Route } from 'solid-app-router';
import { Component } from 'solid-js';
import { BtnGroupPage, HomePage, MenuPage, NotFound, RangePage, SelectPage, TabsPage } from '../../views/pages';
import { RoutersComponentsEnum, RouterSDKEnum } from './RoutersComponentsEnum';
import { ButtonPage, ModalPage } from '../../views/pages/actions';
import { TooltipPage } from '../../views/pages/data/tooltip/TooltipPage';
import { StepsPage } from '../../views/pages/navigation/steps/StepsPage';
import { InputPage } from '../../views/pages/form/input/InputPage';
import { FormPage } from '../../views/pages/sdk/form/FormPage';


export const Routers: Component = () => {

    return (
        <Routes>
            <Route path={`/`} element={<HomePage/>}/>
            <Route path={`/${RoutersComponentsEnum.FORM_SELECT}`} element={<SelectPage/>}/>
            <Route path={`/${RoutersComponentsEnum.FORM_INPUT}`} element={<InputPage/>}/>
            <Route path={`/${RoutersComponentsEnum.MENU}`} element={<MenuPage/>}/>
            <Route path={`/${RoutersComponentsEnum.TABS}`} element={<TabsPage/>}/>
            <Route path={`/${RoutersComponentsEnum.BTN_GROUPS}`} element={<BtnGroupPage/>}/>
            <Route path={`/${RoutersComponentsEnum.RANGE}`} element={<RangePage/>}/>
            <Route path={`/${RoutersComponentsEnum.MODALS}`} element={<ModalPage/>}/>
            <Route path={`/${RoutersComponentsEnum.BUTTON}`} element={<ButtonPage/>}/>
            <Route path={`/${RoutersComponentsEnum.TOOLTIP}`} element={<TooltipPage/>}/>
            <Route path={`/${RoutersComponentsEnum.STEPS}`} element={<StepsPage/>}/>
            <Route path={`/${RouterSDKEnum.FORM}`} element={<FormPage/>}/>

            <Route path="/*all" element={<NotFound/>}/>
        </Routes>
    );
};
