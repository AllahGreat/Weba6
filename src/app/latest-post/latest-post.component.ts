import { Component, OnInit, Input } from '@angular/core';
import {BlogPost} from '../BlogPost'
import {PostService} from '../post.service'

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.css']
})
export class LatestPostComponent implements OnInit {

  blogPosts: Array<BlogPost>;

  constructor(private data: PostService) { }

  ngOnInit(): void {
   this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3))
  }

}
