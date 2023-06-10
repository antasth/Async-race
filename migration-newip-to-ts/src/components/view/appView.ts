import { NewsData, DataResponse, Source, SourceResponse } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: DataResponse): void {
        const values: NewsData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourceResponse): void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
