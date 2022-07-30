const Changer=(state=0, action) =>
{
    switch (action.type) {
      case 'increment': return state+1;
      case 'decrement': return state-1;
      case 'res': return state = 0;
      default: return state;
    }
}
export default Changer;