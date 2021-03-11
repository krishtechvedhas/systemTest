import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  dynamicSort(property, flag) {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      let aLower;
      let bLower;
      if (typeof (a[property]) === 'string') {
        aLower = flag ? a[property] : (a[property] ? a[property] : '0000000000000'); //If null make it as Z for sorting
        bLower = flag ? b[property] : (b[property] ? b[property]: '0000000000000'); // If null make it as Z for sorting
      }
      else if (typeof (a[property]) === 'number') {
        aLower = flag ? a[property] : (a[property] ? a[property] : '00000000000000');
        bLower = flag ? b[property] : (b[property] ? b[property] : '00000000000000');
      }
      else if (typeof (a[property]) === 'boolean') {
        aLower = flag ? a[property] : (a[property] ? a[property] : '');
        bLower = flag ? b[property] : (b[property] ? b[property] : '');
      }

      const result = (aLower < bLower) ? -1 : (aLower > bLower) ? 1 : 0;
      return result * sortOrder;
    }
  }
}
