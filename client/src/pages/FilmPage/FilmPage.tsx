import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchFilmData } from '../../hooks/filmData';
import { useCreateComment } from '../../hooks/commentData';

import Navbar from '../../components/Navbar/Navbar';
import FilmContent from '../../components/FilmContent/FilmContent';
import CommentInput from '../../components/UI/CommentInput/CommentInput';
import StarsList from '../../components/StarsList/StarsList';
import Reviews from '../../components/Reviews/Reviews';
import Spinner from '../../components/Spinner/Spinner';

import { ReviewBlockWrapper, SpinnerWrapper, DataWrapper } from './styles/index';

import { useFetchCommentsData } from '../../hooks/commentData';

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
    const { comments, setComments } = useFetchCommentsData(id!);
    const film = useFetchFilmData(id!);

    const sendComment = (body: string) => {
        const starsCount = stars.filter(el => el.isFixed).length;
        const data: ICommentData = {
            body: body,
            filmId: id!,
            stars: starsCount
        };

        useCreateComment(data);

        setStars(() => {
            return stars.map(el => {
                el.isFixed = false;
                el.isOn = false;
                return el;
            });
        });

        setInputValue('');
        setComments([...comments!, data]);
    };

    return (
        <div>
            <Navbar />

            {
                film
                    ?
                    <div style={{ display: 'flex', justifyContent:'space-between' }}>
                        <FilmContent
                            title={film?.title!}
                            body={film?.body!}
                            fullSizeLogo={film?.fullSizeLogo!}
                            trailerLink={film?.trailerLink}
                            iviLink={film?.iviLink}
                        />

                        <ReviewBlockWrapper>
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

                            <Reviews
                                comments={comments!}
                                setComments={setComments}
                            />
                        </ReviewBlockWrapper>
                    </div>

                    :
                    <div>
                        <SpinnerWrapper>
                            <Spinner />
                        </SpinnerWrapper>
                    </div>
            }
        </div>
    );
};

export default FilmPage;