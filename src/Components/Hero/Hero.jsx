import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'> 

        <div className='left'>
            <img src='src\assets\images\image-web-3-desktop.jpg'></img>
            <div className='content'>
                <div className='heading'>
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>
                <div className='text'>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                    <a>READ MORE</a>
                </div>                
            </div>

        </div>

        <div className='right'>
            <h1>New</h1>

            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>

            <div className='line'></div>

            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>

            <div className='line'></div>

            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>

            <div className='line'></div>

        </div>
    </section>
  )
}

export default Hero