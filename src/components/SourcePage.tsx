import { createSignal } from 'solid-js'
import { useNavigate } from "@solidjs/router";
import Hacker from '../svg/crime-hacker-icon.svg'

export default function SourcePage() {
  
    const naviagte = useNavigate();

    const [url, setUrl] = createSignal("")
  
    const handleChange = (event: Event): void => {
        // setUrl((event.target as HTMLInputElement).value)
        // console.log((event.target as HTMLInputElement).value)
        // console.log("test")
        
    }

    const handleSubmit = (string: string): void => {
        
        console.log("submit:")        
        console.log(string)
        setUrl("")
        console.log("End submit")  
        naviagte("/Home")

    };

    return (

    <div class="bg-black w-screen h-screen flex justify-center items-center">
       
        <div class="bg-white rounded-xl border p-4">
            
            <div class="flex justify-center items-center"><img src={Hacker} class="h-15" alt="Hacker Logo" /></div>
            <br></br>
            <h1>Welcome to FreeAnime.tv!</h1>
            <h4>Please enter your source......</h4>
            <br></br>
            <br></br>
            <input placeholder='https://gogoanime.mom/' type="text" value={url()} onChange={handleChange}/>
            <button class="ml-4" onClick={[handleSubmit, url]}>Submit</button>

        </div>

    </div>

  )
}
