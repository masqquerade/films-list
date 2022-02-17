import React from 'react';

import { CommentInputWrapper, Wrapper } from './styles';
import SendSvg from '../../../svgs/Send';

interface ICommentInput {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<any>>;
    placeholder: string;
    sendFunc: (body: string) => void;
};

const CommentInput: React.FC<ICommentInput> = ({ value, onChange, placeholder, sendFunc }) => {
    return (
        <div>
            <Wrapper>
                <CommentInputWrapper
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <div 
                    className='svg'
                    onClick={() => sendFunc(value)}
                >
                    <SendSvg />
                </div>
            </Wrapper>
        </div>
    );
};

export default CommentInput;