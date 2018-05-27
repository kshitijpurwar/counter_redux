import { 
    UPDATE 
} from "../actions";

const initialCount = 6;

export default function(state = initialCount , action){
    return  action.type === UPDATE?  
                state + action.payload :  
                state;
}