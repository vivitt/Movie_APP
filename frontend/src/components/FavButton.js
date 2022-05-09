function FavButton({icon, handler}) {
    return (<button onClick={handler}>{icon}</button>)
}
export default FavButton;