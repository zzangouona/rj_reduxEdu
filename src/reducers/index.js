import number from './number';
import color from './color';
import { combineReducers } from 'redux';
/*
서브 리듀서들을 하나로 합칩니다.
combineReducers를 실행하고 나면, 나중에 store의 형태가 파라미터로 젂달한 객체의 모양대로 맂들어집니다.
지금의 경우:
{
numberData: {
number: 0
},
colorData: {
color: 'black'
}
}
로 맂들어집니다.
*/
const reducers = combineReducers({
    numberData: number,
    colorData: color
});
export default reducers;