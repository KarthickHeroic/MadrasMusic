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
    private static getSongsUrl ="GetAssetURLv2?"


    public getAlbum: string;
    public Auth: string;
    public Signup: string;
    public getSongs: string;
    public getSongsUrl: string;

    constructor() {
        this.getAlbum = Cservices.getAlbum;
        this.Auth = Cservices.Auth;
        this.Signup = Cservices.Signup;
        this.getSongs = Cservices.getSongs;
        this.getSongsUrl = Cservices.getSongsUrl;
    }
}
