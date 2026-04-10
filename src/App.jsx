import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';



const user =[
  {
    img: "https://plus.unsplash.com/premium_photo-1661418115591-f86017c31e6f?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    info:"",
    tag:"Satisfied"
  },
  {
     img: "https://plus.unsplash.com/premium_photo-1670884441849-779eb186fb9b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info:"",
    tag:"Underserved"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1745457820936-baf864e11d75?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    info:"",
    tag:"Underbanked"
  }
]

function App() {
  return (
    <div>
      <Section1  user= {user} />
      <Section2 />
    </div>
  )
}

export default App
      
         
   
  