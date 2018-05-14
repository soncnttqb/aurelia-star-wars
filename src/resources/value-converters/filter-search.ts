export class FilterValueConverter {
  public toView(array, searchTerm, filterFunc, categoryId) {

    return array.filter(item => {
	    const matches = searchTerm && searchTerm.length > 0 ? filterFunc(searchTerm, item, categoryId) : true;
	    return matches;
    });
  }
}
