import { Routes, Route } from 'solid-app-router';
import { Component } from 'solid-js';
import { HomePage, NotFound, SelectPage } from '@views/pages';
import { RoutersEnum } from '@shared/router/Routers.enum';

export const Routers: Component = () => {

    return (
        <Routes>
            <Route path={`/`} element={<HomePage/>}/>
            <Route path={`/${RoutersEnum.FORM_SELECT}`} element={<SelectPage/>}/>

            <Route path="/*all" element={<NotFound/>}/>
        </Routes>
    );
};