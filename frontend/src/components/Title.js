import { useUserContext } from "../context/UserContextProv";
function Title () {
    const activeUser = useUserContext();
    const userName = activeUser.userData.name.charAt(0).toUpperCase() + activeUser.userData.name.slice(1)
    return (
        <div className="title">
            
         {(activeUser.userData.name) ?
            
        <h2>Hi {userName}, welcome to MovieApp!</h2> 
       : <h1>MovieApp</h1>}
        </div>
    )
}
export default Title;