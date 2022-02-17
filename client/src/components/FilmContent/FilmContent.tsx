import React from 'react';

import { ContentWrapper, TextWrapper } from './styles/index';

import Reviews from '../Reviews/Reviews';
import { ICommentData } from '../../interfaces/index';

interface IFilmContent {
    title: string;
    body: string;
    fullSizeLogo: string;
    comments: ICommentData[];
    setComments: React.Dispatch<React.SetStateAction<ICommentData[] | undefined>>;
};

const FilmContent: React.FC<IFilmContent> = ({ title, body, fullSizeLogo, comments, setComments }) => {
    return (
        <div>
            <ContentWrapper>
                <img src={`http://localhost:5000/${fullSizeLogo}`} />

                <TextWrapper>
                    <h1>{title}</h1>
                    <h4>{body}</h4>
                </TextWrapper>
            </ContentWrapper>

            <Reviews 
                comments={comments}
                setComments={setComments}
            />
        </div>
    );
};

export default FilmContent;