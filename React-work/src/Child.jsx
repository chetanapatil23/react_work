function Child({sendname}){
return(
        <div>
         <button onClick={()=>{
            sendname("hello parent")
         }}>send data</button>
        </div>
    )
}
export default Child;
