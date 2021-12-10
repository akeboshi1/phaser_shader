import { GetFray } from "./outlineShader";

var tmpquality = 0.1;
var frag = GetFray(tmpquality);
export class OutlinePipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
    public static readonly KEY = 'Outline';
    protected _outlineColor: Phaser.Display.Color;
    protected _thickness: number;
    protected _renderWidth: number;
    protected _renderHeight: number;
    protected renderBoo: boolean = false;
    constructor(game: Phaser.Game) {
        super({
            game: game,
            renderTarget: true,
            fragShader: frag
        });
        this._thickness = 0;
        this._renderWidth = 0;
        this._renderHeight = 0;
        this._outlineColor = new Phaser.Display.Color();
        this.renderBoo = false;
    }

    onPreRender() {
        if (this.renderBoo) return;
        this.renderBoo = true;
        this.set1f('thickness', this._thickness);
        this.set3f('outlineColor', this._outlineColor.redGL, this._outlineColor.greenGL, this._outlineColor.blueGL);
        this.set2f('texSize', this.renderer.width, this.renderer.height);
    }

    set quality(value) {
        if (tmpquality === value) {
            return;
        }
        tmpquality = value;
        frag = GetFray(value);
    }

    set renderWidth(value) {
        if (this._renderWidth === value) return;
        this._renderWidth = value;
        this.renderBoo = false;
    }

    set renderHeight(value) {
        if (this._renderHeight === value) return;
        this._renderHeight = value;
        this.renderBoo = false;
    }

    set thickness(value) {
        this._thickness = value;
        this.renderBoo = false;
    }

    set color(value) {
        if (typeof (value) === 'number') {
            value = Phaser.Display.Color.IntegerToRGB(value);
        }
        this._outlineColor.setFromRGB(value);
        this.renderBoo = false;
    }

    /**
     * 十六进制转换成rgb值
     * @param colorStr 
     * @returns 
     */
    private colorRgb(colorStr: string) {
        var sColor = colorStr.toLowerCase();
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return "RGB(" + sColorChange.join(",") + ")";
        }
        return sColor;
    };

}
