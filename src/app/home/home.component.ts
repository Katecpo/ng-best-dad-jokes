import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/post.interface';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = [];
  @Input() isLoading = true;

  constructor(private _postService: PostService) { }

  async ngOnInit(): Promise<void> {
    this.posts = await this._postService.getAllPosts();
    this.isLoading = false;
  }


}
