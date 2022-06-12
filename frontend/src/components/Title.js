import { useAuth } from "../context/AuthenticationProv";

function Title ({name}) {
    const {authData} = useAuth();
   
    return (
        <div className="title">
            <h1>MovieApp</h1>    
            {(authData.name) && <h2>Hi {(name.charAt(0).toUpperCase() + name.slice(1))}, welcome to MovieApp!</h2> 
            }
</div>
    )
}
export default Title;