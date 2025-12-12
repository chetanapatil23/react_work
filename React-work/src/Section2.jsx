function Section2(){
  const user={
   name: "chetana",
  age:22 }
  localStorage.setItem("user",JSON.stringify(user))
  //console.log(localStorage.getItem("user"))
 const usera= JSON.parse(localStorage.getItem("user"))
 console.log(usera)
  //localStorage.clear()
   return(<>
 {/* { localStorage.setItem("user",user)}*/}

   </>)
}
export default Section2
