/**
 * Create by zhangjiawei on 2018/2/17.
 */
import {Sprite} from '../base/Sprite';
import {DataStore} from '../base/DataStore';

export class Land extends Sprite {
    constructor() {
        const image = Sprite.getImage('land');
        super(image,
            0, 0,
            image.width, image.height,
            0, DataStore.getInstance().canvas.height - image.height,
            image.width, image.height);
        // 地板的水平变化坐标
        this.landX = 0;
        // 地板的移动速度
        this.moveSpeed = 2;
    }

    draw() {
        this.landX = this.landX > this.img.width - DataStore.getInstance().canvas.width ? 0 : this.landX + this.moveSpeed;
        super.draw(this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            -this.landX,
            this.y,
            this.width,
            this.height);
    }
}
