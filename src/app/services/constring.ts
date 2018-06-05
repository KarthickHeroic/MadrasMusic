export class Connection {
    private static serviceurl ="https://service.madrasmusic.com/MMService.svc/";
    public serviceurl: string;
    constructor() {
        this.serviceurl = Connection.serviceurl;
    }
    }
export class Cservices {
    private static getAlbum = "GetNewReleases";
    private static Auth = "AuthenticateUser?";
    private static Signup = "RegisterUser?"; 
    private static getSongs = "GetAlbumDetails?";


    public getAlbum: string;
    public Auth: string;
    public Signup: string;
    public getSongs: string;

    constructor() {
        this.getAlbum = Cservices.getAlbum;
        this.Auth = Cservices.Auth;
        this.Signup = Cservices.Signup;
        this.getSongs = Cservices.getSongs;
    }
}
