import React from 'react';

class HomeContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            addItemForm: {
                name: '',
                description: '',
                img: ''
            },
            items: [{
                name: 'AMD Ryzen Threadripper 1950X',
                description: 'Incredible 16 Cores and 32 Threads of processing power, 4.0 GHz Precision Boost (up to 4.2 GHz with XFR), 40MB of Cache Memory, 64 PCIe Gen3 lanes, Quad-channel DDR4, Max temperature: 68°c',
                stocks: 10,
                img: 'https://www.scan.co.uk/images/products/super/2869438-l-a.jpg'
            }, {
                name: 'Intel Core i9 7980XE',
                description: 'Maximize Performance, Power Your Creativity ,Mega-Task to the Extreme ,Intel Smart Cache ,Intel Turbo Boost Max Technology 3.0',
                stocks: 3,
                img: 'https://images-na.ssl-images-amazon.com/images/I/81gkh4npW8L._SL1500_.jpg'
            }, {
                name: 'AMD Ryzen 7 2700X',
                description: '2nd Gen Ryzen, AMD StoreMI Technology, AMD SenseMI Technology, AMD Ryzen Master Utility, Socket AM4, Max Boost Frequency 4.3 GHz, DDR4 Support, Unlocked Processor, Thermal Design Power 105W, AMD Wraith Prism Cooler Included',
                stocks: 5,
                img: 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-499-V01.jpg'
            }]
        }

        this.renderItems = this.renderItems.bind(this)
    }

    renderItems() {
        return this.state.items.map((item) => (
            <div key={item.name} className="card card-block" style={{width: '18rem'}}>
                <img className="card-img-top" src={item.img} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>Stocks: {item.stocks}</p>
                    <p className="card-text">{this.wordLimit(item.description)}</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        ))
    }

    addItem() {
        this
    }

    wordLimit(word) {
        if (word.length > 150) return word = word.substring(0, 150) + '...';
        else return word
    }

    renderModal() {
        
    }

    render() {
        return (
            <div className="col-sm-6 d-flex pb-8">
                { this.renderItems()}
            </div>
            
        )
    }
}

export default HomeContainer;