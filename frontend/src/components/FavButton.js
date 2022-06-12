

function FavButton({icon, handler}) {
    return (<button className="favBtn" onClick={handler}>{icon}</button>)
}
export default FavButton;