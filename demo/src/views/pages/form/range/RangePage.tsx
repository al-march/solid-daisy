import { Component, createSignal } from 'solid-js';
import { Page } from '../../base/Page';
import { Range, Input } from '../../../../../../src/lib';



export const RangePage: Component = () => {
    const [value, setValue] = createSignal(0);
    const [range, setRange] = createSignal(10);

    return (
        <Page full class="p-4">
            <h2 class="text-2xl">Range</h2>
            <br/>

            <div class="w-96">
                <Input
                    type="text"
                    placeholder="Set value"
                    bordered
                    value={value()}
                    onInput={e => setValue(Number((e.target as HTMLInputElement).value))}
                />
                <p class="py-4">Value: {value()}</p>
                <Range value={value()} onChange={setValue}/>

                <br/>

                <Input
                    type="text"
                    placeholder="Set value"
                    bordered
                    value={range()}
                    onInput={e => setRange(Number((e.target as HTMLInputElement).value))}
                />
                <p class="py-4">Range: {range()}</p>
                <Range
                    value={value()}
                    step={range()}
                    onChange={setValue}
                />
            </div>
        </Page>
    );
};
