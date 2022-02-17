import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchFilmData } from '../../hooks/filmData';
import { useCreateComment } from '../../hooks/commentData';

import Navbar from '../../components/Navbar/Navbar';

import FilmContent from '../../components/FilmContent/FilmContent';
import CommentInput from '../../components/UI/CommentInput/CommentInput';
import StarsList from '../../components/StarsList/StarsList';

import { ICommentData } from '../../interfaces';

const FilmPage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [stars, setStars] = useState([
        {
            isOn: false,
            isFixed: false
        },
        {
            isOn: false,
            isFixed: false
        },
        {
            isOn: false,
            isFixed: false
        },
        {
            isOn: false,
            isFixed: false
        },
        {
            isOn: false,
            isFixed: false
        }
    ]);

    const { id } = useParams();
    const film = useFetchFilmData(id!);

    const sendComment = (body: any) => {
        const starsCount = stars.filter(el => el.isFixed).length;
        console.log(starsCount)
        const data: ICommentData = {
            body: body.target.value,
            filmId: id!,
            stars: starsCount
        };

        useCreateComment(data)
    };

    return (
        <div>
            <Navbar />
            <FilmContent
                title={film?.title!}
                body={film?.body!}
                fullSizeLogo={film?.fullSizeLogo!}
            />
            <CommentInput
                value={inputValue}
                onChange={setInputValue}
                placeholder={'Напишите Ваш отзыв.'}
                sendFunc={sendComment}
            />

            <StarsList
                stars={stars}
                setStars={setStars}
            />
        </div>
    );
};

export default FilmPage;