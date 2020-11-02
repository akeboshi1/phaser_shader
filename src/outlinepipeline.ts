export class OutlinePipeline extends Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline {
    public static readonly KEY = 'Outline';
    constructor(game: Phaser.Game) {
        super({
            game: game,
            renderer: game.renderer,
            fragShader: `
            precision mediump float;

            varying vec2       outTexCoord;
            varying vec4       vColor;
            uniform sampler2D  uSampler;
            uniform float      gray;
    
            void main(void) {
                gl_FragColor = texture2D(uSampler, outTexCoord);
                gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126 * gl_FragColor.r + 0.7152 * gl_FragColor.g + 0.0722 * gl_FragColor.b), gray);
            }
      `
        });
    }
}
