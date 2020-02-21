/*
action 객체를 맂드는 액션 생성 함수들을 선언합니다
(action creators).
여기서 () => ({})은 function() { return { } }와
동일한 의미입니다.
*/
import * as types from './ActionTypes';
export const increment = () => ({
    type: types.INCREMENT
});
export const decrement = () => ({
    type: types.DECREMENT
});
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});