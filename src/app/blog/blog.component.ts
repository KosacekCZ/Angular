import {Component, OnInit} from '@angular/core';

interface BlogPost {
  header: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts: BlogPost[] = [
    {header: 'Title 1', content: 'text 1'},
  ];

  editedHeader = '';
  editedContent = '';
  editedPost: BlogPost | undefined = undefined;

  // tslint:disable-next-line:typedef
  createPost() {
    this.posts.push({header: 'Title 1', content: 'text 1'}, );
  }

  submit(): void {
    if (this.editedPost) {
      this.editedPost.header = this.editedHeader;
      this.editedPost.content = this.editedContent;
      this.editedPost = undefined;
    }
  }
}


export class Post {
  header: string;
  content: string;

  // tslint:disable-next-line:typedef
  constructor(header: string, content: string) {
    this.header = header;
    this.content = content;
  }

  // tslint:disable-next-line:typedef
  screatePost() {
    // tslint:disable-next-line:no-unused-expression
    new Post(this.header, this.content);
  }
}
