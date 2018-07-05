import { Template, ROUTER } from "./template";
import { Header } from "./utils/decorators";

@Header("排行榜")
class Rank extends Template {
    htmlTitle: string;
    static title: string;

    constructor() {
        super();

        this.render(this.headerWithUrl({ title: Rank.title, url: ROUTER.index }), this.homeTab());
        this.setTitle(this.htmlTitle);
    }
}
new Rank;
