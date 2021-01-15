import {Injectable} from '@angular/core';

export interface BlogPost {
  header: string;
  content: string;
}
@Injectable({providedIn: 'root'})
export class PostServiceService {

  posts: BlogPost[] = [
    {header: 'Title 1', content: 'text 1'},
    {header: 'Title 1', content: 'text 1'},
  ];

  submit(editedPost: BlogPost, editedHeader: string, editedContent: string): void {
    editedPost.header = editedHeader;
    editedPost.content = editedContent;
  }
  constructor() {
  }

  getPosts(): BlogPost[] {
    return [...this.posts];
  }
}
