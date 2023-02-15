import{ Home } from "./mainComponents/Home";
// import{ Cart } from "./mainComponents/Cart";
import{ Feedback } from "./mainComponents/Feedback";
import{ Subscribe } from "./mainComponents/Subscribe";


function Main(){

    return(
        <main>
            <Home/>
            <Feedback/>
            <Subscribe/>
        </main>
       

    )
}

export { Main };