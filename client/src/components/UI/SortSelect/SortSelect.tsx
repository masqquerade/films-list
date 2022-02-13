import React from 'react';

import { Select, Option } from './styles';
import { IOption } from '../../Filter/Filter';

interface ISortInput {
    defaultValue: string;
    options: IOption[];
    value: string;
    onChange: Function;
};

const SortInput: React.FC<ISortInput> = ({ options, defaultValue, value, onChange }) => {
    return (
        <div>
            <Select
                value={value}
                onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
                defaultValue={'DEFAULT'}
            >
                <option value="DEFAULT" disabled>{defaultValue}</option>
                {
                    options.map((option, index) => {
                        return (
                            <Option
                                value={option.value}
                                key={index}
                            >
                                {option.name}
                            </Option>
                        )
                    })
                }
            </Select>
        </div>
    );
};

export default SortInput;