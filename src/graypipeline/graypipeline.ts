export class Graypipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    public static readonly KEY = 'Gray';
    constructor(game: Phaser.Game) {
        super({
            game: game,
            fragShader: `
            precision mediump float;
            
            uniform sampler2D uMainSampler[%count%];
            uniform float a;
            
            varying vec2 outTexCoord;
            varying float outTexId;
            varying vec4 outTint;
            varying vec2 fragCoord;
            
            void main()
            {
                vec4 texture;
            
                %forloop%
            
                gl_FragColor = texture;
                gl_FragColor.rgb = mix(gl_FragColor.rgb,vec3(0.2126 * gl_FragColor.r + 0.7152 * gl_FragColor.g + 0.0722 * gl_FragColor.b),a);
            }
            `
        });
    }

    onPreRender() {
        this.set1f("a", 1);
    }
}
