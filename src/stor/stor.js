import {combineReducers, configureStore} from "@reduxjs/toolkit"
import themeConfig from "./themeConfig"


const rootReducer = combineReducers({
        themeConfig : themeConfig
})

export const store = configureStore({
    reducer : rootReducer
})
