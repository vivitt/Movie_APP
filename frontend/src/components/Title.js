import { useAuth } from "../context/AuthenticationProv";

function Title () {
    const {authData} = useAuth();
    const userName = authData.name
    return (
        <div className="title">
            
         {(authData.name) ?
            
        <h2>Hi {userName}, welcome to MovieApp!</h2> 
       : <h1>MovieApp</h1>}
        </div>
    )
}
export default Title;