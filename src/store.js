import {reactive} from 'vue'

const store = reactive({
    cards: [],
    search: '',
    searchArray: [],
})

export default store