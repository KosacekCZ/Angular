import {Component, OnInit} from '@angular/core';
import {BlogPost, PostServiceService} from '../post-service.service'
import {ExcreptPipe} from '../excrept.pipe';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  renderedPosts: BlogPost[] = [];

  editedHeader = '';
  editedContent = '';
  editPost: BlogPost | undefined = undefined;

  constructor(public postService: PostServiceService) {
  }

  createPost(): void {
    this.renderedPosts.push({header: 'Title 1', content: 'text 1'}, );
  }

  submit(): void {
    if (this.editPost !== undefined) {
      this.postService.submit(this.editPost, this.editedHeader, this.editedContent);
      this.editPost = undefined;
    }
  }
}
