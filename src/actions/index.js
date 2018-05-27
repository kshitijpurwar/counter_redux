export const UPDATE = 'update';

export default function(value){
  return {
    type: UPDATE,
    payload: value
  }
}