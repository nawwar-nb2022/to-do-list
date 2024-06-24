import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Data } from "../../constantData"
import { useLocalStorage } from "../Global/useLocalStorage"


const Tasks = () => {



    const {setItem , getItem } = useLocalStorage("tasks")
    
    const [t , i18 ] = useTranslation()
    const [ToDoData , setToDoData] = useState([])


    const [loading , setLoading ] = useState(false)
    useEffect(()=>{
        const data = getItem()
        setToDoData(data)

        setLoading(true)
    },[loading])

    

    const handleDelete = (e)=>{
        const newData = ToDoData.filter(data=>{
            return data.id !== e
        })

        setItem(newData)
        setToDoData(newData)
    }


    const handleFilter =(e)=>{

        let value = e.target.value;
        const allData = getItem()
        let newData = ToDoData
            if (value=="completed"){
                 newData = ToDoData.filter(
                    data=>{return data.status === "completed"}
                )
            }
            else if (value=="not"){
                 newData = ToDoData.filter(
                    data=>{return data.status === "not completed"}
                )
            }
            else{
                newData = allData
            }

        setToDoData(newData)
    }

    const handleEvent = (id) =>{
            const newD = ToDoData.map(d=>{
                if (d.id == id){
                    if(d.status == "completed") d.status = "not completed"
                    else if(d.status == "not completed") d.status = "completed"
                }
                return d
            })
            
            setToDoData(newD)
            setItem(newD)
    }



    if(!loading ) {
        return <> loading </>
    }

    return (
        <section className="px-[20px] ">
                <div className="w-[30%] flex gap-[20px] items-center">
                  <p>{("filter")} : </p>
                    <select  id="Status" onChange={(e)=>handleFilter(e)} className="selectStyle">
                        <option value="all"> {t('all')} </option>
                        <option value="completed">{t('completed')}</option>
                        <option value="not"> {t('not completed')}</option>
                    </select>
                </div>


                <table className="w-full overflow-x-scroll m-auto">
                    <thead >
                        <tr className="border-b-1">
                            <td className="p-2 tableHeder">{t('title')}</td>
                            <td className="p-2 tableHeder" >{t("desc")}</td>
                            <td className="p-2 tableHeder">{t('status')}</td>
                            <td className="p-2 tableHeder">{t('Action')}</td>
                        </tr>

                    </thead>
                        <tbody className="mt[20px]">
                            { ToDoData && ToDoData.map(d=>{
                                return <tr key={d.id} className="hover:bg-[rgba(0,0,0,0.1)] ">
                                        <td className="p-2">{d.title}</td>
                                        <td className="p-2">{d.desc}</td>
                                        <td className="p-2" style={{direction : "ltr " , width:"200px" }}>
                                            <label className="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={d.status=="completed"}
                                                onChange={()=>handleEvent( d.id)}
                                            />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{t(d.status)}</span>
                                            </label>
                                        </td>
                                        <td className="flex gap-[10px] p-2"> 
                                            <Link to={`/${d.id}`} 
                                            className="bg-[#3E85C3] p-1 rounded text-white"  
                                            >
                                                {t('update')}  
                                            </Link>    

                                            <button type="button" 
                                            className="bg-[#D34946]  p-1 rounded text-white"
                                            onClick={()=>handleDelete(d.id)}
                                            >
                                                {t('delete')} 
                                            </button>    
                                         </td>
                                        
                                </tr>
                            })}
                        </tbody>
         </table>


        </section>
    )
}

export default Tasks
