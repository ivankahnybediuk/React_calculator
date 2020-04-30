function Container (){
    return <div className ="container">
        <input className="screen" type="text"></input>
        <div className="number-container">
        <Button style="light-btn" text="AC"/>
        <Button style="light-btn" text="+/-"/>
        <Button style="light-btn" text="%"/>
        <Button style="red-btn" text="/"/>
        <Button style="btn" text="7"/>
        <Button style="btn" text="8"/>
        <Button style="btn" text="9"/>
        <Button style="red-btn" text="*"/>
        <Button style="btn" text="4"/>
        <Button style="btn" text="5"/>
        <Button style="btn" text="6"/>
        <Button style="red-btn" text="-"/>
        <Button style="btn" text="1"/>
        <Button style="btn" text="2"/>
        <Button style="btn" text="3"/>
        <Button style="red-btn" text="+"/>
        <Button style="big-btn" text="0"/>
        <Button style="btn" text="."/>
        <Button style="red-btn" text="="/>
        </div>
    </div>
}
function Button (props){
return <div className="btn" className={props.style} >{props.text}</div>
}

// ========================================================
let page = <Container/>;

// ================================================ Render ==========================================================

ReactDOM.render(page, document.getElementById("root"));
