import { Category } from "./category";

/** Class of a music */
export class Film {
    public id: number;
    public title: string;
    public realisateur: string;
    public resume: string;
    public image: string;
    public link: string;
    public category: Category;

    /**
    * Create a music
    */
    constructor(id: number,
                title: string,
                realisateur: string,
                resume: string,
                image: string,
                link:string,
                category: Category)
    {
        this.id = id;
        this.title = title;
        this.realisateur = realisateur;
        this.resume = resume;
        this.image = image;
        this.link = link;
        this.category = category;
    }
}