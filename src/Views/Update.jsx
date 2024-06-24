import { current } from "immer"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router"
import {useLocalStorage} from "../Global/useLocalStorage"

const AddNew = () => {

    const {id} = useParams()
    const {setItem , getItem} = useLocalStorage("tasks")
    const [t , i18 ] = useTranslation()

    const data = getItem()

    const currenItem = data.filter(d =>d.id == id)
    
    // console.log(currenItem.title);

    const [inputs , setInput] = useState({
        title : currenItem[0].title,
        desc : currenItem[0].desc
    })

    const handleChange = (e)=>{
        let name = e.target.name  
        let value = e.target.value 

        setInput((prev) =>({...prev , [name] : value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

       let newData = data.map(d=>{
           if(d.id == id){
               d.title = inputs.title ,
               d.desc = inputs.desc
           }

           return d
       })
       
       setItem(newData)
       
        location.assign("/")
    }
     return (
        <section className='w-full h-[80vh] h-[80svh] flex items-center justify-center
        
        text-[#101010] bg-white
        dark:text-white dark:bg-[#101010] flex-col gap-[20px]
        
        '>

            <div>
                {t('update item')}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col rounded-md  shadow-md 
            border-md  max-w-[400px] h-fit border-2  p-10
            " >

                <div className="inputGroup">
                    <label htmlFor="title">
                        {t('title')}:
                    </label>
                    <input type="text" name="title" id="title"  
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputs.title} onChange={(e)=>handleChange(e)}  />
                </div>
                
                <div className="inputGroup">
                    <label htmlFor="description">
                        {t('desc')}:
                    </label>
                    <textarea name="desc" id="description" cols="30" rows="10"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputs.desc} onChange={handleChange}
                    ></textarea>
                </div>

                <div className="w-full flex justify-center ">
                    <button type='submit' className="
                        hover:transform-[scale:1.2]
                    bg-green-500 px-3 py-1 rounded-md text-white">
                        {t('update')} 
                    </button>

                </div>
            </form>
        </section>
    )
}

export default AddNew
