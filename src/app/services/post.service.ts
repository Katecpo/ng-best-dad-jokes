import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Post[]>('http://localhost:3001/posts').subscribe(
        {
          next: val => {
            resolve(val);
          },
          error: err => reject(err)
        }
      )
    })
  }
}
