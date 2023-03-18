import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText:string): any[] {
    console.log('search');
    
    if (!items) return [];
    if (!searchText) return items;
  
    return items.filter(item => {
      return Object.keys(item).some(key => {
        console.log(key);
        
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
  }
}
