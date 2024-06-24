import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../stor/themeConfig"


import Moon from "../assets/icon/Moon"
import Sun from "../assets/icon/Sun"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"



const Header = () => {

    const state = useSelector(state => state.themeConfig)
    const dispatch = useDispatch()

    const [t , i18] = useTranslation()
    return (
        <>
        <header className="flex justify-between items-center p-5 flex-wrap 
                dark:text-white dark:bg-[#101010] 
                text-[#101010] bg-white">
                    <h1 className="text-3xl font-bold mb-[20px] ml-[10px]">
                        <Link to="/">
                            { t('ToDo')}
                        </Link>
                    </h1>

            <div className="flex gap-[20px] items-center ">
                <Link to="/AddNew"> 
                  {t('add new')}
                </Link>
                { i18.language == "en" ? 
                    <button onClick={()=>{i18.changeLanguage("ar")}}
                    title="switch to arabic"
                    > 
                        AR
                    </button>
                    : 
                    <button onClick={()=>{i18.changeLanguage("en")}}
                     title="switch to english"
                    >
                        EN
                    </button>
                }
                { state?.theme === "light" ? 
                    <button 
                    onClick={()=>{dispatch(toggleTheme("dark"))}}>
                        <Moon/> 
                    </button>
                    :
                    <button 
                    onClick={()=>{dispatch(toggleTheme("light"))}}>
                        <Sun />
                    </button>

                }
            </div>
            
        </header>
            
        </>
    )
}

export default Header
