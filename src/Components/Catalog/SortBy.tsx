import React, {ChangeEvent} from 'react';
import {useForm} from "react-hook-form";

type formType = {
    minPrice: string,
    maxPrice: string
}

type SortByType ={
    setRating: (arg: string) => void,
    brands: string[],
    changeCheckbox: (event: ChangeEvent) => void,
    setPrice: (minPrice: string, maxPrice: string) => void,
    setMinPrice: (arg: string) => void
    setMaxPrice: (arg: string) => void
}

const SortBy:React.FC<SortByType> = ({setRating, brands, changeCheckbox, setPrice,
                                         setMaxPrice, setMinPrice}) => {

    const {register, watch, handleSubmit} = useForm<formType>({
        mode: "onSubmit"
    })

    const onSubmit = () => {
        if (watch('maxPrice').length === 0) {
            setMaxPrice('9999999999')
        } else  {
            setMaxPrice(watch('maxPrice'))
        }
        if (watch('minPrice').length === 0) {
            setMinPrice('0')
        } else  {
            setMinPrice(watch('minPrice'))
        }
    }

    return (
        <div>
            <div className={'catalog__sort__rating'}>
                <div className={'catalog__sort__rating__text'}>Avg. Customer Review</div>
                <ul>
                    <div onClick={() => setRating('0')} className={'catalog__home'}>
                        <div className={'category__home__i'}></div>
                        Clear</div>
                    <li><div onClick={() => setRating('4')} className={'catalog__sort__rating__row'}>
                        <div className={'rating__item__1'}/>
                        <span className={'rating__text'}>& Up</span></div></li>
                    <li><div onClick={() => setRating('3')} className={'catalog__sort__rating__row'}>
                        <div className={'rating__item__2'}/>
                        <span className={'rating__text'}>& Up</span></div></li>
                    <li><div onClick={() => setRating('2')} className={'catalog__sort__rating__row'}>
                        <div className={'rating__item__3'}/>
                        <span className={'rating__text'}>& Up</span></div></li>
                    <li><div onClick={() => setRating('1')} className={'catalog__sort__rating__row'}>
                        <div className={'rating__item__4'}/>
                        <span className={'rating__text'}>& Up</span></div></li>
                </ul>
            </div>
            <div className={'catalog__sort__brand'}>
                <div className={'catalog__brand'}>Brand</div>
                <div>
                    {brands.map((obj, index) => <div key={index}><input type='checkbox' value={obj}
                                                                        onChange={changeCheckbox}/><span>{obj.toUpperCase()}</span></div>)}
                </div>
            </div>
            <div className={'sort__byPrice'}>
                <div className={'sort__price'}>Price</div>
                <div className={'catalog__home'} onClick={() => setPrice('0', '99999999')}>
                    <div className={'category__home__i'}></div>
                    Any price</div>
                <div className={'sort__number'} onClick={() => setPrice('0' , '100')}>Under $100</div>
                <div className={'sort__number'} onClick={() => setPrice('100' , '250')}>$100 to $250</div>
                <div className={'sort__number'} onClick={() => setPrice('250' , '500')}>$250 to $500</div>
                <div className={'sort__number'} onClick={() => setPrice('500' , '99999999')}>$500 & Above</div>
                <div className={'sort__setPrice'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('minPrice')} type={"number"} className={'sort__input'} placeholder={'$ Min'}/>
                        <input {...register('maxPrice')} type={"number"} className={'sort__input'} placeholder={'$ Max'}/>
                        <input  className={'sort__submit'} value={'Go'} type={"submit"}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SortBy;