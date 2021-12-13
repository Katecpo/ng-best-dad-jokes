import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../models/post.interface";

@Pipe({
  name: 'exceptPipe'
})
export class ExceptPipePipe implements PipeTransform {

  transform(value: Post[], currentPost: Post | undefined): Post[] {
    if (currentPost === undefined) return value;
    return value.filter(p => p.id != currentPost.id);
  }

}
