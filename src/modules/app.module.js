import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import axios from 'axios';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다
const basename = isDevelopment ? 'http://localhost/kiwigw-reactjs' : '/kiwigw';

const fetchForums = (forum_id) => {
  return axios.get(`${basename}/api/tags/${forum_id}`);
};

const fetchUser = () => {
  return axios.get(`${basename}/api/users/this`);
};

// 액션 타입을 정의해줍니다.
const UPDATECURRENTTAGS         = 'kiwi/app/UPDATE_CURRENT_TAGS';
const START_FETCHING_TAGS       = 'kiwi/app/START_FETCHING_TAGS';
const STOP_FETCHING_TAGS        = 'kiwi/app/STOP_FETCHING_TAGS';
const FETCHING_TAGS_SUCCESS     = 'kiwi/app/FETCHING_TAGS_SUCCESS';
const FETCHING_TAGS_FAILURE     = 'kiwi/app/FETCHING_TAGS_FAILURE';
const START_FETCHING_USER       = 'kiwi/app/START_FETCHING_USER';
const FETCHING_USER_SUCCESS     = 'kiwi/app/FETCHING_USER_SUCCESS';
const FETCHING_USER_FAILURE     = 'kiwi/app/FETCHING_USER_FAILURE';
const SIGNOUT_USER_SUCCESS      = 'kiwi/app/SIGNOUT_USER_SUCCESS';
const SIGNOUT_USER_FAILURE      = 'kiwi/app/SIGNOUT_USER_FAILURE';
const UPDATE_ROOT_CLASS         = 'kiwi/app/UPDATE_ROOT_CLASS';
const OPEN_COMPOSER             = 'kiwi/app/OPEN_COMPOSER';
const CLOSE_COMPOSER            = 'kiwi/app/CLOSE_COMPOSER';

// 액션 생성 함수를 만듭니다.
/*그런데, 코드상에서 해당 액션함수들이 어떠한 파라미터를 받는지 명시하고 싶을 수도 있습니다.
createAction 함수는 세가지의 파라미터를 받는데요, 첫번째는 액션이름, 두번째는 payloadCreator, 세번째는 metaCreator 입니다.
두번째와 세번째 파라미터는 payload 값과 meta 값을 지정해주는 함수인데요, 다음 코드를 보면 이해하기 쉽습니다.
const sample = createAction('SAMPLE', (value) => value + 1, (value) => value - 1);
sample(1);
// { type: 'SAMPLE', payload: 2, meta: 0 }
// 이렇게 하면, 액션 생성함수들이 어떠한 값을 파라미터로 받는지 알수있다
payloadCreator 가 생략되어있을때는, 액션생성함수의 파라미터가 그대로 payload 값으로 설정되며, metaCreator 가 생략되어있을때에는, meta 값을 따로 생성하지 않습니다.
https://velopert.com/3533
*/

export const updateCurrentForum = createAction(UPDATECURRENTTAGS, currentForum => currentForum);
export const start_fetching     = createAction(START_FETCHING_TAGS);
export const stop_fetching      = createAction(STOP_FETCHING_TAGS);
export const success            = createAction(FETCHING_TAGS_SUCCESS);
export const failure            = createAction(FETCHING_TAGS_FAILURE);
export const start_user         = createAction(START_FETCHING_USER);
export const success_user       = createAction(FETCHING_USER_SUCCESS);
export const failure_user       = createAction(FETCHING_USER_FAILURE);
export const success_signout    = createAction(SIGNOUT_USER_SUCCESS);
export const failure_signout    = createAction(SIGNOUT_USER_FAILURE);
export const rootclass          = createAction(UPDATE_ROOT_CLASS, classname => classname);
export const open_composer      = createAction(OPEN_COMPOSER);
export const close_composer     = createAction(CLOSE_COMPOSER);

export const getForums = (currentForum) => {
    // 요청을 시작합니다
    // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getForums().then(...) 을 할 수 있습니다
    return (dispatch, getState) => {
        // 먼저, 요청이 시작했다는것을 알립니다
        dispatch(start_fetching());

        fetchForums(currentForum).then(
            // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 FETCHING_TAGS_SUCCESS 액션을 디스패치합니다.
            data => dispatch(success(fromJS(data.data)))
        ).catch(error => {
            // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
            dispatch(failure());
        });
    };
};

/*
// input 값을 바꾼 새 객체를 만들기
nextState = state.set('input', '새로운 값');
// todos 에 항목 추가하기
nextState = state.update('todos', todos => todos.push(Map({ id:2, text: '새로운거', checked: false })));
// 0번째 항목 checked 값 반전하기
nextState = state.updateIn(['todos', 0, 'checked'], checked => !checked);
https://velopert.com/3533

// immutable 를 통해 만든 Map | List 객체들은
// 일반 객체가 아니므로 state.app.forums 등등으로 불러올 수 없다.
// state.app.get('forums') 같은식으로 불러와야된다.
// 값을 설정할때는 state.app.set('forums') 형식으로 한다.
*/
const initialState = Map({
    fetchingForums: false,
    tags: null,
    currentForum: '',
    error: false,
    rootclass: null,
    isOpenSidePanel: false,
    isOpenComposer: false,
});

/**
 * reducer for top level app state
 */
export default handleActions({
    [UPDATECURRENTTAGS]: (state, action) => state.set('currentForum', action.payload),
    [START_FETCHING_TAGS]: (state, action) => state.set('fetchingForums', true),
    [FETCHING_TAGS_SUCCESS]: (state, action) => {
        return state.set('tags', action.payload)
            .set('fetchingForums', false)
            .set('error', false);
    },
    [UPDATE_ROOT_CLASS]: (state, action) => state.set('rootclass', action.payload),
    [OPEN_COMPOSER]: (state, action) => state.set('isOpenComposer', true),
    [CLOSE_COMPOSER]: (state, action) => state.set('isOpenComposer', false),
}, initialState);
