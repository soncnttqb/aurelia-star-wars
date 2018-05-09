export class FilterValueConverter {
  toView(array, searchTerm, filterFunc, categoryId) {
	
    return array.filter((item) => {
	
	  let matches = searchTerm && searchTerm.length > 0 ? filterFunc(searchTerm, item, categoryId): true;
	  				
	  return matches;
    });
  }
}
