import History from "./History"

export default function TopPart() {
    return (
        <div id="div1" className='topCon'>
            <div style={{ display: 'flex' }}>
                <div style={{ width: 50 + '%' }}>
                    <div className='logo'>
                        <h3>iamthere.ai</h3>
                    </div>
                </div>
                <div style={{ width: 50 + '%' }}>
                    <div className='cr circleBorder discord ml-auto text-center'>
                        <i className='fab fa-discord'></i>
                    </div>
                </div>
            </div>

            <div className='histories myRow'>
                <div className='cr btnCon newChatBTN'>
                    <div className='btnCon3 mx-auto text-center'>
                        <i className='fas fa-plus'></i>&nbsp;&nbsp;<span>New chat</span>
                    </div>
                </div>
                <History question={"How are you?"} />
                <History question={"انا احبك يا حبيبي"} />
                <History question={"कुत्ते का क्या मतलब होता है?"} />
                <History question={"انا احبك يا حبيبي"} />
            </div>
        </div>
    )
}