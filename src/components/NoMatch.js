import React, { Component } from 'react'

class NoMatch extends Component {
  componentDidMount () {
    this.updateCanvas()
  }
  updateCanvas () {
    const TAU = Math.PI * 2
    let canvas, ctx, width, height
    let flakes = []

    window.addEventListener('load', () => {
      canvas = this.refs.canvas
      ctx = canvas.getContext('2d')
      resize()

      for (let i = 0; i < 900; i++) {
        let f = new Flake()
        f.y = Math.random() * height
        flakes.push(f)
      }

      requestAnimationFrame(draw)
    })

    window.addEventListener('resize', resize)

    function resize () {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function draw () {
      requestAnimationFrame(draw)
      ctx.clearRect(0, 0, width, height)
      let flakesLength = flakes.length
      ctx.fillStyle = 'hsl(0, 0%, 100%)'
      ctx.beginPath()
      for (let i = 0; i < flakesLength; i++) {
        flakes[i].update().draw()
      }
      ctx.fill()
    }

    class Flake {
      constructor () {
        this.reset()
      }
      reset () {
        this.x = 0
        this._x = Math.random() * width
        this.y = -5
        this.z = Math.random() * 0.8 + 0.2
        this.o = Math.random() * Math.PI
      }
      update () {
        this.x =
          Math.cos(this.o + this.y * (1 - this.z) * 0.05) * this.z * 20 +
          this._x
        this.y += this.z * 8
        if (this.y > height + 5) {
          this.reset()
        }
        return this
      }
      draw () {
        let r = this.z * 1.5 + 0.5
        ctx.moveTo(this.x + r, this.y)
        ctx.arc(this.x, this.y, r, 0, TAU)
      }
    }
  }
  render () {
    setTimeout(() => this.props.history.push('/'), 5000)
    return (
      <div className='snow'>
        <canvas ref='canvas' width={500} height={300} />
        <h1 className='no-match'>
          #Sorry... that url you're looking for doesn't seem to exist :(
          <br />
          ##ReDirecting you to an existing page
        </h1>
      </div>
    )
  }
}

export default NoMatch
