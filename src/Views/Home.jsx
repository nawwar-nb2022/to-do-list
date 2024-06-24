import Tasks from "../components/Tasks"
import { useEffect } from "react"
import { Data } from "../../constantData"
import { useLocalStorage } from "../Global/useLocalStorage"

const Home = () => {

    // static data 

    
    // const {setItem , getItem } = useLocalStorage("tasks")
 
    // useEffect(()=>{
    //     setItem(Data)
    //     console.log(getItem());
    // },[])
    return (
        <>

        <Tasks />
                
        </>
    )
}

export default Home
