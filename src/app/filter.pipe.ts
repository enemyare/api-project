import { Pipe, PipeTransform } from '@angular/core';
import { FilterData, UserList } from './interfaces';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(userArr: UserList, filters: FilterData) {

    const arr = userArr.data.filter(user => {
      const even = !filters.even || user.id%2==0 ? true: false;
      const odd = !filters.odd ||  user.id%2==1 ? true: false
      const hasId = !filters.userId || user.id === filters.userId;
      const hasEmail = !filters.userEmail || user.email.includes(filters.userEmail || "");

      return even && odd && hasId && hasEmail;

    });
    return arr
  }
}
