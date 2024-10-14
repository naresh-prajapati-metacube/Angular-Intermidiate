import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prepend' })
export class prependPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(title: string): any[] {
    if (!title) {
      return [title];
    }

    return ['Product-'+title];
  }
}