export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.request()
    }

  async request() {
        let response = await fetch('https://api.coincap.io/v2/assets/bitcoin')
        let content = await response.json()

        console.log(content)
        this.setState({
            coin: content.data.name, 
            price: Math.floor(content.data.priceUsd * 100) / 100
        })
    }

    render() {
        return (
            <>
                <header>
                    <h1>CryptoMaster</h1>
                </header>
                <div className="table">
                    <div className="table_row">
                        <div className="cell">№</div>
                        <div className="cell">Name</div>
                        <div className="cell">Price</div>
                        <div className="cell">24h %</div>
                        <div className="cell">7d %</div>
                        <div className="cell">Total market value</div>
                        <div className="cell">Volume(24h)</div>
                        <div className="cell">Coins circulated</div>
                    </div>
                    <div className="table_row">
                        <div className="cell">1</div>
                        <div className="cell">
                            <img src="./img/2.png" style={{ height: '20px', width: '20px' }} />
                            <div className="coin">{this.state.coin}</div>
                        </div>
                        <div className="cell price">{this.state.price}</div>
                        <div className="cell">5%</div>
                        <div className="cell">10%</div>
                        <div className="cell">57,000,000,000</div>
                        <div className="cell">1,000</div>
                        <div className="cell">1,000,000</div>
                    </div>
                </div>
            </>
        )
    }
}