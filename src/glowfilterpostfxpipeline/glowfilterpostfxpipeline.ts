const PostFXPipeline = Phaser.Renderer.WebGL.Pipelines.PostFXPipeline;
const GetValue = Phaser.Utils.Objects.GetValue;

export class GlowFilterPostFxPipeline extends PostFXPipeline {
  public static KEY: string = "GlowFilterPost";
  private _intensity: number = 0;
  constructor(game) {
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
            uniform float intensity;
            
            void main() {
              vec4 front = texture2D(uMainSampler, outTexCoord);
              vec4 sum = vec4(0);
              for(int xx = -4; xx <= 4; xx++) {
                for(int yy = -3; yy <= 3; yy++) {
                  float dist = sqrt(float(xx*xx) + float(yy*yy));
                  float factor = 0.0;
                  if (dist == 0.0) {
                    factor = 2.0;
                  } else {
                    factor = 2.0/abs(float(dist));
                  }
                  sum += texture2D(uMainSampler, outTexCoord + vec2(xx, yy) * 0.002) * factor;
                }
              }
              
              gl_FragColor = mix(front, sum, intensity);
            }
            `
    });

    this._intensity = 0;
  }

  onPreRender() {
    this.set1f('intensity', this._intensity);
  }

  // intensity
  set intensity(value) {
    this._intensity = value;
  }
}