export const getElementDimensionsRef = (ref) => {
    const { current } = ref;
  
    if (current) {
      const { offsetWidth: width, offsetHeight: height } = current;
      return { width, height };
    }
  
    return { width: 0, height: 0 };
  };