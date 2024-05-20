import './Cards.css'
import Card from './Card'
import Image1 from '../../assets/images/image-retro-pcs.jpg'
import Image2 from '../../assets/images/image-top-laptops.jpg'
import Image3 from '../../assets/images/image-gaming-growth.jpg'

const Cards = () => {
  return (
    <div className='cards'>
        <Card number='01' title='Reviving Retro PCs' text='What happens when old PCs are given modern upgrades' image={Image1}/>

        <Card number='02' title='Top 10 Laptops of 2022' text='Our best picks for various needs and budgets' image={Image2}/>

        <Card number='03' title='The Growth of Gaming' text='How the pandemic has sparked fresh opportunities' image={Image3}/>
    </div>
  )
}

export default Cards