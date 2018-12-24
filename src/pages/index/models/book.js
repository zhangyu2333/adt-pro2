import { getbook } from '@/services/bookapi'
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