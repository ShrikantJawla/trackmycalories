import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { diaryReducer } from './diary/diary.reducer';
import { authReducer } from './auth/auth.reducer'
import { tasksReducer } from './tasks/tasks.reducer';
import { shopReducer } from './shopProducts/shop.reducer';
import { cartReducer } from './cart/cart.reducer';
import { adminReducer } from './admin/admin.reducer';
import { connectAndFollowReducer } from './connectAndFollow/connectAndFollow.reducer';
import { feedReducer } from './feeds/feeds.reducer';

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    diary: diaryReducer,
    tasks: tasksReducer,
    shop: shopReducer,
    cart: cartReducer,
    admin: adminReducer,
    connectAndFollow: connectAndFollowReducer,
    feeds: feedReducer
})

export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))
