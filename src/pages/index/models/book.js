import { getbook } from '@/services/bookapi'
import { getcode } from '@/services/api';
export default {
    namespace:'book',
    state:{
        bookList:[]
    },
    effects:{
        *getBookData(_,{ call,put }){
            let bookData = yield call(getbook)
            console.log(bookData)
            yield put({
                type:'setBookData',
                payload:bookData.data.list
            })
        },
        *getPhoneMessage({ payload },{ call, put }){
            let res = yield call(getcode,payload)
            console.log(res)
        }       
    },
    reducers:{
        setBookData(state,{payload}){
            return {...state,bookList:payload}
        },
        // upDateList(state,{payload}){
        //     return {...state,bookList:payload}
        // }
    }
}