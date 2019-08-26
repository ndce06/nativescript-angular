import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class filterPipe implements PipeTransform {
    transform(list: any[], queryString: string, key: string): any {
        if(!queryString) {
            return list;
        }
        
        return list.filter((l) => {
            return l[key] && (l[key]).toString().toLowerCase().indexOf(queryString.toLowerCase()) > -1;
        });
    }
}