export interface Movie{
    adult:boolean;
    backdrop_path:string| null;
    belongs_to_collection:null | object;
    budget:number;
    genres:Array<{
        id:number;
        name:string;

    }>;
    homepage:string; 
    imdb_id:string | null;
    original_language:string;
    original_title:string;
    overview:string | null;
    popularity:number;
    poster_path:string|null;
    production_companies:Array<{
    name:string;
    id:number;
    logo_path:string | null;
    origin_country:string;
    }>;
    production_countries:Array<{
        
        iso_3166_1:string;
        name:string;

    }>;
    release_date:string;
    revenue:number;
    runtime:number|null;
    status:string
    tagline:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}