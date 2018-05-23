export class Svg {
    private static onepolygon = " <pattern id='pattern-one' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-0' height='1' width='1' preserveAspectRatio='none' xlink:href=''/>/</pattern>\
        <rect class = 'gradient-box-1' width = '285' height = '285' />\
            <polygon class='polygon' points = '200.56 41.94 84.44 41.94 26.39 142.5 84.44 243.06 200.56 243.06 258.61 142.5 200.56 41.94' fill = 'url(#pattern-one)'>";

    private static twopolygon = "  <pattern id='pattern-one' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-0' height='1' width='1' preserveAspectRatio='none' xlink:href='' />/</pattern>\
    <pattern id='pattern-two' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-1' height='1' width='1' preserveAspectRatio='none' xlink:href='' />/</pattern>\
    <rect class='gradient-box-2' width='285' height='285' />\
    <polygon class='polygon' points = '123.17 114.83 48.56 114.83 11.25 179.45 48.56 244.06 123.17 244.06 160.48 179.45 123.17 114.83' fill = 'url(#pattern-one)'/>\
    <polygon class='polygon' points = '235.44 49.94 160.83 49.94 123.52 114.55 160.83 179.17 235.44 179.17 272.75 114.55 235.44 49.94' fill = 'url(#pattern-two)'/>";


    private static threepolygon = " <pattern id='pattern-one' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-0' height='1' width='1' preserveAspectRatio='none' xlink:href=''/>/</pattern>\
    <pattern id='pattern-two' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-1' height='1' width='1' preserveAspectRatio='none' xlink:href=''/>/</pattern>\
    <pattern id='pattern-three' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-2' height='1' width='1' preserveAspectRatio='none' xlink:href=''/>/</pattern>\
       <rect class='gradient-box-3' width='285' height='285' />\
        <polygon class = 'polygon' points = '60.54 144.13 27.34 204.79 63.28 263.87 132.42 262.29 165.61 201.62 129.67 142.54 60.54 144.13'  fill = 'url(#pattern-one)'/>\
            <polygon class='polygon' points = '57.73 23.98 24.53 84.64 60.47 143.72 129.6 142.14 162.8 81.47 126.86 22.39 57.73 23.98'  fill = 'url(#pattern-two)'/>\
                <polygon class='polygon' points = '162.45 82.37 129.26 143.03 165.2 202.11 234.33 200.52 267.52 139.86 231.58 80.78 162.45 82.37'  fill = 'url(#pattern-three)'/>";


    private static fourpolygon = "<pattern id='pattern-one' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-0' height='1' width='1'preserveAspectRatio = 'none' xlink:href=''/>/</pattern>\
    <pattern id='pattern-two' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-1' height='1' width='1'preserveAspectRatio = 'none' xlink:href=''/>/</pattern>\
    <pattern id='pattern-three' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-2' height='1' width='1'preserveAspectRatio = 'none' xlink:href=''/>/</pattern>\
    <pattern id='pattern-four' height='100%' width='100%' patternContentUnits='objectBoundingBox'>\
    <image id='image-3' height='1' width='1'preserveAspectRatio = 'none' xlink:href=''/>/</pattern>\
    <rect class='gradient-box-4' width='285' height='285' />\
    <polygon class='polygon' points='125.6 18.77 68.59 18.77 40.08 68.14 68.59 117.51 125.6 117.51 154.1 68.14 125.6 18.77' fill='url(#pattern-one)' />\
            <polygon class='polygon' points = '211.38 68.52 154.37 68.52 125.87 117.89 154.37 167.26 211.38 167.26 239.89 117.89 211.38 68.52' fill = 'url(#pattern-two)'/>\
                <polygon class='polygon' points = '126.36 117.33 69.35 117.33 40.84 166.71 69.35 216.08 126.36 216.08 154.87 166.71 126.36 117.33' fill = 'url(#pattern-three)'/>\
                    <polygon class='polygon' points = '212.15 167.08 155.14 167.08 126.63 216.46 155.14 265.83 212.15 265.83 240.65 216.46 212.15 167.08' fill = 'url(#pattern-four)'/>";

    public polygon_1: string;
    public polygon_2: string;
    public polygon_3: string;
    public polygon_4: string;


    constructor() {
        this.polygon_1 = Svg.onepolygon;
        this.polygon_2 = Svg.twopolygon;
        this.polygon_3 = Svg.threepolygon;
        this.polygon_4 = Svg.fourpolygon;
    }

}
