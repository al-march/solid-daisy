import { Component } from 'solid-js';
import { Page } from '@views/pages/base/Page';
import { Select } from '@components/form/select/Select';
import { Option } from '@components/form/select/Option';

export const SelectPage: Component = () => {

    return (
        <Page full class="p-4">
            <h2>Select page</h2>

            <Select placeholder="Cars">
                <Option value="Ford">Ford</Option>
                <Option value="Audi">Audi</Option>
                <Option value="Reno">Reno</Option>
            </Select>
        </Page>
    );
};