import * as pixi from 'pixi.js';

const app = new pixi.Application<HTMLCanvasElement>({
    height: 640,
    width: 640,
    background: 'white'
});

document.body.appendChild(app.view);
document.body.style.borderStyle = "solid"

const texture = pixi.Texture.from('assets/circlex.png');
const sprite = new  pixi.Sprite(texture);

sprite.scale.set(0.5)
sprite.anchor.set(0.5, 0.5)
let container = new pixi.Container();

container.addChild(sprite)
app.stage.addChild(container)

container.x = app.view.width / 2;
container.y = app.view.height / 2;

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

let f = 1;
let g = 100;
app.ticker.add(delta => {
    
    container.rotation = Math.cosh(f * delta)

    if (f > g) {
        f *= 0.997
        g = 1
    } else {
        f *= 1.003
        g = 100
    }
    
})
