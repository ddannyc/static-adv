'use client'

import { useEffect } from "react";
import AddGrid from "./libs/canvas_grid";
import { images } from "./libs/placeholder-data"

export default function HomePage() {
    function drawImg(ctx, data) {
        const { src, x, y, width, height } = data
        const img = new Image()
        img.onload = () => {
            ctx.drawImage(img, x, y, width, height)
        }
        img.src = src
    }

    useEffect(() => {
        const canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            CanvasRenderingContext2D.prototype.addGrid = AddGrid
            const ctx = canvas.getContext("2d");
            ctx.addGrid();

            for (let img of images) {
                drawImg(ctx, img)
            }
        }
    }, [])
    return (
        <div>
            <canvas id="canvas" width="1000px" height="1000px"></canvas>
        </div>
    )
}
