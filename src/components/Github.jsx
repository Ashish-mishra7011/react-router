
import {useEffect,useState} from "react"
function Github() {
     const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Ashish-mishra7011')
     .then(response=>response.json())
     .then(res=>{
         setData(res)
     })
     
   }, [])
   
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers : {data.followers}
    <img className="m-auto p-4" src={data.avatar_url} alt="Profile photo" width={400}/>
    </div>
)
}

export default Github
