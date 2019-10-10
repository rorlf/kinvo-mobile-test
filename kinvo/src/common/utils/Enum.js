export default function Enum(obj, keyLabel = 'id') {
    function get(id) {
      let filteredItem;
  
      Object.keys(obj).map(key => {
        if (
          obj[key] &&
          Object.prototype.hasOwnProperty.call(obj[key], keyLabel) &&
          obj[key][keyLabel] === id
        ) {
          filteredItem = obj[key];
        }
        return undefined;
      });
  
      return filteredItem;
    }
  
    return Object.freeze({
      ...obj,
      get,
    });
  }
  