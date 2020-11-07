import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private titleService: Title) { }

  generateTags(tags?) {
    tags = {
      title: 'Space-X-App',
      description: 'Seo friendly Server side rendered app',
    }

    this.titleService.setTitle(tags.title);

    this.meta.updateTag({name: 'SSR-app', content: 'Seo friendly Server side rendered app'});
  }
}
