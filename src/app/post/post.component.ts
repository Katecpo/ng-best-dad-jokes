import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Post } from '../models/post.interface';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  post?: Post;
  @Input() isLoading = true;

  constructor(private _postService: PostService, private route: ActivatedRoute, private _router: Router) {}

  async ngOnInit(): Promise<void> {
    this.posts = await this._postService.getAllPosts();

    this.post = this.posts.find((post) => post.slug === this.route.snapshot.params['slug']);
    this._router.events.subscribe(val => {
        this.post = this.posts.find((post) => post.slug === this.route.snapshot.params['slug']);
      }
    );

    this.isLoading = false;
  }


}
