export class BlurPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {

    private _kernels = [0];
    private _blur = 0;
    private _quality = 1;
    private pixelWidth = 1; // width of pixel wo resolution
    private pixelHeight = 1; // height of pixel wo resolution
    constructor(game: Phaser.Game) {
        super({
            game: game,
            renderTarget: true,
            fragShader: `\
            #ifdef GL_FRAGMENT_PRECISION_HIGH
            #define highmedp highp
            #else
            #define highmedp mediump
            #endif
            precision highmedp float;
            
            // Scene buffer
            uniform sampler2D uMainSampler; 
            varying vec2 outTexCoord;
            
            // Effect parameters
            uniform vec2 uOffset;
            
            void main (void) {
              vec4 color = vec4(0.0);
            
              // Sample top left pixel
              color += texture2D(uMainSampler, vec2(outTexCoord.x - uOffset.x, outTexCoord.y + uOffset.y));
            
              // Sample top right pixel
              color += texture2D(uMainSampler, vec2(outTexCoord.x + uOffset.x, outTexCoord.y + uOffset.y));
            
              // Sample bottom right pixel
              color += texture2D(uMainSampler, vec2(outTexCoord.x + uOffset.x, outTexCoord.y - uOffset.y));
            
              // Sample bottom left pixel
              color += texture2D(uMainSampler, vec2(outTexCoord.x - uOffset.x, outTexCoord.y - uOffset.y));
            
              // Average
              color *= 0.25;
            
              gl_FragColor = color;
            }
            `
        });
    }


}
