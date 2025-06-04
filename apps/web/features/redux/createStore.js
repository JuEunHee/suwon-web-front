/**
 * createStore 함수는 Redux의 핵심 기능 중 하나로,
 * 애플리케이션의 상태를 관리하는 스토어를 생성합니다.
 * 이 함수는 리듀서를 인자로 받아, 상태를 업데이트하고 구독자에게 알리는 기능을 제공합니다.
 *
 * * @example
 * const store = createStore(reducer);
 * store.dispatch({ type: 'ACTION_TYPE', payload: data });
 * store.subscribe(() => {
 *   console.log('State changed:', store.getState());
 * }
 *
 * @see https://keeper.tistory.com/27
 *
 * @param {*} reducer
 * @returns {Object} store
 */

// store를 생성하기 위한 createStore 함수
function createStore(reducer) {
  let state;
  let handler = [];

  reducer(state, {
    type: '@@__init__@@',
  });

  return {
    // dispatch 함수는 액션을 받아서 리듀서를 호출하고 상태를 업데이트합니다.
    // 그리고 구독자에게 상태 변경을 알립니다.
    // 이 함수는 상태를 변경하는 유일한 방법입니다.
    // (모든 데이터 흐름을 관리하는 중앙 허브 역할. 액션 객체를 받아서 적절한 스토어에 전달.)
    dispatch: (action) => {
      state = reducer(state, action);
      handler.forEach((h) => {
        h();
      });
    },
    subscribe: (listener) => {
      handler.push(listener);
    },
    getState: () => state,
  };
}

/**
 * Action으로 사용될 state와 subscribe를 수행하기 위한 handler를 가짐.
 * 이 스코프(변수)들을 반환 함수에서 사용 가능하도록 앞서 말했던 클로저 함수가 사용됨.
 * 반환함수로 store를 통해 사용가능한 함수 dispatch, subscribe, getStore를 만들어줌.
 */

const InitState = {
  type: "",
  counter: 0,
  porfile: {
    id: "",
    imageUrl: ""
  }
};
function reducer(state = InitState, action) {
  switch (action.type) {
    case "counter":
      return { ...state, counter: action.counter };
    case "action":
      return { ...state, type: action.action };
    default:
      return { ...state };
  }
}
const store = createStore(reducer);
function actionCreator(type, data) {
  return {
    type: type,
    ...data
  };
}
store.subscribe(() => {
  console.log("알림", store.getState());
});
function foo() {
  store.dispach(actionCreator("counter", { counter: 1 }));
}
function zoo() {
  store.dispach(actionCreator("action", { action: "fetch" }));
}
foo();
zoo();