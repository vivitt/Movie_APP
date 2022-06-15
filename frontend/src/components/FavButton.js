import { Button } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
function FavButton({icon, handler, added}) {
 
    return (
        <Button className="favBtn" onClick={handler}>
        {(added) ? <Favorite></Favorite>
                : <FavoriteBorder></FavoriteBorder>
        }
        </Button>)
}
export default FavButton;