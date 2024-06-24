import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : "light", // light , dark 
    isDarkMode : false
}

const themeConfigSlice = createSlice({
    name : "themeConfig",
    initialState ,
    reducers : {
        toggleTheme : (state , {payload}) =>{
            payload = payload || state.theme
            localStorage.setItem("theme" , payload)
            state.theme = payload ;
            if(payload == "light"){
                state.isDarkMode = false
            }else if(payload == "dark"){
                state.isDarkMode = true
            }

            if(state.isDarkMode){
                document.querySelector("body")?.classList.add("dark")
            }else if(!state.isDarkMode){
                document.querySelector("body")?.classList.remove("dark")
            }
        }
    }
})


export default themeConfigSlice.reducer;

export const { toggleTheme} = themeConfigSlice.actions