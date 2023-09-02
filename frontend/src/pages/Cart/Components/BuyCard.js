function BuyCards() {
    return (
        <div className="buyCard">
            <div id="bcContainer">
                <div id="bcText">
                    <div id="lineOne">
                        <div id="bcTotal">
                            <p className="bcTotal">Total</p>
                        </div>
                        <div id="bcPrice">
                            <p className="bcPrice">R$00,00</p>
                        </div>
                    </div>
                    <div id="lineTwo">
                        <div id="bcLength">
                            <p className="bcLength">5 itens</p>
                        </div>
                        <div id="bcFreight">
                            <p className="bcFreight">Frete: R$00,00</p>
                        </div>
                    </div>
                </div>
                <div id="lineThree">
                    <div id="bcDiscount">
                        <p className="bcDiscount">Desconto: R$00,00</p>
                    </div>
                </div>
                <div id="bcDownItens">
                    <div id="bcCep">
                        <input type="text" className="bcCep"
                            placeholder="CEP"
                        />
                        <span>error</span>
                    </div>
                    <div id="bcCupom">
                        <input type="text" className="bcCupom"
                        placeholder="CUPOM"
                        />
                        <span>error</span>
                    </div>
                    <div id="bcBuy">
                        <button className="bcBuy">Finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BuyCards