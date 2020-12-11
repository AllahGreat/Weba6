import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostDataComponent } from './post-data/post-data.component';
import { PagingComponent } from './paging/paging.component';
import { FooterPostsComponent } from './footer-posts/footer-posts.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    PostComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    PostCardComponent,
    SearchWidgetComponent,
    LatestPostComponent,
    CategoriesComponent,
    TagsComponent,
    PostDataComponent,
    PagingComponent,
    FooterPostsComponent,
    PostsTableComponent,
    NewPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
