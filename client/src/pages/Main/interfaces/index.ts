import React from 'react';

export interface CurrentScreenData {
    index: number;
    changeCurrentScreen: Function;
    children?: React.ReactNode
};